import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import pic1 from './../../assets/images/services/pic1.jpg';
import pic2 from './../../assets/images/services/pic2.jpg';
import pic3 from './../../assets/images/services/pic3.jpg';



// import Swiper core and required modules
import {Autoplay,  Navigation, Pagination } from "swiper";


const industryBlog = [
	{title:'Industrial Construction', image: pic1},
	{title:'Industrial Engineering', image: pic2},
	{title:'Industrial Automation', image: pic3},
];

export default function IndustrialSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container content-slider about-swiper slider-btn-1"						
				speed= {1500}
				parallax= {true}
				slidesPerView= {3}
				spaceBetween= {0}
				loop={true}
                pagination={{
					type: "fraction",
				}}
				autoplay= {{
				   delay: 3100,
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
				breakpoints = {{
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
					
				{industryBlog.map(()=>(
					<SwiperSlide >
						<div className="content-box2 overlay-shine">
							<div className="dz-info">
								<h3 className="title">Industrial Construction</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
							</div>
							<div className="dz-media m-b30">
								<img src={pic1} alt="" />
							</div>
							<div className="dz-bottom">
								<Link to={"./services"} className="btn-link">READ MORE<i className="fas fa-arrow-right"></i></Link>
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