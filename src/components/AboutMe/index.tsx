import { ContainerAboutMe, Memoji, Resume } from "./styles";

export function AboutMe() {
  return (
    <ContainerAboutMe data-aos="fade-down">
      <Resume>
        <h1>Sobre mim</h1>
        <p>Sou desenvolvedora desde 2021, especializada em desenvolvimento web. Meu principal objetivo é criar soluções digitais modernas e dinâmicas que atendam às necessidades de pessoas. Dedico meu tempo para me manter atualizada sobre as mais recentes tecnologias e tendências do mercado front-end, garantindo assim que meus projetos sejam executados com excelência. Estou comprometida em fornecer resultados de alta qualidade e superar as expectativas. Minha paixão pela programação e minha busca constante por aprimoramento me tornam uma profissional altamente motivada e capaz de enfrentar os desafios do setor de TI.
        </p>
      </Resume>

      <Memoji className="memoji-about-me" data-aos="zoom-in">
        <span>
          <img src="/images/me.svg" alt="Memoji" />
        </span>
      </Memoji>
    </ContainerAboutMe>
  )
}