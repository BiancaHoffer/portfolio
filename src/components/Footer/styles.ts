import styled from "styled-components";
import Link from "next/link";
import { Link as LinkReactScroll } from "react-scroll";

export const ContainerFooter = styled.footer`
  width: 100%;
  border-top: 1px solid  ${props => props.theme["gray-600"]};
`

export const ContentFooter = styled.footer`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 2.5rem;

  display: flex;
  justify-content: space-between;
`

export const LinkScrollReact = styled(LinkReactScroll)`
  border-radius: 4px;
  background-color: ${props => props.theme["gray-600"]};
  padding: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
`

export const LinkNext = styled(Link)`
  border-radius: 4px;
  background-color: ${props => props.theme["gray-600"]};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:  1rem;
  width: 6rem;
  color: ${props => props.theme["gray-10"]};

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
`

