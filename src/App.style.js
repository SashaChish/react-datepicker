import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

#root {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
`

export const Wrap = styled.div`
  width: 700px;
`

export const Calendar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 10px;
  border-top: 1px solid #2a9cad;
  border-bottom: 1px solid #2a9cad;
`

