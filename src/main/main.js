const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const SerialPort = require('serialport')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: true
    })

    ipcMain.handle('list-serial-port', async () => {
        try {
            return await SerialPort.list();
        } catch (error) {
            console.error('Error listing serial ports:', error);
            return [];
        }
    });
    
    ipcMain.on('bind-serial-port', async (path, baudrate) => {
        return await SerialPort({
            path: path,
            baudrate: baudrate,
            autoOpen: false,
        })
    })
    
    ipcMain.on('write-context', async (port, context) => {
        port.open((err) => {
            if (err) {
                return console.log(err.message);
            }
            port.write(context);
        })
    })

    win.loadFile('src/renderer/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
