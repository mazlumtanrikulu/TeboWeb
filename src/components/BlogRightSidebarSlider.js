import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,  Navigation } from "swiper";


import grid4 from './../assets/images/blog/large/pic4.jpg';
import grid3 from './../assets/images/blog/large/pic3.jpg';
import grid2 from './../assets/images/blog/large/pic2.jpg';

const ImageBlog = [
    {image: grid4},
    {image: grid3},
    {image: grid2},
];

export default function BlogRightSidebarSlider(){
    const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
    return(
        <>
            <div className="dz-card style-1 shadow m-b30">
                <div className="dz-media">
                    <Swiper className="swiper-container post-swiper"
                        speed= {1500}
                        parallax= {true}
                        slidesPerView= {1}
                        spaceBetween= {0}
                        loop={true}
                        autoplay= {{
                           delay: 2700,
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
                        modules={[Navigation , Autoplay]}
                    >
                         {ImageBlog.map((data, index)=>(
                            <SwiperSlide className="swiper-slide">                           
                                <Link to={'./blog-details'} key={index}><img src={data.image} alt="" /></Link>
                            </SwiperSlide>                        
                        ))}
                        
                        <div className="prev-post-swiper-btn" ref={navigationPrevRef}><i className="fas fa-chevron-left"></i></div>
                        <div className="next-post-swiper-btn" ref={navigationNextRef}><i className="fas fa-chevron-right"></i></div>
                    </Swiper>
                </div>
                <div className="dz-info">
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date">August 30, 2019</li>
                        </ul>
                    </div>
                    <h3 className="dz-title"><Link to={'./blog-details'}>Time Is Running Out! Think About These 10 Ways To Change Your Agency</Link></h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eget aliquet nibh. Integer tincidunt odio enim, quis tempor sapien tristique consequat. Maecenas consequat tempor ipsum, quis tempus orci mattis et. Praesent mollis scelerisque mattis.</p>
                </div>
            </div>
        </>
    )
}