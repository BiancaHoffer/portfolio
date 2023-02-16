import styled from "styled-components";

export const ContainerAboutMe = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  padding: 12rem 2.5rem;

  display: flex;
  justify-content: space-between;
  gap: 5rem;
`

export const Resume = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    margin-bottom: 4rem
  }

  p {
    font-size: 2rem;
    text-align: justify;
    line-height: 3.2rem;
  }
`


export const Memoji = styled.div`
  width: 70%;
  display: flex;
  justify-content:end;
  align-items: center;

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