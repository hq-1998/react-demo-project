import { BrowserWindow, IpcMainInvokeEvent, ipcMain, app } from 'electron'

type AppPath =
  | 'home'
  | 'appData'
  | 'userData'
  | 'sessionData'
  | 'temp'
  | 'exe'
  | 'module'
  | 'desktop'
  | 'documents'
  | 'downloads'
  | 'music'
  | 'pictures'
  | 'videos'
  | 'recent'
  | 'logs'
  | 'crashDumps'

export class BindWindowEvent {
  private static getWin(event: IpcMainInvokeEvent) {
    return BrowserWindow.fromWebContents(event.sender)
  }
  public static listen() {
    ipcMain.handle('minimizeWindow', (e: IpcMainInvokeEvent) => {
      this.getWin(e)?.minimize()
    })

    ipcMain.handle('maxmizeWindow', (e: IpcMainInvokeEvent) => {
      this.getWin(e)?.maximize()
    })

    ipcMain.handle('unmaximizeWindow', (e: IpcMainInvokeEvent) => {
      this.getWin(e)?.unmaximize()
    })

    ipcMain.handle('closeWindow', (e: IpcMainInvokeEvent) => {
      this.getWin(e)?.close()
    })

    ipcMain.handle('showWindow', (e: IpcMainInvokeEvent) => {
      this.getWin(e)?.show()
    })

    ipcMain.handle('hideWindow', (e: IpcMainInvokeEvent) => {
      this.getWin(e)?.hide()
    })

    ipcMain.handle('resizable', (e: IpcMainInvokeEvent) => {
      return this.getWin(e)?.isResizable()
    })

    ipcMain.handle('getPath', (_e: IpcMainInvokeEvent, name: AppPath) => {
      return app.getPath(name)
    })
  }
  public static regWinEvent(win: BrowserWindow) {
    win.on('maximize', () => {
      win.webContents.send('windowMaximized')
    })
    win.on('unmaximize', () => {
      win.webContents.send('windowUnmaximized')
    })
  }
}
