import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import Slider2 from './../../assets/images/main-slider/slider2.jpg';
import Slider3 from './../../assets/images/main-slider/slider3.jpg';
import Slider4 from './../../assets/images/main-slider/slider4.jpg';


// import Swiper core and required modules
import { Autoplay, Parallax, Navigation } from "swiper";

const bannerBlog = [
	{image: Slider2, title:'YOUR PARTNER FOR FUTURE INNOVATION'},
	{image: Slider3, title:'CRACKING THE INDUSTRY CODE'},
	{image: Slider4, title:'YOUR PARTNER FOR FUTURE INNOVATION'},
];

function Home2BannerSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container main-slider-2 banner-inner"	
				speed= {1500}
				parallax={true}
				loop={true}
				autoplay = {{
				    delay: 2800,
				}}
				pagination = {{
				  el: ".swiper-pagination-slider1",
				  type: "progressbar",
				}}
				
				slidesPerView = {1}
				spaceBetween = {0}
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
				 
				modules={[Autoplay, Parallax, Navigation]}
			>		
				{bannerBlog.map((data,ind)=>(
					<SwiperSlide style={{backgroundImage: "url(" + data.image + ")", backgroundSize: "cover" }} key={ind}>
						<div className="banner-content container">
							<div className="row">
								<div className="col-lg-9">
									<h1 className="title" data-swiper-parallax="-500">{data.title}</h1>
									<p data-swiper-parallax="-1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted By The Read Of A Page.</p>
									<Link to={"./about-us"}  className="btn btn-primary">READ MORE <i className="fas fa-long-arrow-alt-right m-l15"></i></Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
				
				<div className="swiper-button" style={{zIndex:1}}>
					<div className="swiper-button-prev" ref={navigationPrevRef}><i className="las la-angle-left"></i></div>
					<div className="swiper-button-next" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
				</div>				
			</Swiper>			
		</>
	)
}
export default Home2BannerSlider;