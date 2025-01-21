import styled from "styled-components";

export const CoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;

  width: 256px;  

  background: ${props => props.theme["gray-100"]};
  border-radius: 8px 32px 8px 32px;

  img {
    margin-top: calc(0px - 1.5rem);
  }

  h1 {
    font-family: 'Baloo 2';
    margin-top: 0.75rem;
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['gray-500']};
    text-align: center;
    max-width: 30ch;
    margin-top: 0.5rem;
  }
`

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: ${props => props.theme['yellow-300']};
    background: ${props => props.theme['yellow-100']};

    padding: 0.25rem 0.5rem;
    border-radius: 16px;
    margin-top: 1rem;

    font-size: 0.625rem;
    font-weight: bold;
  }
`

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;

  h2 {
    font-family: 'baloo 2';
    color: ${props => props.theme['gray-600']};
  }

  h2::before {
    content: 'R$';
    font-size: 0.875rem;
    color: ${props => props.theme['gray-600']};
    font-weight: 300;
    margin-right: 0.25rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  button[type="submit"] {
    background: ${props => props.theme['purple-300']};
    color: ${props => props.theme['gray-100']};
    display: flex;
    align-items: center;

    align-self: center;
    padding: 0.375rem;
    
    border-radius: 6px;
  }

  span {
    background: ${props => props.theme['gray-300']};
    color: ${props => props.theme['gray-800']};
   
    min-width: 4rem;
    height: 2.25rem;
    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin: 0 0.25rem;
      padding: 0;
      color: ${props => props.theme['purple-200']};
    }
  }
`