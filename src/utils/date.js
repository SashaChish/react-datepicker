const createPrevDateObj = (year, month, date, prevMonthDateStart) => {
  const prevDate = new Date(year, month - 1, date)

  return {
    id: prevMonthDateStart,
    date: new Date(year, month - 1, prevMonthDateStart).getDate().toString(),
    month: (prevDate.getMonth() + 1).toString(),
    year: prevDate.getFullYear().toString(),
  }
}

const createCurrentDateObj = (year, month, date) => {
  let currentDate = new Date(year, month, date)

  return {
    id: date,
    date: currentDate.getDate().toString(),
    month: (currentDate.getMonth() + 1).toString(),
    year: currentDate.getFullYear().toString(),
  }
}

export default function createCalendarMonth({ year, month }) {
  const row = 6
  const col = 7
  const SUNDAY_INDEX = 7
  const lastDatePrevMonth = 32 - new Date(year, month - 1, 32).getDate()
  const template = []

  let date = 1
  let prevMonthDateCount = (new Date(year, month).getDay() || SUNDAY_INDEX) - 1
  let prevMonthDateStart = lastDatePrevMonth - prevMonthDateCount + 1

  for (let i = 0; i < row; i++) {
    template[i] = {
      id: i + 1,
      week: [],
    }
    for (let j = 0; j < col; j++) {
      if (prevMonthDateCount > 0) {
        template[i].week[j] = createPrevDateObj(year, month, date, prevMonthDateStart)
        prevMonthDateStart++
        prevMonthDateCount--
      } else {
        template[i].week[j] = createCurrentDateObj(year, month, date)
        date++
      }
    }
  }

  return template
}
