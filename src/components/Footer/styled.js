import styled from 'styled-components'

export const Navigation = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #2a9cad;
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #009999;
  cursor: pointer;

  &:hover {
    color: #2d59a1;
  }
`

export const BtnContainer = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  background: transparent;
  border: 2px solid #009999;
  border-radius: 10px;
  padding: 10px 40px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #2d59a1;
    border-color: transparent;
  }
`
