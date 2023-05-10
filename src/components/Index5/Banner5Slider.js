import React,{useState} from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import VideoPopup from './../../components/VideoPopup';
//Images
import slider6 from './../../assets/images/main-slider/slider6.jpg';
import slider7 from './../../assets/images/main-slider/slider7.jpg';
import slider8 from './../../assets/images/main-slider/slider8.jpg';


// import Swiper core and required modules

import SwiperCore, {Navigation, FreeMode, Autoplay, Pagination, Parallax,Thumbs  } from 'swiper';
SwiperCore.use([Parallax,Thumbs, FreeMode,Autoplay, Pagination, Navigation  ]);

const bannerData1 = [
	{title: 'Market-leading Producer of Sheet Metal Alloy' },
	{title: 'How To Make More Industry By Doing Less'},
	{title: 'The Industry That Wins Customers'},
];

const bannerData2 = [
    {image: slider6 },
    {image: slider7 },
	{image: slider8},
];


function Banner5Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	const paginationRef = React.useRef(null)
	return (
		<>
			<div className="image-slider__pagination" ref={paginationRef}>
				<div className="image-slider__current">01</div>
				<div className="swiper-pagination-slider5 swiper-pagination"></div>
				<div className="image-slider__total">03</div>
			</div>
            <div className="row spno">
				<div className="col-lg-6 align-self-center">
                    <Swiper className="swiper-container main-swiper5"                        				
                        speed= {1500}
                        parallax= {true}
                        //slidesPerView={1}
                       // spaceBetween= {0}
                        loop={false}
                        watchSlidesProgress= {true}
                        autoplay= {{
                            delay: 3000,
                        }}	

                        thumbs={{ swiper: thumbsSwiper }}
						pagination = {{							
							clickable: true,
							el: ".swiper-pagination-slider5",
							type: "progressbar",
						}}
                        modules={[Navigation , Autoplay, Parallax, Thumbs, Pagination ]}
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

                        
                    >	                            
                        {bannerData1.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <div className="banner-content">
                                    <h1 className="title" data-swiper-parallax="-500">{item.title}</h1>
                                    <p data-swiper-parallax="-1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. </p>
                                    <div data-swiper-parallax="-1500">
										<Link to={"./about-us"} className="btn btn-primary btn-border btn-border-white m-r10 m-b10">ABOUT US</Link>
									</div>
								</div>
                            </SwiperSlide>
                        ))}			
                    </Swiper>
                </div>
                <div className="col-lg-6">
					<div className="media-slider">
						<VideoPopup classChange="popup-youtube play-btn5" />						
                        <Swiper className="swiper-container slider-thumbs-wraper main-swiper-thumb5"
                            onSwiper={setThumbsSwiper}		
                            speed= {1500}
                           // effect= {"fade"}
                            loop={false}
                            parallax= {true}
                            autoplay= {{
                                delay: 3000,
                            }}
                            watchSlidesVisibility= {true}
                            modules={[Autoplay, Parallax]}
                        >		
                            {bannerData2.map((d,i)=>(
                                <SwiperSlide  key={i}>
                                    <div className="dz-media">
                                        <img src={d.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}						
                        </Swiper>
							
					</div>
				</div>   
            </div> 
            <div className="swiper-button">
                <div className="swiper-button-prev swiper-button-home-prev" ref={navigationPrevRef}><i className="fas fa-arrow-left"></i></div>
                <div className="swiper-button-next swiper-button-home-next" ref={navigationNextRef}><i className="fas fa-arrow-right"></i></div>
            </div>       
		</>
	)
}
export default Banner5Slider;