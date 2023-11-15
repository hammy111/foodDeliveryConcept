import Showbutton from "../Show_Button/showbutton";
import "./restaurants.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { restaurantimages } from "./restaurantimages";

export default function Restaurants() {
  return (
    <div className="restaurants_container">
      <div className="about">
        <h2>Restaurants</h2>
        <Showbutton />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        spaceBetween={window.innerWidth <= 600 ? 0 : 60}
        loop={1}
        navigation
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
          2400: {
            slidesPerView: 8,
          },
        }}
      >
        {restaurantimages.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={require(`../../img/${image.src1}`)} alt="" />
              <img src={require(`../../img/${image.src2}`)} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
