export const createDateFormat = ({ first, second }) => {
  if (!first) return '00:00:00 - 00:00:00'
  if (!second) return `${first.date}:${first.month}:${first.year} - 00:00:00`

  return `${first.date}:${first.month}:${first.year} - ${second.date}:${second.month}:${second.year}`
}
