import React from "react";
import { Swiper, SwiperProps } from "swiper/react";
import {
  A11y,
  Autoplay,
  Keyboard,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "../assets/css/myswiper.css";

type MySwiperProps = {
  children: React.ReactNode;
  className?: string;
} & SwiperProps;

function MySwiper(props: MySwiperProps) {
  const { children, className, ...rest } = props;

  const swiperParameters = {
    modules: [A11y, Autoplay, Keyboard, EffectFade, Pagination],
    threshold: 5,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    loop: true,
    watchSlidesProgress: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { disableOnInteraction: true, enabled: true },
    grabCursor: true,
    speed: 800,
    centeredSlides: true,
    keyboard: { enabled: true },
    pagination: { clickable: true },
  };

  return (
    <>
      <Swiper
        className={`${className ? className : ""}`}
        {...swiperParameters}
        {...rest}
      >
        {children}
      </Swiper>
    </>
  );
}

export default MySwiper;
