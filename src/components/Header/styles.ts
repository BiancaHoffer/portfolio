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

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-content: center;
`