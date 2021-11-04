import React from 'react'
import PropTypes from 'prop-types'

import { Container, Wrap, Input, Separator, CloseWrap, Close } from './styled'

const DateControl = ({ selectedDatesShow }) => {
  return (
    <Container>
      <Wrap>
        <label>
          <Input
            type="text"
            value={selectedDatesShow.firstSelected || '00-00-00'}
            disabled
          />
        </label>
        <Separator />
        <label>
          <Input
            type="text"
            value={selectedDatesShow.secondSelected || '00-00-00'}
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
  selectedDatesShow: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default DateControl
