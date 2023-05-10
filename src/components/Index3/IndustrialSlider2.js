import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import about31 from './../../assets/images/about/about31.jpg';
import about32 from './../../assets/images/about/about32.jpg';
import about33 from './../../assets/images/about/about33.jpg';




// import Swiper core and required modules
import SwiperCore,{ EffectFade, Autoplay, Navigation } from "swiper";
SwiperCore.use([EffectFade,Autoplay, Navigation]);

const industrialImage = [
	{image: about31},
	{image: about32},
	{image: about33},
];


function IndustrialSlider2() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container about-swiper-2"						
				speed= {1000}
				//effect={"fade"}
				slidesPerView={1}
				spaceBetween= {0}
				loop={true}
				autoplay= {{
				   delay: 2700,
				}}	
				modules={[Navigation ,EffectFade,  Autoplay]}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
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
				
			>	
				{industrialImage.map((data, i)=>(
					<SwiperSlide key={i}>
						<img src={data.image} alt="" />
					</SwiperSlide>
				))}               
				<div className="swiper-button">
					<div className="btn-prev swiper-button-prev-about2" ref={navigationPrevRef} ><i className="las la-angle-left"></i></div>
					<div className="btn-next swiper-button-next-about2" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
				</div>				
			</Swiper>
		</>
	)
}
export default IndustrialSlider2;