import { useState } from 'react'
import Content from './components/Calendar/Body/Content'
import Navigation from './components/Calendar/Body/Navigation'
import DateControl from './components/Calendar/Head/DateControl'
import { GlobalStyle, Wrap, Calendar } from './App.style'

function App() {
  console.log('render')
  const currentDate = new Date()
  const addZeroToStart = n => (n.toString().length === 1 ? '0' + n : n.toString())

  const [calendarOptions, setCalendarOptions] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
  })

  const [calendarType, setCalendarType] = useState('')

  const [dateValue, setDateValue] = useState({
    date: addZeroToStart(currentDate.getDate()),
    month: addZeroToStart(currentDate.getMonth() + 1),
    year: currentDate.getFullYear().toString(),
  })

  const prevMonth = () =>
    setCalendarOptions(option => ({
      year: option.month ? option.year : option.year - 1,
      month: option.month ? option.month - 1 : 11,
    }))

  const nextMonth = () => {
    setCalendarOptions(option => {
      return {
        year: option.month < 11 ? option.year : option.year + 1,
        month: option.month < 11 ? option.month + 1 : 0,
      }
    })
  }

  const getDateValue = ({ date, month, year }) => {
    if (!calendarType) setCalendarType('single')

    setDateValue({
      date: addZeroToStart(date),
      month: addZeroToStart(month),
      year,
    })
  }

  return (
    <Wrap>
      <GlobalStyle />
      <DateControl dateValue={dateValue} />
      <Calendar>
        <Navigation prev={prevMonth} next={nextMonth} options={calendarOptions} />
        <Content getDateValue={getDateValue} options={calendarOptions} />
      </Calendar>
    </Wrap>
  )
}

export default App
