import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import logo1 from "./../assets/images/logo/logo1.jpg";
import logo2 from "./../assets/images/logo/logo2.jpg";
import logo3 from "./../assets/images/logo/logo3.jpg";
import logo4 from "./../assets/images/logo/logo4.jpg";
import logo5 from "./../assets/images/logo/logo5.jpg";
import logo6 from "./../assets/images/logo/logo6.jpg";

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
			<Link to={'/certificate-of-company'}>
            <div className="clients-logo aos-item">
              <img className="logo-main" src={d.image} alt="" />
            </div>
			</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
