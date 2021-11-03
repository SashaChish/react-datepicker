import { useState } from 'react'

import { addZeroToStart, createDateFormat } from './utils/helpers/helpers'
import { CURRENT_DATE } from './utils/data/data'

import Content from './components/Content/Content'
import Navigation from './components/Navigation/Navigation'
import DateControl from './components/DateControl/DateControl'

import { GlobalStyle, Wrap, CalendarWrap } from './App.style'
import Footer from './components/Footer/Footer'

const initialCalendarOptions = {
  year: CURRENT_DATE.getFullYear(),
  month: CURRENT_DATE.getMonth(),
}

const initialDate = {
  firstSelected: '',
  secondSelected: '',
}

// app має тільки рендерити
function App() {
  const [calendarOptions, setCalendarOptions] = useState(initialCalendarOptions)
  const [selected, setSelected] = useState(false)
  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [selectedDateShow, setSelectedDateShow] = useState(initialDate)
  const [calendarType, setCalendarType] = useState('')

  console.log(selectedDate)
  const prevMonth = () => {
    !selected &&
      setCalendarOptions(option => ({
        year: option.month ? option.year : option.year - 1,
        month: option.month ? option.month - 1 : 11,
      }))
  }

  const nextMonth = () => {
    !selected &&
      setCalendarOptions(option => {
        return {
          year: option.month < 11 ? option.year : option.year + 1,
          month: option.month < 11 ? option.month + 1 : 0,
        }
      })
  }

  const getSelectedDate = ({ id, date, month, year }) => {
    setSelected(true)
    if (!calendarType) {
      setSelectedDate({
        ...selectedDate,
        firstSelected: {
          id,
          date: addZeroToStart(date),
          month: addZeroToStart(month),
          year,
        },
      })
      setCalendarType('single')
    }

    if (calendarType === 'single') {
      setSelectedDate({
        ...selectedDate,
        secondSelected: {
          id,
          date: addZeroToStart(date),
          month: addZeroToStart(month),
          year,
        },
      })
    }
  }

  const applySelection = () => {
    if (selected) {
      setSelectedDateShow(createDateFormat(selectedDate))
      setSelectedDate(initialDate)
      setCalendarType('')
      setSelected(false)
    }
  }

  const goToLastWeek = () => {}

  const goToLastMonth = () => {}

  const goToLastQuarter = () => {}

  return (
    <Wrap>
      <GlobalStyle />
      <DateControl selectedDateShow={selectedDateShow} />
      <CalendarWrap>
        <Navigation
          selected={selected}
          prev={prevMonth}
          next={nextMonth}
          options={calendarOptions}
        />
        <Content getSelectedDate={getSelectedDate} options={calendarOptions} />
      </CalendarWrap>
      <Footer
        goToLastWeek={goToLastWeek}
        goToLastMonth={goToLastMonth}
        goToLastQuarter={goToLastQuarter}
        applySelection={applySelection}
      />
    </Wrap>
  )
}

export default App
