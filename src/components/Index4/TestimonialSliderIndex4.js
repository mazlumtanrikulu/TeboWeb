import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import pic1 from './../../assets/images/testimonials/pic1.jpg';
import pic2 from './../../assets/images/testimonials/pic2.jpg';
import pic3 from './../../assets/images/testimonials/pic3.jpg';

// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";

const TestimonialBlog = [
    {image: pic1, title:'Fig Nelson'},
    {image: pic2, title:'John Doe'},
    {image: pic3, title:'Douglas Lyphe'},
];


function TestimonialSliderIndex4() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container testimonial-swiper3 m-b30"						
				speed= {1500}
				parallax= {true}
				slidesPerView={3}
				spaceBetween= {0}
				loop={true}
				autoplay= {{
				   delay: 2500,
				}}						
				modules={[Navigation , Autoplay]}
                breakpoints= {{
                    1300: {
                        slidesPerView: 3,
                    },
                    991: {
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
					
				{TestimonialBlog.map((item, ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="testimonial-3 aos-item">
                            <div className="testimonial-info">
                                <div className="testimonial-text">
                                    <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
                                </div>
                            </div>
                            <div className="testimonial-footer">
                                <div className="testimonial-pic">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="testimonial-name">{item.title}</h4> 
                                    <span className="testimonial-position text-primary">Marketing</span> 
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
			</Swiper>
		</>
	)
}
export default TestimonialSliderIndex4;