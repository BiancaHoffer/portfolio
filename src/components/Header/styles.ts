import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%; 
    background-color: ${props => props.theme["gray-800"]};
    border-bottom: 1px solid ${props => props.theme["gray-600"]};
    height: 6.25rem;
`

export const ContentHeader = styled.div`
   width: 100%;
    max-width: 65rem;
    margin: 0 auto;
    padding: 0 3rem;
    height: 6.25rem;
    display: flex;
    align-items: center;

    
    @media (max-width: 719px) {
       justify-content: flex-end;
    }
`

export const ButtonDrawer = styled.button`
    background-color: transparent;
    border: none;
    height: 42px;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 720px) {
       display: none;
    }
`

