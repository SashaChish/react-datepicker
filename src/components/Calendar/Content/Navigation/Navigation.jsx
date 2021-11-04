import React from 'react'
import PropTypes from 'prop-types'

import { months } from '../../../../utils/data/data'

import { ArrowLeft, ArrowRight, Container, Title } from './styled'

const Navigation = ({ prev, next, options, selected }) => {
  const currentMonth = months.find(month => month.id === options.month)

  return (
    <Container>
      <ArrowLeft selected={selected} onClick={prev} />
      <Title>{`${currentMonth.name} ${options.year}`}</Title>
      <ArrowRight selected={selected} onClick={next} />
    </Container>
  )
}

Navigation.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default Navigation
