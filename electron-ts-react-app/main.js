const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {

  const { session } = require('electron');
  session.defaultSession.webRequest.onBeforeRequest({ urls: ['file://callback*'] }, (details, callback) => {
    const url = new URL(details.url);
    const code = url.searchParams.get('code');
    if (code) {
      exchangeAuthCodeForToken(code);
    }
    callback({ cancel: false });
  });

  
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Use the preload script
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'dist/index.html')); // Load bundled HTML
  mainWindow.webContents.openDevTools();
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
