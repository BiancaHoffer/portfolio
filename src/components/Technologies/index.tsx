import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper";

import {
  ContainerTechnologies,
  ContentSwiperSlide,
  SwiperStyle
} from "./styles";

import {
  SiSass,
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiHtml5,
  SiReact,
  SiNodedotjs,
} from "react-icons/si"

export function Technologies() {
  return (
    <>
      <ContainerTechnologies>
        <h1>Principais Tecnologias</h1>

        <SwiperStyle
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <ContentSwiperSlide>
            <SiHtml5 size={100} color="#db2090" />
            <p>HTML</p>
          </ContentSwiperSlide>

          <ContentSwiperSlide>
            <SiSass size={100} color="#db2090" />
            <p>SASS</p>
          </ContentSwiperSlide>

          <ContentSwiperSlide>
            <SiTypescript size={100} color="#db2090" />
            <p>TypeScript</p>
          </ContentSwiperSlide>

          <ContentSwiperSlide>
            <SiReact size={100} color="#db2090" />
            <p>React JS</p>
          </ContentSwiperSlide>

          <ContentSwiperSlide>
            <SiNodedotjs size={100} color="#db2090" />
            <p>Node JS</p>
          </ContentSwiperSlide>

          <ContentSwiperSlide>
            <SiNextdotjs size={100} color="#db2090" />
            <p>Next JS</p>
          </ContentSwiperSlide>

          <ContentSwiperSlide>
            <SiVite size={100} color="#db2090" />
            <p>Vite</p>
          </ContentSwiperSlide>
        </SwiperStyle>
      </ContainerTechnologies>
    </>
  )
}