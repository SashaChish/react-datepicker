import React from 'react'

import { days } from '../../utils/data'

import { Container, Cell } from './DaysOfWeek.style'

export const DaysOfWeek = () => {
  return (
    <Container>
      {days.map(day => (
        <Cell key={day.id}>{day.name.slice(0, 3)}</Cell>
      ))}
    </Container>
  )
}
