import styled from "styled-components";

interface ContainerNavProps {
    active: boolean
}

export const ContainerNav = styled.nav`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    padding: 0;

    @media (max-width: 720px) {
        display: none;
    }
`;