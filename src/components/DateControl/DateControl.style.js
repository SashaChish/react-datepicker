import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding: 20px;
`

export const ShowDate = styled.div`
  padding: 10px;
  background: transparent;
  color: #000000;
  border: 1px solid #2a9cad;
  border-radius: 10px;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
`

export const Select = styled.select`
  border: 1px solid #2a9cad;
  border-radius: 10px;
  padding: 10px 5px;
  outline-color: #2a9cad;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 2px;
`

export const Button = styled.button`
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  background: transparent;
  border: 2px solid #009999;
  border-radius: 10px;
  padding: 10px 25px;
	margin-left: 40px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #2d59a1;
    border-color: transparent;
  }
`
