import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import pic10 from './../../assets/images/services/pic10.jpg';
import pic11 from './../../assets/images/services/pic11.jpg';
import pic12 from './../../assets/images/services/pic12.jpg';
import pic13 from './../../assets/images/services/pic13.jpg';
import pic14 from './../../assets/images/services/pic14.jpg';




// import Swiper core and required modules
import SwiperCore, { Autoplay, Parallax } from 'swiper';
SwiperCore.use([Parallax, Autoplay  ]);

//SwiperCore.use([EffectCoverflow,Pagination]);

const ServiceSliderData = [
	{image: pic10, title:'Fuel & Gas Management', classIcon:'flaticon-fuel-station' },
	{image: pic11, title:'Chemical Research', classIcon:'flaticon-atomic'},
	{image: pic12, title:'Mechanical Engineering', classIcon:'flaticon-conveyor'},
	{image: pic13, title:'Material Engineering', classIcon:'flaticon-robot-arm'},
	{image: pic14, title:'Chemical Research', classIcon:'flaticon-fuel-station'},
];

export default function ServiceSlider3Blog() {
	
	return (
		<>
			<Swiper className="swiper-container service-slider-3 image-box-slider"						
				speed= {1500}
				parallax= {true}
				slidesPerView= {5}
				spaceBetween= {30}
                centeredSlides= {true}
				loop={true}
				autoplay= {{
				   delay: 2600,
				}}
				modules={[ Autoplay, Parallax ]}
				breakpoints = {{
					1200: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    300: {
                        slidesPerView: 1,
                    },
				}}
			>	
				{ServiceSliderData.map((d,i)=>(
					<SwiperSlide key={i}>
						<div className="image-box2 aos-item" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                            <div className="dz-media">
                                <img src={d.image} alt="" />
                            </div>
                            <div className="info">
                                <div className="icon-lg text-white m-b15">
                                    <i className={d.classIcon}></i>
                                </div>
                                <h4 className="text-white">{d.title}</h4>
                            </div>
                        </div>
					</SwiperSlide>
				))}				
			</Swiper>
		</>
	)
}