import React, { useState, useEffect } from 'react';
import Showbutton from "../Show_Button/showbutton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { specialitiesImage } from "./SpecialitiesImage";
import "./specialities.css";

export default function Specialities() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesPerView(2);
      } else if (window.innerWidth <= 1200) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(8);
      }
    };

    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="specialities_container">
      <div className="title">
        <h2>Specialities</h2>
        <Showbutton />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        navigation
        spaceBetween={window.innerWidth <= 600 ? 0 : 20}
        slidesPerView={slidesPerView}
      >
        {specialitiesImage.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="specialities_image_div">
                <img src={require(`../../img/${image.src}`)} alt={image.text} />
              </div>
              <p>{image.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
