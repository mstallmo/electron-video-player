const electron = require('electron')
const express = require('express')

const {app, BrowserWindow} = electron

app.on('ready', _ => {
    MainWindow = new BrowserWindow({
        height: 600,
        width: 600
    })

    MainWindow.loadURL(`file://${__dirname}/index.html`)

    MainWindow.on('close', _=> {
        MainWindow = null
    })
})