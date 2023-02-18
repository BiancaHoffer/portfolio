import { NavHeader } from "../NavHeader";
import { ContainerHeader, ContentHeader } from "./styles";

export function Header() {
    return (
        <ContainerHeader id="header">
            <ContentHeader>
                <span />
                <NavHeader />
                <span />
            </ContentHeader>
        </ContainerHeader>
    )
}