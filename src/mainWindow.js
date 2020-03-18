$(document).ready(() => {

    $('#currentViewContent').load('./views/verkaufslisteView.html');

})

const { remote } = require('electron')
const { BrowserWindow } = remote

let apiServerAddress = "mockAPI";

function loadVerkaufslisteView() {

    $("a").removeClass("active");
    $(event.target).addClass("active");
    $('#currentViewContent').load('./views/verkaufslisteView.html');

}

function loadWineView() {

    $("a").removeClass("active");
    $(event.target).addClass("active");
    $('#currentViewContent').load('./views/wineView.html');

}

function loadCustomerView() {

    $("a").removeClass("active");
    $(event.target).addClass("active");
    $('#currentViewContent').load('./views/customerView.html');

}

function loadWinzerView() {

    $("a").removeClass("active");
    $(event.target).addClass("active");
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
    // win.webContents.openDevTools()

    remote.getCurrentWindow().close();


}

function loadBackupView() {

    $('#currentViewContent').load('./views/datensicherungView.html');


}