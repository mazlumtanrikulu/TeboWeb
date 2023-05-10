import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import pic3 from './../assets/images/blog/blog-grid/pic3.jpg';
import pic4 from './../assets/images/blog/blog-grid/pic4.jpg';
import pic5 from './../assets/images/blog/blog-grid/pic5.jpg';



// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const insightBlog = [
	{image: pic3, title : 'HOW TO BECOME BETTER WITH AGENCY IN 10 MINUTES' },
	{image: pic4, title : 'WHY MOST PEOPLE WILL NEVER BE GREAT AT AGENCY' },
	{image: pic5, title : 'THINK POSITIVE, THINK ALWAYS POWERING YOUR BUSINESS' },
];

export default function TrendsSlider() {
	
	return (
		<>
			<Swiper className="swiper-container clients-swiper"						
				speed= {1500}
				parallax= {true}
				slidesPerView= {3}
				spaceBetween= {30}
				loop={true}
				autoplay= {{
				   delay: 2750,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					1191: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2,
					},
					
                    320: {
						slidesPerView: 1,
					},
					
				}}
			>	
				
                    {insightBlog.map((data,i)=>(
                        <SwiperSlide key={i}>
                            <div className="dz-card style-1 text-white overlay-shine">
                                <div className="dz-media">
                                    <Link to={'./blog-details'}><img src={data.image} alt="" /></Link>
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">August 30, 2022</li>
                                        </ul>
                                    </div>
                                    <h4 className="dz-title"><Link to={"./blog-details"}>{data.title}</Link></h4>
                                </div>
                            </div>
                            
					    </SwiperSlide>
                    ))}	
							
			</Swiper>
		</>
	)
}