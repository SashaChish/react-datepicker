import React from 'react'
import PropTypes from 'prop-types'

import { Navigation, Label, Button, BtnContainer } from './styled'

const Footer = ({ goToLastWeek, goToLastMonth, goToLastQuarter, applySelection }) => {
  return (
    <>
      <Navigation>
        <Label onClick={goToLastWeek}>last week</Label>
        <Label onClick={goToLastMonth}>last month</Label>
        <Label onClick={goToLastQuarter}>last quarter</Label>
      </Navigation>
      <BtnContainer>
        <Button onClick={applySelection}>apply</Button>
      </BtnContainer>
    </>
  )
}

Footer.propTypes = {
  goToLastWeek: PropTypes.func.isRequired,
  goToLastMonth: PropTypes.func.isRequired,
  goToLastQuarter: PropTypes.func.isRequired,
  applySelection: PropTypes.func.isRequired,
}

export default Footer
