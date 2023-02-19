import { contextBridge, IpcRenderer, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

type IRendererInvokeResult = Promise<unknown>
type IRendererOnCallback = (event: Electron.IpcRendererEvent, ...args: unknown[]) => void

export const api = {
  invokeIpcName: (channel: string): IRendererInvokeResult => ipcRenderer.invoke(channel),
  onIpcName: (channel: string, callback: IRendererOnCallback): IpcRenderer =>
    ipcRenderer.on(channel, callback),
  offIpcName: (channel: string, callback: IRendererOnCallback): IpcRenderer =>
    ipcRenderer.off(channel, callback)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('jsBridge', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.jsBridge = api
}
