import { useState } from 'react'

import { addZeroToStart, createDateFormat } from './utils/helpers/helpers'

import DateControl from './components/DateControl/DateControl'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

import { GlobalStyle, Wrap } from './App.style'

const initialDate = {
  firstSelected: '',
  secondSelected: '',
}

// app має тільки рендерити
function App() {
  const [selected, setSelected] = useState(false)
  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [selectedDateShow, setSelectedDateShow] = useState(initialDate)
  const [calendarType, setCalendarType] = useState('')

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
      <Content getSelectedDate={getSelectedDate} selected={selected} />
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
