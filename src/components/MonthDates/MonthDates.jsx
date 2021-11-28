import React from 'react'
import PropTypes, { object, string } from 'prop-types'

import { isLessId } from '../../utils/helpers'

import { Container, Cell } from './MonthDates.style'

export const MonthDates = ({
  options,
  getSelectDate,
  selectDate,
  selectDates,
  calendarMonth,
}) => {
  const { first, second, isFull } = selectDate

  const handleSelectDate = date => () => {
    if (!isLessId(first.id, date.id)) {
      getSelectDate(date)
    }
  }

  const isLeft = current => first.id === current.id

  const isRight = current => second.id === current.id

  const isInner = current => {
    if (isFull) return current.id > first.id && current.id < second.id
  }

  return (
    <Container>
      {calendarMonth.map(item => (
        <Cell
          left={isLeft(item)}
          right={isRight(item)}
          inner={isInner(item)}
          // active={options.month === +item.month}
          active={true}
          key={item.id}
          onClick={handleSelectDate(item)}
        >
          {+item.date}
        </Cell>
      ))}
    </Container>
  )
}

MonthDates.propTypes = {
  calendarMonth: PropTypes.arrayOf(PropTypes.object),
  selectDate: PropTypes.shape({
    first: PropTypes.oneOfType([object, string]).isRequired,
    second: PropTypes.oneOfType([object, string]).isRequired,
    isFull: PropTypes.bool,
  }),
  selectDates: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.oneOfType([object, string]).isRequired,
      second: PropTypes.oneOfType([object, string]).isRequired,
      isFull: PropTypes.bool,
    })
  ),
  options: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }),
  getSelectDate: PropTypes.func.isRequired,
}
