import styled from "styled-components";

export const ContainerProjects = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 8rem 2.5rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem
  }

  p {
    font-size: 2rem;
    margin-bottom: 8rem;
  }
`

export const ContentProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .1rem;

  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    opacity: 0.8;

    img {
      width: 100%;
      height: 100%;
      position: -webkit-sticky;
    }

    &:nth-child(3n) {
      grid-column: 1 / 3;
    }

    &:hover {
      opacity: 10;
      transition: opacity 0.5s;
    }
  }
`