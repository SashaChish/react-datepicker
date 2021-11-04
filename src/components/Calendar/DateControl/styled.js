import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`

export const Input = styled.input`
  width: 180px;
  padding: 10px;
  background: transparent;
  color: #000000;
  border: 2px solid #2a9cad;
  border-radius: 10px;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`

export const Separator = styled.div`
  width: 15px;
  height: 2px;
  color: #009999;
  border: 1px solid #009999;
  margin: 0 5px;
`

export const CloseWrap = styled.div`
  position: relative;
`

export const Close = styled.span`
  position: absolute;
  left: 250px;
  bottom: 10px;
  width: 25px;
  height: 25px;
  opacity: 0.4;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 11px;
    height: 25px;
    width: 2px;
    background-color: #000000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`
