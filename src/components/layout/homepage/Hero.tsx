"use client";

import React from "react";
import { SwiperSlide } from "swiper/react";
import MySwiper from "@/components/MySwiper";
import HeroSlide from "@/components/layout/homepage/HeroSlide";

function Hero() {
  return (
    <header>
      <MySwiper>
        <SwiperSlide className="swiper-slide--1">
          <HeroSlide
            title="Find the space that fits your shot"
            subTitle="Book verified photo studios, sound stages and recording suites by the
        hour."
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide--2">
          <HeroSlide
            title=" Podcast. Record. Perform."
            subTitle="Acoustic-treated rooms ready for your next episode or session."
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide--3">
          <HeroSlide
            title="Got a space? Put it to work."
            subTitle="List your studio and welcome creators from across the country."
          />
        </SwiperSlide>
      </MySwiper>
    </header>
  );
}

export default Hero;
