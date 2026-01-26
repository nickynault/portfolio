# Password Generator Installer

A professional Electron-based installer for the Password Generator application.

## Features

- **Cross-platform support** - Works on Windows and macOS
- **Professional UI** - Modern, clean interface
- **Automatic download** - Downloads the correct version for your platform
- **Installation options** - Choose install location, create shortcuts, auto-launch
- **Progress tracking** - Real-time installation progress
- **Error handling** - Comprehensive error reporting

## Installation

1. Download the installer for your platform:
   - [Windows Installer](https://github.com/nickynault/Password-Generator/releases/download/v1.0/PasswordGenerator-Installer-Windows.exe)
   - [macOS Installer](https://github.com/nickynault/Password-Generator/releases/download/v1.0/PasswordGenerator-Installer-macOS.dmg)

2. Run the installer
3. Select your platform (Windows/macOS)
4. Choose installation options
5. Click "Download & Install"
6. Enjoy your Password Generator!

## Development

To run the installer in development mode:

```bash
cd installer
npm install
npm start
```

To package for distribution:

```bash
# For Windows
npm run package-win

# For macOS
npm run package-mac
```

## Technical Details

- **Framework**: Electron
- **Package Manager**: npm
- **Dependencies**: axios, fs-extra, adm-zip
- **Architecture**: Main process + Renderer process with IPC communication

## License

MIT License - see LICENSE file for details.