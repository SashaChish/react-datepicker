import React, { useState } from 'react'

import { addZeroToStart, createDateFormat } from '../../utils/helpers/helpers'

import DateControl from './DateControl/DateControl'
import Content from './Content/Content'
import Footer from './Footer/Footer'

const initialSelected = {
  firstSelected: '',
  secondSelected: '',
}

const Calendar = () => {
  const [selected, setSelected] = useState(false)
  const [selectedDates, setSelectedDates] = useState(initialSelected)
  const [selectedDatesShow, setSelectedDatesShow] = useState(initialSelected)
  const [calendarType, setCalendarType] = useState('')

  const getselectedDates = ({ id, date, month, year }) => {
    const createDate = {
      id,
      date: addZeroToStart(date),
      month: addZeroToStart(month),
      year,
    }

		setSelected(true)
    setSelectedDates(() => {
      if (!calendarType) {
        setCalendarType('single')
        return {
          ...selectedDates,
          firstSelected: createDate,
        }
      }

      if (calendarType === 'single') {
        setCalendarType('range')
        return selectedDates.firstSelected.id > id
          ? {
              firstSelected: createDate,
              secondSelected: selectedDates.firstSelected,
            }
          : {
              ...selectedDates,
              secondSelected: createDate,
            }
      }

      return selectedDates
    })
  }

  const applySelection = () => {
    if (selected) {
      setSelectedDatesShow(createDateFormat(selectedDates))
      setSelectedDates(initialSelected)
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
