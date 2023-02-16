import * as Popover from '@radix-ui/react-popover';
import { Content, Tigger } from './styles';

interface TechnologiesPopover {
  icon: {
    field: string;
    url: string;
  };
}

interface TechnologiesPopoverProps {
  technologies: TechnologiesPopover[];
}

export function TechnologiesPopover({ technologies }: TechnologiesPopoverProps) {
  return (
    <>
      {technologies.map(tec => {
        return (
          <Popover.Root key={tec.icon.url}>
            <Tigger>
              <img src={tec.icon.url} />
            </Tigger>
            <Popover.Portal>
              <Content>
                <div>{tec.icon.field}</div>
              </Content>
            </Popover.Portal>
          </Popover.Root>
        )
      })}
    </>
  )
}