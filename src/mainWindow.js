const { remote } = require('electron')
const { BrowserWindow } = remote

function loadVerkaufslisteView() {
    $('#currentViewContent').load('./views/verkaufslisteView.html');

}

function loadWineView() {
    $('#currentViewContent').load('./views/wineView.html');

}

function loadCustomerView() {

    $('#currentViewContent').load('./views/customerView.html');

}

function loadWinzerView() {

    $('#currentViewContent').load('./views/winzerView.html');

}

function logoutUser() {

    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
        nodeIntegration: true
      }
    })
    win.loadFile('./src/loginWindow.html')
    win.webContents.openDevTools()

    remote.getCurrentWindow().close();


}

function doBackup() {

}