import React from 'react'
import PropTypes from 'prop-types'

import { Container, Cell } from './styled'

const DaysOfWeek = ({ days }) => {
  return (
    <Container>
      {days.map(day => (
        <Cell key={day.id}>{day.name.slice(0, 3)}</Cell>
      ))}
    </Container>
  )
}

DaysOfWeek.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DaysOfWeek
