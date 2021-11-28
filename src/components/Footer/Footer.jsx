import React from 'react'
import PropTypes from 'prop-types'

import { Button, BtnContainer } from './Footer.style'

export const Footer = ({ applySelection, selectDateFull }) => {
  return (
    <BtnContainer>
      <Button onClick={applySelection} disabled={!selectDateFull}>
        apply
      </Button>
    </BtnContainer>
  )
}

Footer.propTypes = {
  applySelection: PropTypes.func.isRequired,
  selectDateFull: PropTypes.bool.isRequired,
}
