import React from 'react'
import { months } from '../../../../utils/data/data'
import PropTypes from 'prop-types'
import { ArrowLeft, ArrowRight, Head, Title, Wrap } from './styled'

const Navigation = ({ prev, next, options }) => {
  const currentMonth = months.find(month => month.id === options.month)

  return (
    <Head>
      <Wrap>
        <ArrowLeft onClick={prev} />
        <Title>{`${currentMonth.name} ${options.year}`}</Title>
        <ArrowRight onClick={next} />
      </Wrap>
    </Head>
  )
}

Navigation.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
}

export default Navigation
