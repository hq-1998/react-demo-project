import { is } from '@electron-toolkit/utils'
import { BrowserWindow } from 'electron'
import path from 'path'

const defaultConfig = {
  width: 900,
  height: 670,
  show: true,
  frame: false,
  icon: path.join(__dirname, '../../build/icon.png'),
  webPreferences: {
    preload: path.join(__dirname, '../preload/index.js'),
    sandbox: false
  }
}

class ElectronWindow {
  instance: BrowserWindow
  constructor(url = '', config: BrowserWindow | null = null) {
    const mergedConfig = { ...defaultConfig, config }
    this.instance = new BrowserWindow(mergedConfig)
    const { localURL, localFile } = this._getUrl(url)
    console.log(localURL, localFile, '====')
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      this.instance.loadURL(`${process.env['ELECTRON_RENDERER_URL']}${localURL}`)
    } else {
      this.instance.loadFile(path.join(__dirname, `../renderer/${localFile}`))
    }
  }
  private _getUrl = (url = '') => {
    if (!url) {
      return {
        localURL: '',
        localFile: 'index.html'
      }
    }
    return {
      localURL: url,
      localFile: url
    }
  }
}

export default ElectronWindow
