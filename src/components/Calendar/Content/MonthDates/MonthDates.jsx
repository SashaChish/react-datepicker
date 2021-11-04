import React from 'react'
import PropTypes, { object, string } from 'prop-types'

import createCalendarMonth from '../../../../utils/dateApi/date'

import { Container, Cell } from './styled'

const MonthDates = ({ options, getSelected, selectedDates }) => {
  const { firstSelected, secondSelected } = selectedDates
  const calendar = createCalendarMonth(options)

  return (
    <Container>
      {calendar.map(item =>
        options.month === +item.month ? (
          <Cell
            left={item.id === firstSelected.id}
            right={item.id === secondSelected.id}
            inner={item.id > firstSelected.id && item.id < secondSelected.id}
            active
            key={item.id}
            onClick={() => {
              getSelected(item)
            }}
          >
            {+item.date}
          </Cell>
        ) : (
          <Cell active={false} key={item.id}>
            {+item.date}
          </Cell>
        )
      )}
    </Container>
  )
}

MonthDates.propTypes = {
  selectedDates: PropTypes.shape({
    firstSelected: PropTypes.oneOfType([object, string]).isRequired,
    secondSelected: PropTypes.oneOfType([object, string]).isRequired,
  }),
  options: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  getSelected: PropTypes.func.isRequired,
}

export default MonthDates
