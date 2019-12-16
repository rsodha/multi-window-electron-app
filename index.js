const { app, BrowserWindow } = require('electron')

let urls = ['https://mail.google.com/', 'https://calendar.google.com/', 'https://chat.google.com', 'https://meet.google.com', 'https://hangouts.google.com'];

function createWindow() {
    urls.forEach(url => {
        let win = new BrowserWindow();
        win.loadURL(url);
        win.maximize();
        win.removeMenu();
        win.on('closed', () => {
            win = null
        })
    });
}

app.on('ready', createWindow)