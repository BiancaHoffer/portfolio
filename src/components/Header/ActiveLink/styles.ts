import Link from "next/link";
import styled from "styled-components";

export const NavLinkActive = styled(Link)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${props => props.theme["gray-10"]};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }      
`

export const NavLinkInactive = styled(Link)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${props => props.theme["gray-400"]};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme["gray-10"]};
    transition: color 0.3s;
  }   
`