import styled from "styled-components";
import { SwiperSlide } from "swiper/react";


export const ContainerTechnologies = styled.div`
   width: 100%;
    max-width: 1140px;
    margin: 0 auto;

    border-top: 1px solid ${props => props.theme["gray-500"]};

    padding: 12rem 2.5rem;

    h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
    }
`

export const ContentSwiper = styled.div`
   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;
`

export const ContentSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-weight: bold;
`

