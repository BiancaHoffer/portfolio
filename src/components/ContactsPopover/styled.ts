import styled from "styled-components";
import * as Popover from '@radix-ui/react-popover';

export const Trigger = styled(Popover.Trigger)`
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => props.theme["gray-400"]};
    border: none;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    &:hover {
        color: ${props => props.theme["gray-10"]};
        transition: color 0.4s;
   }
`

export const Content = styled(Popover.Content)`
    background-color: ${props => props.theme["gray-600"]};
    padding: 2rem;
    border-radius: 4px;
    width: 12rem;

    a {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      margin-bottom: 0.7rem;
      font-weight: 700;
      
      &:nth-child(3) {
        margin-bottom: 0rem;
      }

      &:hover {
        margin-left: 0.5rem;
        transition: margin 0.2s;
      }
    }
`
