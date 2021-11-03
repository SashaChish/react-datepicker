import React from 'react'
import PropTypes from 'prop-types'

import createCalendarMonth from '../../../utils/dateApi/date'

import { Container, Cell } from './styled'

const MonthDates = ({ options, getSelected }) => {
  const calendar = createCalendarMonth(options)
  console.log('calendar', calendar, options)
  return (
    <Container>
      {calendar.map(item =>
        options.month === +item.month - 1 ? (
          <Cell
            active
            key={item.id}
            onClick={e => {
              getSelected(item)
            }}
          >
            {item.date}
          </Cell>
        ) : (
          <Cell active={false} key={item.id}>
            {item.date}
          </Cell>
        )
      )}
    </Container>
  )
}

MonthDates.propTypes = {
  options: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  getSelected: PropTypes.func.isRequired,
}

export default MonthDates
