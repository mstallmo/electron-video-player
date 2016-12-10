const electron = require('electron')
const express = require('express')

const {app, BrowserWindow, dialog} = electron
const ipc = electron.ipcMain

app.on('ready', _ => {
    MainWindow = new BrowserWindow({
        title: 'Video Player',
        height: 400,
        width: 600
    })

    MainWindow.loadURL(`file://${__dirname}/index.html`)

    MainWindow.on('close', _=> {
        MainWindow = null
    })
})

ipc.on('select-file', _=>{
    dialog.showOpenDialog(MainWindow, {
        properties: ['openFiles'],
        filters: [{name: 'Video', extensions: ['avi', 'mov', 'mp4']}]
    }, function(fileNames){
        MainWindow.webContents.send('file-name', fileNames)
    })
})