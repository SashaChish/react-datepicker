import React from 'react'
import PropTypes from 'prop-types'

import { Container, Wrap, Input, Separator, CloseWrap, Close } from './styled'

const DateControl = ({ selectedDateShow }) => {
  return (
    <Container>
      <Wrap>
        <label>
          <Input
            type="text"
            value={selectedDateShow.firstSelected || '00-00-00'}
            disabled
          />
        </label>
        <Separator />
        <label>
          <Input
            type="text"
            value={selectedDateShow.secondSelected || '00-00-00'}
            disabled
          />
        </label>
        <CloseWrap>
          <Close />
        </CloseWrap>
      </Wrap>
    </Container>
  )
}

DateControl.propTypes = {
  selectedDateShow: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default DateControl
