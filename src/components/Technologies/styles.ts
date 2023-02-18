import styled from "styled-components";

export const ContainerTechnologies = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  border-top: 1px solid ${props => props.theme["gray-500"]};
  padding: 12rem 2.5rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 820px) {
    h1 {
    width: 100%;
    text-align: center;
  }
}
`

export const TechnologiesWeb = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`

export const TechnologiesMobile = styled.div`
  @media (min-width: 721px) {
    display: none;
  }
`