import React from 'react'

import { days } from '../../../../utils/data/data'

import { Container, Cell } from './styled'

const DaysOfWeek = () => {
  return (
    <Container>
      {days.map(day => (
        <Cell key={day.id}>{day.name.slice(0, 3)}</Cell>
      ))}
    </Container>
  )
}

export default DaysOfWeek
