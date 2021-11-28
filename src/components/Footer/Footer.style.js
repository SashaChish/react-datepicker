import styled from 'styled-components'

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

  ${({ disabled }) =>
    !disabled &&
    `
		&:hover {
			color: #ffffff;
			background: #2d59a1;
			border-color: transparent;
  	}
	`}
`
