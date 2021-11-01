import React from 'react'
import PropTypes from 'prop-types'

import { days } from '../../../../utils/data/data'
import createCalendarMonth from '../../../../utils/date'
import DaysOfWeek from './DaysOfWeek'
import MonthDates from './MonthDates'
import { Table } from './styled'

const Content = ({ options, getDateValue }) => {
  const calendar = createCalendarMonth(options)

  return (
    <Table>
      <DaysOfWeek days={days} />
      <MonthDates getValue={getDateValue} calendar={calendar} />
    </Table>
  )
}

Content.propTypes = {
  options: PropTypes.object.isRequired,
  getDateValue: PropTypes.func.isRequired,
}

export default Content
