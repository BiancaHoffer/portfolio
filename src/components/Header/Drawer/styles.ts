import styled, { css } from "styled-components";

interface ContainerDrawerProps {
  isOpen: boolean;
}

export const ContainerDrawer = styled.main<ContainerDrawerProps>`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  z-index: 40;
  background-color: rgba(0,0,0,0.4);

  opacity: 0;
  transition: opacity 0.3s;
  transform: translateX(50px);
  pointer-events: none;

  ${({ isOpen }) => isOpen ? css`
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0px);
  `
    : css`
  `}

  section {
    width: 100vw;
    height: 100%;
    cursor: pointer;
  }
`

export const ContentDrawer = styled.section<ContainerDrawerProps>`
  width: 100%;
  max-width: 22rem;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  background-color:  ${props => props.theme["gray-800"]};;
  right: 0;
  opacity: 1;
  transition: 0.4s;


  ${({ isOpen }) => isOpen ? css`
  ` : css`
  `}

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

`