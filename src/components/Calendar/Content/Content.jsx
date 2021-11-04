import React from 'react'
import PropTypes, { object, string } from 'prop-types'
import { useState } from 'react'

import { CURRENT_DATE } from '../../../utils/data/data'

import Navigation from './Navigation/Navigation'
import DaysOfWeek from './DaysOfWeek/DaysOfWeek'
import MonthDates from './MonthDates/MonthDates'

import { Container, Wrap } from './styled'

const initialCalendarOptions = {
  year: CURRENT_DATE.getFullYear(),
  month: CURRENT_DATE.getMonth(),
}

const Content = ({ getselectedDates, selected, selectedDates }) => {
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
      setCalendarOptions(option => ({
        year: option.month < 11 ? option.year : option.year + 1,
        month: option.month < 11 ? option.month + 1 : 0,
      }))
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
        <DaysOfWeek />
        <MonthDates
          getSelected={getselectedDates}
          selectedDates={selectedDates}
          options={calendarOptions}
        />
      </Wrap>
    </Container>
  )
}

Content.propTypes = {
  selectedDates: PropTypes.shape({
    firstSelected: PropTypes.oneOfType([object, string]).isRequired,
    secondSelected: PropTypes.oneOfType([object, string]).isRequired,
  }),
  selected: PropTypes.bool.isRequired,
  getselectedDates: PropTypes.func.isRequired,
}

export default Content
