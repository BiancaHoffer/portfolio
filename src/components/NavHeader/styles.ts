import styled from "styled-components";

export const ContainerNav = styled.nav`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    a {
        font-weight: 700;
        font-size: 1.2rem;
        color: ${props => props.theme["gray-400"]};
        cursor: pointer;

        &:hover {
          color: ${props => props.theme["gray-10"]};
          transition: color 0.4s;
      }
    }
`;