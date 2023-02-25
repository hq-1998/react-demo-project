import { app, BrowserWindow, ipcMain } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { BindWindowEvent } from './bindWindowEvent'
import SystemTray from './tray'
import { APP_QUIT, SHOW_TRAY } from './event'
import ElectronWindow from './browserWindow'

let mainWindow: BrowserWindow

function createWindow(): void {
  const electronMainWindow = new ElectronWindow()
  mainWindow = electronMainWindow.instance
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()
  BindWindowEvent.listen()
  mainWindow && BindWindowEvent.regWinEvent(mainWindow)
  // Updater.check()
  const systemTray = new SystemTray(mainWindow)
  systemTray.init()

  ipcMain.on(APP_QUIT, () => {
    app.quit()
    systemTray.destory()
  })

  ipcMain.handle(SHOW_TRAY, () => {
    mainWindow.hide()
    return true
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
