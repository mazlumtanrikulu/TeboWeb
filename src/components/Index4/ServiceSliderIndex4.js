import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import service4 from './../../assets/images/services/pic4.jpg';
import service5 from './../../assets/images/services/pic5.jpg';
import service6 from './../../assets/images/services/pic6.jpg';
import service7 from './../../assets/images/services/pic7.jpg';
import service8 from './../../assets/images/services/pic8.jpg';

// import Swiper core and required modules
import { Navigation } from "swiper";

const serviceInfo = [
    {image: service4, name:'Industrial Construction'},
    {image: service5, name:'Petroleum and Gas'},
    {image: service6, name:'Chemical Research'},
    {image: service7, name:'Mechanical Engineering'},
    {image: service8, name:'Material Engineering'},
];

function ServiceSliderIndex4() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container service-slider-2 image-slider-wrapper"						
				speed= {1500}
				parallax= {true}
				slidesPerView={5}
				spaceBetween= {0}
				loop={true}
				autoplay= {{
				   delay: 2550,
				}}		
				onSwiper={(swiper) => {
					// Delay execution for the refs to be defined
					setTimeout(() => {
					  // Override prevEl & nextEl now that refs are defined
					  swiper.params.navigation.prevEl = navigationPrevRef.current
					  swiper.params.navigation.nextEl = navigationNextRef.current

					  // Re-init navigation
					  swiper.navigation.destroy()
					  swiper.navigation.init()
					  swiper.navigation.update()
					})
				 }}
				modules={[Navigation]}

                breakpoints= {{
                    1400: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}
			>	
                {serviceInfo.map((item, ind)=>(
                     <SwiperSlide key={ind}>
                        <div className="image-box">
                            <div className="dz-media">
                                <img src={item.image} alt=""  />
                            </div>
                            <div className="info">
                                <h3><Link to={"./services"} className="text-white">{item.name}</Link></h3>
                            </div>
                        </div>
                    </SwiperSlide>   
                ))}				
				<div className="swiper-button">
					<div className="button-prev swiper-button-prev-service" ref={navigationPrevRef} ><i className="las la-angle-left"></i></div>
					<div className="button-next swiper-button-next-service" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
				</div>				
			</Swiper>
		</>
	)
}
export default ServiceSliderIndex4;