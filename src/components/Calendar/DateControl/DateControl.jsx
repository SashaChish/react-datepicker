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
            value={selectedDatesShow.firstSelected}
            disabled
          />
        </label>
        <Separator />
        <label>
          <Input
            type="text"
            value={selectedDatesShow.secondSelected}
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
