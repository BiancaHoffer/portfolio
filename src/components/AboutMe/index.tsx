import { ContainerAboutMe, Memoji, Resume } from "./styles";

export function AboutMe() {
  return (
    <ContainerAboutMe>
      <Resume>
        <h1>Sobre mim</h1>
        <p>Sou desenvolvedora desde 2021, focada em web e mobile.
          Sempre busco criar páginas modernas e dinâmicas.
          Dedico o máximo do meu tempo para aprender as principais tecnologias
          do mercado front-end e aplicar no projeto dos meus clientes.
        </p>
      </Resume>

      <Memoji className="memoji-about-me">
        <span>
          <img src="/images/me.svg" alt="Memoji" />
        </span>
      </Memoji>
    </ContainerAboutMe>
  )
}