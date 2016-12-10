const electron = require('electron')
const ipc = electron.ipcRenderer

document.getElementById('selectButton').addEventListener('click', _=> {
    ipc.send('select-file')
})

ipc.on('file-name', (evt, fileNames) => {
    document.getElementById('video-player').setAttribute('src', fileNames)
})