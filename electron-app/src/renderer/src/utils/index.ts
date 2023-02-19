const getAssetsImages = (name: string): string => {
  return new URL(`/src/renderer/src/assets/images/${name}`, import.meta.url).href
}

export { getAssetsImages }
