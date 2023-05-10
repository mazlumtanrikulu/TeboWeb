import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import pic1 from './../../assets/images/team/pic1.jpg';
import pic2 from './../../assets/images/team/pic2.jpg';
import pic3 from './../../assets/images/team/pic3.jpg';



// import Swiper core and required modules
import { Navigation } from "swiper";

const teamsliderBlog = [
    { title: 'Colin Jameson', image: pic1, },
    { title: 'Daniel Orson', image: pic2 },
    { title: 'Mike Dooley', image: pic3 },
];

function TeamSliderIndex2() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			
            <Swiper className="swiper-container team-slider"						
                speed= {1500}
                parallax= {true}
                slidesPerView={3}
                spaceBetween= {30}
                loop={true}
                autoplay= {{
                    delay: 2900,
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
                {teamsliderBlog.map((data, ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="dz-team style-1 text-center m-b10 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="dz-media">
                                <img src={data.image} alt="" />
                    
                                <ul className="team-social">
                                    <li><a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://in.pinterest.com/" className="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div className="dz-content">
                                <h3 className="dz-name">{data.title}</h3>
                                <h6 className="dz-position text-primary">Contractor</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}       
            </Swiper>	
            <div className="swiper-button" >
                <div className="btn-prev swiper-button-prev-team" ref={navigationPrevRef}><i className="las la-angle-left"></i></div>
                <div className="btn-next swiper-button-next-team" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
            </div>
			
		</>
	)
}
export default TeamSliderIndex2;