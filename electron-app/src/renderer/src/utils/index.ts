const getAssetsImages = (name: string): string => {
  return new URL(`/src/renderer/src/assets/images/${name}`, import.meta.url).href
}

const getFirstDayByDate = (year: number, month: number) => {
  const date = new Date(year, month - 1, 1)
  // 0-6 星期日到星期六
  const dayOfWeek = date.getDay()
  return dayOfWeek
}

const getFullDayByDate = (year: number, month: number) => {
  const date = new Date(year, month, 0)
  const daysInMonth = date.getDate()
  return daysInMonth
}

const getCurrentDateInfo = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return {
    year,
    month,
    day
  }
}

export { getAssetsImages, getFirstDayByDate, getFullDayByDate, getCurrentDateInfo }
