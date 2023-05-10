import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import work1 from './../../assets/images/work/work-3/pic1.jpg';
import work2 from './../../assets/images/work/work-3/pic2.jpg';
import work3 from './../../assets/images/work/work-3/pic3.jpg';
import work4 from './../../assets/images/work/work-3/pic4.jpg';




// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const ProjectData = [
	{image: work1, title: 'Industrial Construction' },
	{image: work2, title: 'Chemical Research' },
	{image: work3, title: 'Agricultural Processing'},
	{image: work4, title: 'Mechanical Engineering'},

];

export default function SwiperPortfolioProject() {
	
	return (
		<>
			<Swiper className="swiper-container swiper-portfolio-2"						
				speed= {1500}
				parallax= {true}
				slidesPerView= {4}
				spaceBetween= {30}
				loop={true}
				autoplay= {{
				   delay: 2750,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					1200: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    591: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
				}}
			>	
				{ProjectData.map((d,i)=>(
					<SwiperSlide key={i}>
						<div className="dz-box style-3 aos-item" >
                            <Link to={"./portfolio-details"} className="dz-media height-lg" style={{backgroundImage:'url('+ d.image +')'}}></Link>
                            <div className="dz-info">
                                <h4 className="title m-b20">{d.title}</h4>
                                <Link to={"./portfolio-details"} className="btn-link"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
					</SwiperSlide>
				))}				
			</Swiper>
		</>
	)
}