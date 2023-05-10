import React,{useState} from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


//Images
import Slider3 from './../../assets/images/main-slider/slider3.jpg';
import Slider4 from './../../assets/images/main-slider/slider4.jpg';
import Slider5 from './../../assets/images/main-slider/slider5.jpg';



import SwiperCore, {FreeMode, Autoplay, Parallax,Thumbs} from 'swiper';
SwiperCore.use([Parallax,Thumbs, FreeMode,Autoplay ]);


const bannerSliderBlog = [ 
	{ image: Slider3, title:'Market-leading Producer of Sheet Metal Alloy'},
	{ image: Slider4, title:'The Industry That Wins Customers'},
	{ image: Slider5, title:'How To Make More Industry By Doing Less'},
];
const thumbBlog =[
	{ image: Slider3, title:'Market Leading'},
	{ image: Slider4, title:'The Industry That Wins'},
	{ image: Slider5, title:'How To Make More'},
];

function Home3BannerSlider() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<>
			<Swiper className="swiper-container main-swiper3 banner-inner"	
				speed= {1500}
				parallax={true}
				loop={true}
				autoplay = {{
				    delay: 2800,
				}}				
				slidesPerView = {1}
				spaceBetween = {0}
				thumbs={{ swiper: thumbsSwiper }}
				
				//modules={[FreeMode, Autoplay, Parallax,  Thumbs]}
			>
				{bannerSliderBlog.map((item, index)=>(
					<SwiperSlide style={{backgroundImage: 'url('+ item.image +')', backgroundSize: 'cover'}}>
						<div className="banner-content container">
							<div className="row">
								<div className="col-lg-9">
									<h1 className="title" data-swiper-parallax="-500">{item.title}</h1>
									<p data-swiper-parallax="-1000">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<div data-swiper-parallax="-1500">
										<Link to={"./about-us"} className="btn btn-primary btn-border btn-border-white m-r10 m-b10">ABOUT US</Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>								
				))}
			</Swiper>
			<Swiper className="swiper-container slider-thumbs-wraper main-swiper-thumb3"
				onSwiper={setThumbsSwiper}
				spaceBetween= {30}
				slidesPerView= {2}
				freeMode= {true}
				//watchslidesvisibility= {true}
				watchSlidesProgress= {true}
				autoplay= {{
				   delay: 2400,
				}}
				//modules={[FreeMode, Autoplay, Thumbs ]}
				breakpoints = {{
					1280: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					591: {
						slidesPerView: 1,
					},
					320: {
						slidesPerView: 1,
					},
				}}	
			>
				{thumbBlog.map((data, ind)=>(
					<SwiperSlide key={ind}>
						<div className="slider-thumbs">
							<div className="dz-media">
								<img src={data.image} alt="" />
							</div>
							<div className="dz-info">
								<h4 className="title">{data.title}</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
							</div>
						</div>
					</SwiperSlide>
				))}	
			</Swiper>				
		</>
	)
}
export default Home3BannerSlider;