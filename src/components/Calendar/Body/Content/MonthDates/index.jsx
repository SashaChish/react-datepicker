import React from 'react'
import PropTypes from 'prop-types'
import { Tbody, Td } from './styled'

const MonthDates = ({ calendar, getValue }) => {

  return (
    <Tbody>
      {calendar.map(({ week, id }) => (
        <tr key={id}>
          {week.map(({ id, ...date }) => (
            <Td onClick={() => getValue(date)} key={id}>{date.date}</Td>
          ))}
        </tr>
      ))}
    </Tbody>
  )
}

MonthDates.propTypes = {
	calendar: PropTypes.arrayOf(PropTypes.object).isRequired,
	getValue: PropTypes.func
}

export default MonthDates
