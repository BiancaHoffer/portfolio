import { ContainerHeader, ContentHeader } from "./styles";
import { NavWeb } from "./NavWeb"

export function Header() {
  return (
    <ContainerHeader id="header">
      <ContentHeader>
        <span />
        <NavWeb />
        <span />
      </ContentHeader>
    </ContainerHeader>
  )
}