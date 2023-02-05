import Link from "next/link";
import { ContactsPopover } from "../ContactsPopover";
import { ContainerNav } from "./styles";

export function NavHeader() {
  return (
    <ContainerNav>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>

      <Link href="/projects" legacyBehavior>
        <a>Projetos</a>
      </Link>

      <ContactsPopover />
    </ContainerNav>
  )
}