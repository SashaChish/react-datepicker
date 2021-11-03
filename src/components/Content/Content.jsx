import React from 'react'
import PropTypes from 'prop-types'

import { days } from '../../utils/data/data'

import DaysOfWeek from './DaysOfWeek/DaysOfWeek'
import MonthDates from './MonthDates/MonthDates'

import { Container } from './styled'

const Content = ({ options, getSelectedDate }) => {
  return (
    <Container>
      <DaysOfWeek days={days} />
      <MonthDates getSelected={getSelectedDate} options={options} />
    </Container>
  )
}

Content.propTypes = {
  options: PropTypes.object.isRequired,
  getSelectedDate: PropTypes.func.isRequired,
}

export default Content
