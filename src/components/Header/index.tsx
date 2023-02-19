import { ButtonDrawer } from "./ButtonDrawer";
import { ContainerHeader, ContentHeader } from "./styles";
import { NavWeb } from "./NavWeb"

export function Header() {
  return (
    <ContainerHeader id="header">
      <ContentHeader>
        <span />
        <NavWeb />
        <ButtonDrawer />
      </ContentHeader>
    </ContainerHeader>
  )
}