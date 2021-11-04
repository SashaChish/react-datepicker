export const addZeroToStart = n => (n.length === 1 ? '0' + n : n)

export const createDateFormat = dateObj => {
  const dateValueForShow = {}
  for (let key of Object.keys(dateObj)) {
    if (typeof dateObj[key] === 'string') dateValueForShow[key] = '00-00-00'
    else {
      const { date, month, year } = dateObj[key]
      dateValueForShow[key] = `${addZeroToStart((+month + 1).toString())}-${date}-${year}`
    }
  }
  return dateValueForShow
}
