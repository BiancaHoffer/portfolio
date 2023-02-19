import styled from "styled-components";
import Link from "next/link";

export const ContainerProject = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  padding: 8rem 2.5rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem
  }

  a img {
    width: 2rem;
    margin-bottom: 3rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
  } 
`

export const LinkBack = styled(Link)`
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  display: inline-block;

  width: 100%;
  border-bottom: 1px solid ${props => props.theme["gray-600"]};
    
  `

