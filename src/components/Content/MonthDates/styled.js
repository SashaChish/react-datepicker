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
  font-size: 20px;
  font-weight: 600;
  cursor: ${({active}) => active ? 'pointer' : 'default'};;
	opacity: ${({active}) => active ? 1 : .4};
`
