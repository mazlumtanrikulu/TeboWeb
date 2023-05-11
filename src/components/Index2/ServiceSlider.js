import React from "react";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import service1 from './../../assets/images/services/pic1.jpg';
import service2 from './../../assets/images/services/pic2.jpg';
import service3 from './../../assets/images/services/pic3.jpg';




// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";

const serviceBlog = [
    { number: '01', icon: 'flaticon-cogwheel', image: service1, title: 'Construction Machines', },
    { number: '02', icon: 'flaticon-engineer-1', image: service2, title: 'Best Engineering', },
    { number: '03', icon: 'flaticon-robot-arm', image: service3, title: 'Power & Energy Sector', },
];


function ServiceSlider() {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <>

            <Swiper className="swiper-container service-slider"
                speed={1500}
                parallax={true}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2900,
                }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        // swiper.params.navigation.prevEl = navigationPrevRef.current
                        // swiper.params.navigation.nextEl = navigationNextRef.current

                        // Re-init navigation
                        // swiper.navigation.destroy()
                        // swiper.navigation.init()
                        // swiper.navigation.update()
                    })
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}
            >
                {serviceBlog.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className="content-box overlay-shine aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="dz-media">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="dz-info" data-num={data.number}>
                                <div className="icon-lg m-b20 text-primary">
                                    <i className={data.icon}></i>
                                </div>
                                <h4 className="dz-title"><Link to={"./services"}>{data.title}</Link></h4>
                                <p className="m-b0">Progressively maintain extensive intermediaries via extensible nich that capitalizes</p>
                            </div>
                            <div className="dz-bottom">
                                <Link to={"./services"} className="btn btn-primary d-block" >READ MORE</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button" >
                <div className="btn-prev swiper-button-prev-service" ref={navigationPrevRef}><i className="las la-angle-left"></i></div>
                <div className="btn-next swiper-button-next-service" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
            </div>

        </>
    )
}
export default ServiceSlider;