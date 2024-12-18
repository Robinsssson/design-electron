const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('serialOperator', {
    listSerialPort: () => ipcRenderer.invoke('list-serial-port'),
    serialPortBind: (path, baudrate) => ipcRenderer.send('bind-serial-port', path, baudrate),
    write: (port, context) => ipcRenderer.send('write-context', port, context),
})