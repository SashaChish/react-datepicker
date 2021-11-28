import React, { useState } from 'react'
import PropTypes, { object, string } from 'prop-types'

import { createDateFormat } from '../../utils/helpers'

import { Button, Container, Select, ShowDate } from './DateControl.style'

export const DateControl = ({ selectDates, selectDate, deleteSelectDate }) => {
  const [select, setSelect] = useState(null)

  const handleOnChangeSelect = () => e => {
    setSelect(JSON.parse(e.target.value))
  }

  const handleOnClick = () => () => {
    deleteSelectDate(select ? select : selectDates[0])
    setSelect(null)
  }

  return (
    <Container>
      {!selectDates.length ? (
        <ShowDate>{createDateFormat(selectDate)}</ShowDate>
      ) : (
        <>
          <Select onChange={handleOnChangeSelect()}>
            {selectDates.map((selectDate, index) => (
              <option
                key={`${selectDate.first.id}-${index}`}
                value={JSON.stringify(selectDate)}
              >
                {createDateFormat(selectDate)}
              </option>
            ))}
          </Select>
          <div>
            <Button onClick={handleOnClick()}>delete</Button>
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
