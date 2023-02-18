import * as Popover from '@radix-ui/react-popover';
import { ContainerTechnologiesPopover, Content, Tigger } from './styles';

interface Technologies {
  field: string;
  icon: string
}

interface TechnologiesPopoverProps {
  technology: Technologies[]
}

export function TechnologiesPopover({ technology }: TechnologiesPopoverProps) {
  return (
    <ContainerTechnologiesPopover>
      <h2>Principais tecnologias utilizadas: </h2>

      {technology.map(tec => {
        return (
          <Popover.Root key={tec.icon}>
            <Tigger>
              <img src={tec.icon} />
            </Tigger>
            <Popover.Portal>
              <Content>
                <div>{tec.field}</div>
              </Content>
            </Popover.Portal>
          </Popover.Root>
        )
      })}
    </ContainerTechnologiesPopover>
  )
}