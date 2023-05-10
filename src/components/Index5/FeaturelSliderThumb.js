import React,{useState} from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import pic15 from './../../assets/images/services/pic15.jpg';
import pic16 from './../../assets/images/services/pic16.jpg';


// import Swiper core and required modules

import SwiperCore, {Navigation, FreeMode, Autoplay, Parallax,Thumbs, EffectFade } from 'swiper';
SwiperCore.use([Parallax,Thumbs, FreeMode,Autoplay, Navigation, EffectFade  ]);

const FeatureData = [
	{title: 'Company' },
	{title: 'Company2'},
];

const FeatureData2 = [
    {image: pic15 },
	{image: pic16},
];


function FeaturelSliderThumb() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
            <div className="row">
				<div className="col-lg-7 m-t40 m-b30 m-md-t0 aos-item" >
                    <Swiper className="swiper-container feature-swiper-thumb"
                        onSwiper={setThumbsSwiper}						
                        speed= {1500}
                        parallax= {true}
                        slidesPerView={1}
                        spaceBetween= {0}
                        loop={false}
                        watchSlidesProgress= {true}
                        autoplay= {{
                            delay: 2900,
                        }}	
                        modules={[Navigation , Autoplay, Parallax]}
                    >	
                            
                        {FeatureData.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <div className="section-head style-1">
										<h2 className="title text-white m-b20" data-swiper-parallax="-500">We Are Always Best For Industrial Solution</h2>
										<p className="text-white" data-swiper-parallax="-1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established </p>
									</div>
									<ul className="list-check-circle info-desc primary m-b40" >
										<li data-swiper-parallax="-1200">{item.title}:<span>Ethan Hunt</span></li>
										<li data-swiper-parallax="-1300">Completion:<span>February 5th, 2017</span></li>
										<li data-swiper-parallax="-1400">Project Type:<span>Villa, Residence</span></li>
										<li data-swiper-parallax="-1500">Architects:<span>Ventro</span></li>
									</ul>
									<Link to={"./services"} data-swiper-parallax="-2000" className="btn btn-primary btn-border btn-border-white m-r10 m-b10">READ MORE</Link>
                            </SwiperSlide>
                        ))}			
                    </Swiper>
                </div>
                <div className="col-lg-5 m-b30">
						<div className="border-primary btn-bottom-left feature-slider-box border-top-5 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
							<Swiper className="swiper-container feature-swiper"
                                speed= {1500}
                                effect={"fade"}
                                loop={false}
                                parallax= {true}
                                autoplay= {{
                                    delay: 2650,
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Navigation , Autoplay, Parallax, Thumbs, EffectFade ]}
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
                                {FeatureData2.map((d,i)=>(
                                    <SwiperSlide  key={i}>
                                        <img src={d.image} alt="" />
                                    </SwiperSlide>
                                ))}						
							</Swiper>
							<div className="swiper-button">
								<div className="btn-prev swiper-button-prev-feature" ref={navigationPrevRef} ><i className="las la-angle-left"></i></div>
								<div className="btn-next swiper-button-next-feature"  ref={navigationNextRef}><i className="las la-angle-right"></i></div>
							</div>
						</div>
					</div>
            </div>        
		</>
	)
}
export default FeaturelSliderThumb;