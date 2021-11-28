import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Arrow = styled.i`
  cursor: pointer;
  border: solid #009999;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 8px;
  transition: all 0.1s ease;

  &:hover {
    border-color: #2d59a1;
  }
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
