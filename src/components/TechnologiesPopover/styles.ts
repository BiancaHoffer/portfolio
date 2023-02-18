import styled from "styled-components";

import * as Popover from '@radix-ui/react-popover';

export const ContainerTechnologiesPopover = styled.div`
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`
export const Tigger = styled(Popover.Trigger)`
  width: 2rem;

  background-color: transparent;
  border: 0;
  margin-right: 1rem;
  //margin-top: 2rem;

  img {
    width: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Content = styled(Popover.Content)`
  padding: 0.6rem 1rem;
  border-radius: 4px;
  background-color: ${props => props.theme["gray-600"]};
  margin-top: 1rem;
`