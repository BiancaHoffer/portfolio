import { useRouter } from "next/router";
import {
  ContainerFooter,
  ContentFooter,
  LinkNext,
  LinkScrollReact
} from "./styles";

import { SlArrowUp } from "react-icons/sl"

export function Footer() {
  const { asPath } = useRouter();

  return (
    <ContainerFooter>
      <ContentFooter>
        {asPath === "/" ? (
          <LinkNext href="/projects">
            Projetos
          </LinkNext>
        ) : (
          <LinkNext href="/">
            Home
          </LinkNext>
        )}

        <LinkScrollReact
          to="header"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
        >
          <SlArrowUp size={20} color="#f1eeee" />
        </LinkScrollReact>
      </ContentFooter>
    </ContainerFooter>
  )
}