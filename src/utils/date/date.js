import { addZeroToStart } from '../helpers'

const createPrevDateObj = (year, month, date, prevMonthDateStart, i) => {
  const prevDate = new Date(year, month - 1, date)
  const dateStringFormat = addZeroToStart(
    new Date(year, month - 1, prevMonthDateStart).getDate().toString()
  )
  const monthStringFormat = addZeroToStart(prevDate.getMonth().toString())

  const id = `${prevDate.getFullYear()}_${monthStringFormat}_${dateStringFormat}`
  return {
    id,
    date: dateStringFormat,
    month: monthStringFormat,
    year: prevDate.getFullYear(),
  }
}

const createCurrentDateObj = (year, month, date, i) => {
  const currentDate = new Date(year, month, date)
  const dateStringFormat = addZeroToStart(currentDate.getDate().toString())
  const monthStringFormat = addZeroToStart(currentDate.getMonth().toString())
  const id = `${currentDate.getFullYear()}_${monthStringFormat}_${dateStringFormat}`
  return {
    id,
    date: dateStringFormat,
    month: monthStringFormat,
    year: currentDate.getFullYear(),
  }
}

export const createCalendarMonth = ({ year, month }) => {
  const SIZE = 42
  const SUNDAY_INDEX = 7
  const lastDatePrevMonth = 32 - new Date(year, month - 1, 32).getDate()
  const template = []

  let date = 1
  let prevMonthDateCount = (new Date(year, month).getDay() || SUNDAY_INDEX) - 1
  let prevMonthDateStart = lastDatePrevMonth - prevMonthDateCount + 1
  for (let i = 0; i < SIZE; i++) {
    if (prevMonthDateCount > 0) {
      template[i] = createPrevDateObj(year, month, date, prevMonthDateStart, i)
      prevMonthDateStart++
      prevMonthDateCount--
    } else {
      template[i] = createCurrentDateObj(year, month, date, i)
      date++
    }
  }

  return template
}
