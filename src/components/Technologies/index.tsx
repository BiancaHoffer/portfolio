import { SwiperTechnologies } from "../SwiperTechnologies";
import { SwiperTechnologiesMobile } from "../SwiperTechnologiesMobile";
import {
  ContainerTechnologies, TechnologiesMobile, TechnologiesWeb
} from "./styles";



export function Technologies() {
  return (
    <>
      <ContainerTechnologies>
        <h1>Principais Tecnologias</h1>

        <TechnologiesWeb>
          <SwiperTechnologies />
        </TechnologiesWeb>

        <TechnologiesMobile>
          <SwiperTechnologiesMobile />
        </TechnologiesMobile>
      </ContainerTechnologies>
    </>
  )
}