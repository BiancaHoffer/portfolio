import styled from "styled-components";

interface ContainerNavProps {
    active: boolean
}

export const ContainerNav = styled.nav<ContainerNavProps>`
    display: none;

    @media (max-width: 720px) {
        display: ${props => props.active ? "none" : "flex"};;
        position: ${props => props.active ? "none" : "fixed"};
        flex-direction: column;
        align-items: center;
        right: 0;
        bottom: 0;
        z-index: 3;
        gap: 1rem;

        height: 100vh;
        width: 20rem;
        padding: 2rem;
        margin-top: 6rem;

        background-color: ${props => props.theme["gray-800"]};
        border-left: 1px solid ${props => props.theme["gray-600"]};
    
        h2 {
            margin-top: 2.5rem;
            display: block;
            width: 100%;
            text-align: center;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid ${props => props.theme["gray-600"]};
        }
    }   
`;