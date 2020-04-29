const electron = require('electron');
electron.Menu.setApplicationMenu(false);
electron.app.on('ready', () => {
    let mainWindow = new electron.BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 409,
        title: 'Text-to-Speech',
        icon: 'src/img/chat.ico'
    });
    mainWindow.loadURL(`file://${__dirname}/src/layout/index.html`)
    mainWindow.on('closed', () => {
        electron.app.quit()
        mainWindow = null
    })
})