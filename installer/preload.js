const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  installApp: (data) => ipcRenderer.invoke('install-app', data),
  closeInstaller: () => ipcRenderer.invoke('close-installer')
});