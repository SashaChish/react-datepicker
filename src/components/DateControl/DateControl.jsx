import React, { useState } from 'react'
import PropTypes, { object, string } from 'prop-types'

import { Button, Container, Select, ShowDate } from './DateControl.style'

const createDateFormat = ({ first, second }) => {

	const monthAddOne = ({month}) => +month < 10 ? `0${+month + 1}` : `${+month + 1}`

  if (!first) return '00:00:00 - 00:00:00'
  if (!second) return `${first.date}:${monthAddOne(first)}:${first.year} - 00:00:00`

  return `${first.date}:${monthAddOne(first)}:${first.year} - ${second.date}:${monthAddOne(second)}:${second.year}`
}

export const DateControl = ({ selectDates, selectDate, deleteSelectDate }) => {
  const [selectId, setSelectId] = useState('')

  const handleOnChangeSelect = () => e => {
    setSelectId(e.target.value)
  }

  const handleOnClickBtn = () => () => {
    deleteSelectDate(selectId ? selectId : selectDates[0].id)
    setSelectId('')
  }

  return (
    <Container>
      {!selectDates.length ? (
        <ShowDate>{createDateFormat(selectDate)}</ShowDate>
      ) : (
        <>
          <Select onChange={handleOnChangeSelect()}>
            {selectDates.map((selectDate, index) => (
              <option key={`${selectDate.first.id}-${index}`} value={selectDate.id}>
                {createDateFormat(selectDate)}
              </option>
            ))}
          </Select>
          <div>
            <Button onClick={handleOnClickBtn()}>delete</Button>
          </div>
        </>
      )}
    </Container>
  )
}

DateControl.propTypes = {
  selectDate: PropTypes.shape({
    first: PropTypes.oneOfType([object, string]).isRequired,
    second: PropTypes.oneOfType([object, string]).isRequired,
    isFull: PropTypes.bool.isRequired,
  }).isRequired,
  selectDates: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.object.isRequired,
      second: PropTypes.object.isRequired,
      isFull: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteSelectDate: PropTypes.func.isRequired,
}
