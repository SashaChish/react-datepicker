import styled from 'styled-components'

export const Head = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`

export const Wrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Arrow = styled.i`
  cursor: pointer;
  border: solid #009999;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 6px;
`

export const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
`

export const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
`

export const Title = styled.h2`
  width: 300px;
  margin: 0 20px;
  text-align: center;
  letter-spacing: 3px;
`
