import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import logo1 from "./../assets/images/references/bw/1.png";
import logo2 from "./../assets/images/references/bw/2.png";
import logo3 from "./../assets/images/references/bw/3.png";
import logo4 from "./../assets/images/references/bw/4.png";
import logo5 from "./../assets/images/references/bw/5.png";
import logo6 from "./../assets/images/references/bw/6.png";
import logo7 from "./../assets/images/references/bw/7.png";
import logo8 from "./../assets/images/references/bw/8.png";
import logo9 from "./../assets/images/references/bw/9.png";
import logo10 from "./../assets/images/references/bw/10.png";
import logo11 from "./../assets/images/references/bw/11.png";
import logo12 from "./../assets/images/references/bw/12.png";
import logo13 from "./../assets/images/references/bw/13.png";
import logo14 from "./../assets/images/references/bw/14.png";

// import Swiper core and required modules
import { Autoplay } from "swiper";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//SwiperCore.use([EffectCoverflow,Pagination]);

const clientData = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
  { image: logo6 },
  { image: logo7 },
  { image: logo8 },
  { image: logo9 },
  { image: logo10 },
  { image: logo11 },
  { image: logo12 },
  { image: logo13 },
  { image: logo14 },
];

export default function ClientsSlider() {
  return (
    <>
      <Swiper
        className="swiper-container clients-swiper"
        speed={1500}
        parallax={true}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2750,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1191: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 5,
          },
          691: {
            slidesPerView: 4,
          },
          591: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {clientData.map((d, i) => (
          <SwiperSlide key={i}>
            <div className="clients-logo aos-item">
              <img className="logo-main" src={d.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
