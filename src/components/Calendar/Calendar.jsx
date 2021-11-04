import React, { useState } from 'react'

import { createDateFormat } from '../../utils/helpers/helpers'

import DateControl from './DateControl/DateControl'
import Content from './Content/Content'
import Footer from './Footer/Footer'

const initialSelectedDates = {
  firstSelected: '',
  secondSelected: '',
}

const initialSelectedDatesShow = {
  firstSelected: '00-00-00',
  secondSelected: '00-00-00',
}

const Calendar = () => {
  const [selected, setSelected] = useState(false)
  const [selectedDates, setSelectedDates] = useState(initialSelectedDates)
  const [selectedDatesShow, setSelectedDatesShow] = useState(initialSelectedDatesShow)
  const [calendarType, setCalendarType] = useState('')

  const getselectedDates = date => {
    setSelected(true)
    setSelectedDates(() => {
      if (!calendarType) {
        setCalendarType('single')
        return {
          ...selectedDates,
          firstSelected: date,
        }
      }

      if (calendarType === 'single') {
        setCalendarType('range')
        return selectedDates.firstSelected.id > date.id
          ? {
              firstSelected: date,
              secondSelected: selectedDates.firstSelected,
            }
          : {
              ...selectedDates,
              secondSelected: date,
            }
      }

      return selectedDates
    })
  }

  const applySelection = () => {
    if (selected) {
      setSelectedDatesShow(createDateFormat(selectedDates))
      setSelectedDates(initialSelectedDates)
      setCalendarType('')
      setSelected(false)
    }
  }

  const lastWeek = () => {}

  const lastMonth = () => {}

  const lastQuarter = () => {}

  return (
    <>
      <DateControl selectedDatesShow={selectedDatesShow} />
      <Content
        getselectedDates={getselectedDates}
        selected={selected}
        selectedDates={selectedDates}
      />
      <Footer
        lastWeek={lastWeek}
        lastMonth={lastMonth}
        lastQuarter={lastQuarter}
        applySelection={applySelection}
      />
    </>
  )
}

export default Calendar
