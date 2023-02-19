import styled from "styled-components";

interface ButtonDrawerProps {
    active: boolean;
}

export const CotainerButtonDrawer = styled.button<ButtonDrawerProps>`
   display: none;
   
   @media (max-width: 721px) {
    display: unset;
    position: ${props => props.active ? "absolute" : "fixed"};;
    z-index: 5;
    right: 3rem;
    top: ${props => props.active ? "2rem" : "4.5rem"};

    background-color: transparent;
    border: none;
   }
`