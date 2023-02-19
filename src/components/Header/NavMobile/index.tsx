import { ActiveLink } from "../ActiveLink";
import { ContactsPopover } from "../ContactsPopover";
import { ContainerNav } from "./styles";

interface NavHeaderProps {
  activeDrawer: boolean;
}

export function NavMobile({ activeDrawer }: NavHeaderProps) {
  return (
    <ContainerNav active={activeDrawer}>
      <h2>Navegação</h2>
      <ActiveLink href='/' name="Início" />
      <ActiveLink href='/projects' name="Projetos" />
      <ContactsPopover />
    </ContainerNav>
  )
}