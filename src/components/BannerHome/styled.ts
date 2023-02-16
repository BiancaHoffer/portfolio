import styled from "styled-components";

export const ContainerBannerHome = styled.div`
    background-image: url("/images/galaxy.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: calc(100vh - 6.25rem) ;

    video {
      position: absolute;
      width: 100%;
      height: calc(100vh - 6.25rem);
      object-fit: cover; 
    }

    div {
      position: absolute;
      height: calc(100vh - 6.25rem);
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      font-size: 40px;
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 4rem;
        text-align: center;
      }

      h2 {
        font-size: 2rem;
      }

      a {
        background-color: ${props => props.theme["gray-800"]};
        padding: 1rem 6rem;
        font-size: 1.5rem;
        margin-top: 2rem;
        border-radius: 4px;
        font-weight: bold;

        &:hover {
          opacity: 0.7;
          transition: opacity 0.3s;
        }
      }
  }
`