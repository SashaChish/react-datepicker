import React from 'react'
import PropTypes from 'prop-types'
import { Td, Thead } from './styled'

const DaysOfWeek = ({ days }) => {
  return (
    <Thead>
      <tr>
        {days.map(day => (
          <Td key={day.id}>{day.name.slice(0, 3)}</Td>
        ))}
      </tr>
    </Thead>
  )
}

DaysOfWeek.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DaysOfWeek
