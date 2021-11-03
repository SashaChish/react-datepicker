export function addZeroToStart(n) {
  return n.toString().length === 1 ? '0' + n : n.toString()
}

export const createDateFormat = dateObj => {
  const dateValueForShow = {}
  for (let key of Object.keys(dateObj)) {
    if (typeof dateObj[key] === 'string') dateValueForShow[key] = ''
    else {
      const { date, month, year } = dateObj[key]
      dateValueForShow[key] = `${month}-${date}-${year}`
    }
  }
  return dateValueForShow
}
