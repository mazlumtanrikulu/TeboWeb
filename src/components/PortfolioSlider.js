import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import work1 from './../assets/images/work/work-1/pic1.jpg';
import work2 from './../assets/images/work/work-1/pic2.jpg';
import work3 from './../assets/images/work/work-1/pic3.jpg';



// import Swiper core and required modules
import { Navigation } from "swiper";


const protfolioBlog = [
	{ image: work1, title:'Mechanical Engineering'},
	{ image: work2, title:'Flexible Manufacturing'},
	{ image: work3, title:'Power & Energy'},
]; 

function PortfolioSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<div className="row spno">
				<div className="col-lg-4 align-self-center px-lg-3 px-0 mb-lg-0 mb-4 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
					<div className="m-l60 m-r60 m-lg-l20 m-lg-r20 m-md-l0 m-md-r0">
						<div className="section-head style-1">
							<h2 className="title m-b20">Industries Provide Best Services</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted By</p>
						</div>
						<div className="swiper-button">
							<div className="btn-prev swiper-button-prev-portfolio"  ref={navigationPrevRef}><i className="las la-angle-left"></i></div>
							<div className="btn-next swiper-button-next-portfolio" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
						</div>
					</div>
				</div>
				<div className="col-lg-8 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
					<Swiper className="swiper-container swiper-portfolio-1"						
						speed= {1500}
						parallax= {true}
						slidesPerView={3}
						spaceBetween= {0}
						loop={true}
						autoplay= {{
						   delay: 3000,
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
						breakpoints = {{
							1200: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 2,
							},
							591: {
								slidesPerView: 2,
							},
							320: {
								slidesPerView: 1,
							},
						}}						
					>	
					
						{protfolioBlog.map((item,ind)=>(
							<SwiperSlide key={ind}>
								<div className="dz-box style-1">
									<div className="dz-media">
										<img src={item.image} alt="" />
									</div>
									<div className="dz-info">
										<h3 className="title m-b10"><Link to={"#"}>{item.title}</Link></h3>
										<h6 className="sub-title text-primary">150 projects</h6>
									</div>
								</div>
							</SwiperSlide>
						))}										
					</Swiper>	
				</div>
			</div>	
			
		</>
	)
}
export default PortfolioSlider;