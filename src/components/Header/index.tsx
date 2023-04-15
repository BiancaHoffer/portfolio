import { ButtonDrawer, ContainerHeader, ContentHeader } from "./styles";
import { IoMdMenu } from 'react-icons/io'
import { NavWeb } from "./NavWeb"
import { Drawer } from "./Drawer";
import { useState } from "react";

export function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <ContainerHeader id="header">
      <ContentHeader>
        <NavWeb />
        <ButtonDrawer onClick={() => setIsOpenDrawer(true)}>
          <IoMdMenu size={42} color="#ffff" />
        </ButtonDrawer>
        <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
      </ContentHeader>
    </ContainerHeader>
  )
}