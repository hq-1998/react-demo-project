import { contextBridge, IpcRenderer, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

type IRendererInvokeResult = Promise<unknown>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IRendererOnCallback = (event: Electron.IpcRendererEvent, ...args: any[]) => void

export const api = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  invokeIpcName: (channel: string, ...args: any[]): IRendererInvokeResult =>
    ipcRenderer.invoke(channel, args),
  onIpcName: (channel: string, callback: IRendererOnCallback): IpcRenderer =>
    ipcRenderer.on(channel, callback),
  offIpcName: (channel: string, callback: IRendererOnCallback): IpcRenderer =>
    ipcRenderer.off(channel, callback),
  sendIpcName: (channel: string): void => ipcRenderer.send(channel)
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
