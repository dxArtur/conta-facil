const {app, BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true
        }
})

    mainWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(()=>{
    createWindow()

    app.on('active', ()=>{
        if (process.platform !== "darwin") app.quit()
    })
})


app.on("window-all-closed", ()=> {
    if (process.platform !== "darwin") app.quit()
})