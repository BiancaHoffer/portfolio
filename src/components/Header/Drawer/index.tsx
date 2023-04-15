import { Dispatch, ReactNode, SetStateAction } from "react";
import { ContainerDrawer, ContentDrawer } from "./styles";
import { ActiveLink } from "../ActiveLink";
import { ContactsPopover } from "../ContactsPopover";
import { IoClose } from 'react-icons/io5';

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  return (
    <ContainerDrawer isOpen={isOpen}>
      <ContentDrawer isOpen={isOpen}>
        <div onClick={() => setIsOpen(false)}>
          <IoClose size={40} color='#ffff' onClick={() => setIsOpen(false)} />
        </div>

        <nav>
          <ActiveLink href='/' name="Início" onClick={() => setIsOpen(false)} />
          <ActiveLink href='/projects' name="Projetos" onClick={() => setIsOpen(false)} />
          <ContactsPopover setIsOpen={setIsOpen} />
        </nav>
      </ContentDrawer>
      <section
        onClick={() => setIsOpen(false)}
      />
    </ContainerDrawer>
  )
}