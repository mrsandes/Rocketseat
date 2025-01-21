import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 70rem;
  height: 104px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.75rem;
  }
`

export const PinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-300']};
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-300']};
`