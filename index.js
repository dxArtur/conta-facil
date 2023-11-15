const {app, BrowserWindow} = require('electron')
const dotenv = require('dotenv')
const path = require('path')

const envPath = path.join(__dirname, '.env')
dotenv.config({ path: envPath })

console.log(process.env.DATABASE_URL)
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