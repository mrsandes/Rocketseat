import styled from "styled-components";

export const FormContainer = styled.div` 
  width: 70rem;
  margin: 0 auto;
  margin-top: 3rem;

  display: flex;

  h2 {
    font-family: 'baloo 2';
    font-size: 1.125rem;
    color: ${props => props.theme['gray-700']};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['gray-600']};
  }
`

const BaseContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 1rem;
  border-radius: 8px;
  max-width: 40rem;

  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};

  div:first-child {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocalContainer = styled(BaseContainer)` 
  .input-area {
    margin-top: 2rem;
    width: 35rem;
    display: grid;
    row-gap: 1rem;
    column-gap: 0.75rem;
    grid-template-columns: 200px 276px 60px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  input {
    border: 1px solid ${props => props.theme['gray-300']};
    padding: 1rem;
    border-radius: 4px;
    background: ${props => props.theme['gray-200']};
    color: ${props => props.theme['gray-500']};
    font-size: 0.875rem;

    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme['yellow-200']};

      &::placeholder {
        visibility: hidden;
      }
    }
  }

  input[name="cep"] {
    width: 200px;
    grid-column: 1 / span 3;
  }

  input[name="street"] {
    grid-column: 1 / span 3;
  }

  input[name="complement"] {
    grid-column: 2 / span 2;
  }
  
  input[name="state"] {
    grid-column: 3;
    grid-row: 4;
  }

  svg {
    color: ${props => props.theme['yellow-300']};
  }
`

export const PaymentContainer = styled(BaseContainer)`  
  svg {
    color: ${props => props.theme['purple-300']};
  }
  
  button {
    border: 1px solid ${props => props.theme['gray-300']};
    padding: 1rem;
    border-radius: 4px;
    margin-right: 0.75rem;

    background: ${props => props.theme['gray-300']};
    color: ${props => props.theme['gray-600']};

    font-size: 0.75rem;

    transition: 0.1s;

    &:focus {
      box-shadow: none;
    }

    &:not(.selected):hover {
      background: ${props => props.theme['gray-400']};
      border: 1px solid ${props => props.theme['gray-400']};
      cursor: pointer;
    }
  }

  .selected {
    background: ${props => props.theme['purple-100']};
    border: 1px solid ${props => props.theme['purple-300']};
  }

  .button-area {
    margin-top: 2rem;
  }

  .button-content {
    display: flex;
    align-items: center;
  }
`