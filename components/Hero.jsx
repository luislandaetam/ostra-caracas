"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      <div className="slide bg-slide-1">
        <div className="slide-text-container">
          <h1 className="slide-text">Slider Image 1</h1>
        </div>
      </div>
      <div className="slide bg-slide-2">
        <div className="slide-text-container">
          <h1 className="slide-text">Slider Image 2</h1>
        </div>
      </div>
      <div className="slide bg-slide-3">
        <div className="slide-text-container">
          <h1 className="slide-text">Slider Image 3</h1>
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
