import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

export const ContentSwiper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SwiperStyle = styled(Swiper)`
   height: 15rem;

  .swiper-pagination {
    span {
      border: 1px solid ${props => props.theme["gray-500"]};
      color: red;
      background-color: ${props => props.theme["pink-500"]};
    }
  }   
`
export const ContentSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
`

