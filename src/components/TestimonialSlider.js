import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import pic1 from './../assets/images/testimonials/pic1.jpg';
import pic2 from './../assets/images/testimonials/pic2.jpg';
import pic3 from './../assets/images/testimonials/pic3.jpg';


// import Swiper core and required modules
import {Autoplay,  Navigation, Pagination } from "swiper";

const testimonialData = [
	{title: 'FIG NELSON', image: pic1},
	{title: 'JOHN DOE', image: pic2},
	{title: 'DOUGLAS LYPHE', image: pic3},
];


function TestimonialSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container testimonial-swiper4 slider-btn-1"						
				speed= {1500}
				parallax= {true}
				slidesPerView={1}
				spaceBetween= {0}
				loop={true}
				pagination={{
					type: "fraction",
				}}
				autoplay= {{
				   delay: 2650,
				}}	
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
				modules={[Navigation , Autoplay, Pagination]}
			>	
					
				{testimonialData.map((item,index)=>(
					<SwiperSlide key={index}>
						<div className="testimonial-4">
							<div className="testimonial-pic">
								<img src={item.image} alt="" />
							</div>
							<div className="testimonial-info">
								<div className="testimonial-text">
									<p>Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms.</p>
								</div>
								<h5 className="testimonial-name">{item.title}</h5> 
							</div>
						</div>
					</SwiperSlide>
				))}
                
				<div className="swiper-button">
					<div className="button-prev swiper-button-prev4" ref={navigationPrevRef} ><i className="las la-arrow-left"></i></div>
					<div className="button-next swiper-button-next4" ref={navigationNextRef}><i className="las la-arrow-right"></i></div>
				</div>				
			</Swiper>
		</>
	)
}
export default TestimonialSlider;