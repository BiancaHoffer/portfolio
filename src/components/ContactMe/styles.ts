import styled from "styled-components";

export const ContainerContactMe = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    border-top: 1px solid ${props => props.theme["gray-500"]};
    padding: 12rem 2.5rem;

    h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
    }

    @media (max-width: 820px) {
        h1 {
        width: 100%;
        text-align: center;
        }
    }
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows:  auto auto auto;
    gap: 1rem;

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    input, textarea {
        padding: 1rem 1.5rem;
        border-radius: 4px;
        border: 1px transparent;
        background-color: ${props => props.theme["gray-800"]};
        border: 1px solid ${props => props.theme["gray-500"]};
        color: ${props => props.theme["gray-10"]};

        &:hover {
            border: 1px solid ${props => props.theme["pink-500"]};
            transition: border 0.3s;
        }

        &:focus {
            border: 1px solid ${props => props.theme["pink-500"]};
        }

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme["gray-600"]} inset;
            box-shadow: 0;
        }

        &:-webkit-autofill {
            -webkit-text-fill-color: ${props => props.theme["gray-10"]};
        }
    }

    textarea {
        grid-column: 1 / 3;
        width: 100%;
        resize: vertical;
        margin-top: 1rem;

        @media (max-width: 520px) {
            grid-column: 1 / 1;
            grid-template-columns: 1fr;
            margin-top: 0;
        }
    }

    textarea, input, button {
        @media (max-width: 640px) {
            font-size: 1.5rem;
        }
    }
`

export const ButtonSubmit = styled.button`
    border-radius: 4px;
    background-color: ${props => props.theme["pink-500"]};
    border: 0;
    color: ${props => props.theme["gray-10"]};
    padding:  1rem;
    width: 12rem;
    font-size: 1.5;
    font-weight: bold;
    margin-top: 1rem;

    &:hover {
        opacity: 0.4;
        transition: 0.2s;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${props => props.theme["pink-500"]};
        opacity: 0.4;
        transition: opacity 0.2s;
    }

    @media (max-width: 520px) {
        width: 100%;
        margin-top: 0rem;
    }
`