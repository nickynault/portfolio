const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs-extra');
const axios = require('axios');
const os = require('os');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 700,
    minWidth: 500,
    minHeight: 600,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0a0a0f',
      symbolColor: '#ffffff',
      height: 40
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');

  // Open DevTools for development
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC Handlers
ipcMain.handle('install-app', async (event, { platform, options }) => {
  try {
    const installPath = options.installPath || getDefaultInstallPath(platform);
    const createShortcut = options.createShortcut;
    const launchAfterInstall = options.launchAfterInstall;

    // Create install directory
    await fs.ensureDir(installPath);

    // Download the application
    const downloadUrl = getDownloadUrl(platform);
    const zipPath = path.join(os.tmpdir(), `password-generator-${platform}.zip`);
    
    await downloadFile(downloadUrl, zipPath);

    // Extract the ZIP file
    const extractPath = installPath;
    await extractZip(zipPath, extractPath);

    // Clean up temporary file
    await fs.remove(zipPath);

    // Create desktop shortcut if requested
    if (createShortcut) {
      await createDesktopShortcut(installPath, platform);
    }

    // Launch application if requested
    if (launchAfterInstall) {
      await launchApplication(installPath, platform);
    }

    return { success: true, installPath };
  } catch (error) {
    console.error('Installation failed:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('close-installer', () => {
  app.quit();
});

// Helper functions
function getDefaultInstallPath(platform) {
  if (platform === 'windows') {
    return path.join(os.homedir(), 'AppData', 'Local', 'PasswordGenerator');
  } else {
    return path.join(os.homedir(), 'Applications', 'PasswordGenerator.app');
  }
}

function getDownloadUrl(platform) {
  // These would be the actual URLs where your ZIP files are hosted
  if (platform === 'windows') {
    return 'https://github.com/nickynault/Password-Generator/releases/download/v1.0/Windows_Password_Generator.zip';
  } else {
    return 'https://github.com/nickynault/Password-Generator/releases/download/v1.0/macOS_Password_Generator.zip';
  }
}

async function downloadFile(url, outputPath) {
  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
  });

  const writer = fs.createWriteStream(outputPath);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function extractZip(zipPath, extractPath) {
  const AdmZip = require('adm-zip');
  const zip = new AdmZip(zipPath);
  zip.extractAllTo(extractPath, true);
}

async function createDesktopShortcut(installPath, platform) {
  if (platform === 'windows') {
    const { spawn } = require('child_process');
    const shortcutPath = path.join(os.homedir(), 'Desktop', 'PasswordGenerator.lnk');
    const exePath = path.join(installPath, 'PasswordGenerator.exe');
    
    // Create shortcut using PowerShell
    const psScript = `
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut('${shortcutPath}')
    $Shortcut.TargetPath = '${exePath}'
    $Shortcut.Save()
    `;
    
    await new Promise((resolve, reject) => {
      spawn('powershell', ['-Command', psScript], { stdio: 'inherit' })
        .on('close', resolve)
        .on('error', reject);
    });
  }
}

async function launchApplication(installPath, platform) {
  const { spawn } = require('child_process');
  
  if (platform === 'windows') {
    const exePath = path.join(installPath, 'PasswordGenerator.exe');
    spawn('cmd', ['/c', exePath], { detached: true });
  }
}