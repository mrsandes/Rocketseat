import styled from "styled-components";

export const InfosContainer = styled.div`
  display: flex;
  margin-bottom: 8rem;
  
  header {
    width: 588px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.3;
      color: ${props => props.theme['gray-800']};
    }

    p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${props => props.theme['gray-700']};
    }
  }

  footer {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
`

interface ListIconProps {
  color: string
}

export const ListIcon = styled.div<ListIconProps>`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  color: ${props => props.theme['gray-600']};

  svg {
    background: ${props => props.theme[props.color]};
    padding: 0.5rem;
    border-radius: 100%;
    color: ${props => props.theme['background']};
  }  
`