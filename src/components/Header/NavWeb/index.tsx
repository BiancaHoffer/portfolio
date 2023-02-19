import { ActiveLink } from "../ActiveLink";
import { ContactsPopover } from "../ContactsPopover";
import { ContainerNav } from "./styles";

export function NavWeb() {
  return (
    <ContainerNav >
      <ActiveLink href='/' name="Início" />
      <ActiveLink href='/projects' name="Projetos" />
      <ContactsPopover />
    </ContainerNav>
  )
}