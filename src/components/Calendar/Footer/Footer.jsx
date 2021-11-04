import React from 'react'
import PropTypes from 'prop-types'

import { Navigation, Label, Button, BtnContainer } from './styled'

const Footer = ({ lastWeek, lastMonth, lastQuarter, applySelection }) => {
  return (
    <>
      <Navigation>
        <Label onClick={lastWeek}>last week</Label>
        <Label onClick={lastMonth}>last month</Label>
        <Label onClick={lastQuarter}>last quarter</Label>
      </Navigation>
      <BtnContainer>
        <Button onClick={applySelection}>apply</Button>
      </BtnContainer>
    </>
  )
}

Footer.propTypes = {
  lastWeek: PropTypes.func.isRequired,
  lastMonth: PropTypes.func.isRequired,
  lastQuarter: PropTypes.func.isRequired,
  applySelection: PropTypes.func.isRequired,
}

export default Footer
