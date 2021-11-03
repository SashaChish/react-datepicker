import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types'

import { CURRENT_DATE, days } from '../../utils/data/data'

import Navigation from './Navigation/Navigation'
import DaysOfWeek from './DaysOfWeek/DaysOfWeek'
import MonthDates from './MonthDates/MonthDates'

import { Container, Wrap } from './styled'

const initialCalendarOptions = {
  year: CURRENT_DATE.getFullYear(),
  month: CURRENT_DATE.getMonth(),
}

const Content = ({ getSelectedDate, selected }) => {
  const [calendarOptions, setCalendarOptions] = useState(initialCalendarOptions)

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

  return (
    <Container>
      <Wrap>
        <Navigation
          prev={prevMonth}
          next={nextMonth}
          options={calendarOptions}
          selected={selected}
        />
        <DaysOfWeek days={days} />
        <MonthDates getSelected={getSelectedDate} options={calendarOptions} />
      </Wrap>
    </Container>
  )
}

Content.propTypes = {
  selected: PropTypes.bool.isRequired,
  getSelectedDate: PropTypes.func.isRequired,
}

export default Content
