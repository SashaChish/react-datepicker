import React from 'react'
import PropTypes, { object, string } from 'prop-types'

import { Container, Cell } from './MonthDates.style'

const isLessId = (firstSelectId, currentSelectId) => {
  if (firstSelectId) {
    const currentIdSplit = currentSelectId.split('_')
    const firstIdSplit = firstSelectId.split('_')

    for (let i = 0; i < currentIdSplit.length; i++) {
      if (+currentIdSplit[i] < +firstIdSplit[i]) return true

      if (+currentIdSplit[i] > +firstIdSplit[i]) return false
    }

    return false
  }
}

export const MonthDates = ({
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

  const isPrevSelect = current => {
    if (selectDates.length)
      return selectDates.some(
        ({ first, second }) => current.id >= first.id && current.id <= second.id
      )
  }

  return (
    <Container>
      {calendarMonth.map(item => (
        <Cell
          left={isLeft(item)}
          right={isRight(item)}
          inner={isInner(item)}
          prevSelect={isPrevSelect(item)}
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
  getSelectDate: PropTypes.func.isRequired,
}
