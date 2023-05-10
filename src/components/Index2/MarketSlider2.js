import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import large1 from './../../assets/images/testimonials/large/pic1.jpg';
import large2 from './../../assets/images/testimonials/large/pic2.jpg';
import large3 from './../../assets/images/testimonials/large/pic3.jpg';
import { NavItem } from "react-bootstrap";

const marketDat = [
    {name: 'Fig Nelson', image:large1 }, 
    {name: 'John Doe', image:large2 }, 
    {name: 'Douglas Lyphe', image:large3 }, 
];

export default function MarketSlider2() {
	
	return (
		<>
			<Swiper className="swiper-container testimonial-swiper2"						
				speed= {1500}
				parallax= {true}
				slidesPerView= {2}
				spaceBetween= {50}
				loop={true}
				autoplay= {{
				   delay: 2700,
				}}
				breakpoints = {{
					1300: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
				}}
			>	
				{marketDat.map((item,ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="testimonial-2 aos-item">
                            <div className="testimonial-pic">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="testimonial-info">
                                <div className="info">
                                    <h5 className="testimonial-name">{item.name}</h5> 
                                    <span className="testimonial-position">Marketing</span> 
                                </div>
                                <div className="testimonial-text">
                                    <p>“Curabitur a urna vitae nisl fringilla porta non eu dui. Suspendisse volutpat neque mauris, neque imperdiet dignissim. Sed ut interdum mi, in ullamcorper nisi”.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}								
			</Swiper>
		</>
	)
}