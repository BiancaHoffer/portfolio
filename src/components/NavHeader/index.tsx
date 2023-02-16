import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import { ContactsPopover } from "../ContactsPopover";
import { ContainerNav } from "./styles";

export function NavHeader() {
  return (
    <ContainerNav>
      <ActiveLink href='/' name="Início" />
      <ActiveLink href='/projects' name="Projetos" />
      <ContactsPopover />
    </ContainerNav>
  )
}