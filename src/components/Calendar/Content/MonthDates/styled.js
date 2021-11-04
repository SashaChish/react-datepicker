import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Cell = styled.div`
  width: 14%;
  display: inline-flex;
  justify-content: center;
  padding: 10px;
	margin: 4px 0;
  font-size: 20px;
  font-weight: 600;
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  opacity: ${({ active }) => (active ? 1 : 0.4)};

  ${props => {
    if (props.left) {
      return `
				border-radius: 10px 0 0 10px;
				background: #2d59a1;
				color: #ffffff;
			`
    }

    if (props.right) {
      return `
				border-radius: 0px 10px 10px 0;
				background: #2d59a1;
				color: #ffffff;
			`
    }

		if (props.inner) {
			return `
				color: #2d59a1;
				background: #b8edff;
			`
		}
  }}
`
