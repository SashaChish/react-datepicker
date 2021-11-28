import React from 'react'
import PropTypes from 'prop-types'

import { months } from '../../utils/data'

import { ArrowLeft, ArrowRight, Container, Title } from './Navigation.style'

export const Navigation = ({ handleClickPrevMonth, handleClickNextMonth, options }) => {
  const currentMonth = months.find(month => month.id === options.month)

  return (
    <Container>
      <ArrowLeft onClick={handleClickPrevMonth} />
      <Title>{`${currentMonth.name} ${options.year}`}</Title>
      <ArrowRight onClick={handleClickNextMonth} />
    </Container>
  )
}

Navigation.propTypes = {
  handleClickPrevMonth: PropTypes.func.isRequired,
  handleClickNextMonth: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
}
