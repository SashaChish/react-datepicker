const createPrevDateObj = (year, month, date, prevMonthDateStart, id) => {
  const prevDate = new Date(year, month - 1, date)

  return {
    id,
    date: new Date(year, month - 1, prevMonthDateStart).getDate().toString(),
    month: (prevDate.getMonth() + 1).toString(),
    year: prevDate.getFullYear().toString(),
  }
}

const createCurrentDateObj = (year, month, date, id) => {
  let currentDate = new Date(year, month, date)

  return {
    id,
    date: currentDate.getDate().toString(),
    month: (currentDate.getMonth() + 1).toString(),
    year: currentDate.getFullYear().toString(),
  }
}

export default function createCalendarMonth({ year, month }) {
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
