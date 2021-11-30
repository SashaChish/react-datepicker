import PropTypes, { object, string } from 'prop-types'
import { useState } from 'react'

import { CURRENT_DATE } from '../../utils/data'
import { createCalendarMonth } from '../../utils/date'

import { Navigation } from '../Navigation'
import { DaysOfWeek } from '../DaysOfWeek'
import { MonthDates } from '../MonthDates'

import { Container, Wrap } from './Content.style'

const initCalendarOptions = {
  year: CURRENT_DATE.getFullYear(),
  month: CURRENT_DATE.getMonth(),
}

export const Content = ({ getSelectDate, selectDate, selectDates }) => {
  const [calendarOptions, setCalendarOptions] = useState(initCalendarOptions)
  const [calendarMonth, setCalendarMonth] = useState(createCalendarMonth(calendarOptions))

  const handleClickPrevMonth = () => {
    setCalendarOptions(option => {
      const nextOptions = {
        year: option.month ? option.year : option.year - 1,
        month: option.month ? option.month - 1 : 11,
      }
      setCalendarMonth(createCalendarMonth(nextOptions))
      return nextOptions
    })
  }

  const handleClickNextMonth = () => {
    setCalendarOptions(option => {
      const nextOptions = {
        year: option.month < 11 ? option.year : option.year + 1,
        month: option.month < 11 ? option.month + 1 : 0,
      }
      setCalendarMonth(createCalendarMonth(nextOptions))
      return nextOptions
    })
  }
  return (
    <Container>
      <Wrap>
        <Navigation
          handleClickPrevMonth={handleClickPrevMonth}
          handleClickNextMonth={handleClickNextMonth}
          options={calendarOptions}
        />
        <DaysOfWeek />
        <MonthDates
          calendarMonth={calendarMonth}
          getSelectDate={getSelectDate}
          selectDate={selectDate}
          options={calendarOptions}
          selectDates={selectDates}
        />
      </Wrap>
    </Container>
  )
}

Content.propTypes = {
  selectDates: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.oneOfType([object, string]).isRequired,
      second: PropTypes.oneOfType([object, string]).isRequired,
      isFull: PropTypes.bool.isRequired,
    })
  ),
  selectDate: PropTypes.shape({
    first: PropTypes.oneOfType([object, string]).isRequired,
    second: PropTypes.oneOfType([object, string]).isRequired,
    isFull: PropTypes.bool.isRequired,
  }).isRequired,
  getSelectDate: PropTypes.func.isRequired,
}
