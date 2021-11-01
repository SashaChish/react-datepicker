import React from 'react'
import PropTypes from 'prop-types'
import { Container, Wrap, Input, Separator } from './styled'

const DateControl = ({ dateValue }) => {
  const { month, date, year } = dateValue

  return (
    <Container>
      <Wrap>
        <label>
          <Input type="text" value={`${month}-${date}-${year}`} disabled />
        </label>
        <Separator />
        <label>
          <Input type="text" value={`${month}-${date}-${year}`} disabled />
        </label>
      </Wrap>
    </Container>
  )
}

DateControl.propTypes = {
  dateValue: PropTypes.shape({
    month: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
}

export default DateControl
