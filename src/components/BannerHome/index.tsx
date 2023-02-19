import Link from "next/link";
import { ContainerBannerHome } from "./styled";

export function BannerHome() {
  const video = "/videos/galaxy.mp4"

  return (
    <ContainerBannerHome>
      <video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} />
      </video>

      <div data-aos="fade-down">
        <h2 >Olá, meu nome é Bianca 👋</h2>
        <h1>Sou desenvolvedora <br /> front-end</h1>
        <Link href={"/projects"} data-aos="zoom-in">
          Projetos
        </Link>
      </div>
    </ContainerBannerHome>
  )
}