const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openAuth: (url) => shell.openExternal(url), // Open the URL in the default browser
});
