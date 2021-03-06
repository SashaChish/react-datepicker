import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

table {
	border-collapse: collapse;
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
  background: #fcfcfc;
	border-radius: 30px;
`