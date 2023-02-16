import Link from "next/link";
import { useState, useEffect } from "react"
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

      <div>
        <h2>Olá, meu nome é Bianca 👋</h2>
        <h1>Sou desenvolvedora <br /> front-end</h1>
        <Link href={"/projects"} >
          Projetos
        </Link>
      </div>
    </ContainerBannerHome>
  )
}