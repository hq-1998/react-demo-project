import { Menu, Tray, BrowserWindow } from 'electron'
import path from 'path'
import { CLOSE_WINDOW } from './event'

class SystemTray {
  tray!: Tray | null
  contextMenu!: Electron.Menu | null
  win: BrowserWindow
  constructor(win: BrowserWindow) {
    this.win = win
  }
  init() {
    this.tray = new Tray(path.join(__dirname, '../../build/icon.png'))
    this.contextMenu = Menu.buildFromTemplate([
      {
        label: '打开程序',
        click: () => {
          this.win.show()
        }
      },
      {
        label: '退出',
        click: () => {
          this.win.webContents.send(CLOSE_WINDOW)
        }
      }
    ])
    this.tray.setToolTip('腾腾小站')
    this.tray.setContextMenu(this.contextMenu)
  }
  destory() {
    if (!this.tray?.isDestroyed()) {
      this.tray!.destroy()
      this.tray = null
      this.contextMenu = null
    }
  }
}

export default SystemTray
