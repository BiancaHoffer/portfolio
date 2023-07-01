import styled from "styled-components";

export const ContainerAboutMe = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 12rem 2.5rem;

  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

export const Resume = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    margin-bottom: 4rem
  }

  p {
    font-size: 1.7rem;
    text-align: justify;
    line-height: 3.2rem;
  }

  @media (max-width: 820px) {
    h1 {
      width: 100%;
      text-align: center;
    }
  }
`

export const Memoji = styled.div`
  width: 30%;
  display: flex;
  justify-content:end;
  align-items: center;

  @media (max-width: 820px) {
    width: 100%;
    justify-content: center;
  }

  span {
    background-color: ${props => props.theme["gray-600"]};
    width: 18rem;
    height: 18rem;
    padding: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 90%;
  }
`