
const { remote } = require('electron')
const { BrowserWindow } = remote



function loginUser() {

    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
        nodeIntegration: true
      }
    })
    win.loadFile('./src/mainWindow.html')
    win.webContents.openDevTools()

    remote.getCurrentWindow().close();


}