const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width: 700, height: 800})
  win.loadURL('http://localhost:3000')
})
