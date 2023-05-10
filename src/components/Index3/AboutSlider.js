import React,{useState} from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import bg10 from './../../assets/images/background/bg10.jpg';
import bg11 from './../../assets/images/background/bg11.jpg';
import bg12 from './../../assets/images/background/bg12.jpg';



//import { EffectFade, Autoplay , Parallax, Pagination} from "swiper";


import SwiperCore, {EffectFade, Autoplay, FreeMode, Parallax,Thumbs, Pagination} from 'swiper';
SwiperCore.use([Parallax,Thumbs, FreeMode,Autoplay, Pagination ]);


const aboutBlog = [
	{title: 'About Our Agency',  datatitle: 'Green technologies',  },
	{title: 'About Our History', datatitle: 'Chemical Researching'	},
	{title: 'About Our Agency',  datatitle: 'Automotive manufacturing'	},
];

const aboutbgBlog = [
	{image: bg10},
	{image: bg11},
	{image: bg12},
];

export default function AboutSlider() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	//const [paginationEl, paginationRef] = useRef();
	const paginationRef = React.useRef(null)
    //var menuTtemNum[index] = index+1;
    /* const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };  */
	
	return (
		<>
			
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-8">
						<Swiper className="swiper-container about-main-slider about-swiper "						
							speed= {1500}
							parallax= {true}
							spaceBetween= {0}
							loop={false}                
							//watchSlidesProgress= {true}
							pagination={{
								//el: paginationRef.current
								el: '.swiper-pagination-about',
								clickable: true,
								renderBullet: function (index, className) {									
								  return '<div class="' + className + '">'+ (aboutBlog[index].datatitle) +'<span> 0'+ (index + 1) +'</span>' + '</div>';
								},
							}}
							autoplay= {{
							   delay: 2850,
							}}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[ Autoplay, Pagination, Parallax ]}
							
						>	
							{aboutBlog.map((data, index)=>(
								<SwiperSlide className="swiper-slide" key={index}>
									<div className="section-head style-1">
										<h6 className="sub-title text-primary"  data-swiper-parallax="-500">{data.title}</h6>
										<h2 className="title m-b20 text-white"  data-swiper-parallax="-1000">Building trust Takes a leap of Faith</h2>
										<p className="text-white" data-swiper-parallax="-1500">Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor Lorem ipsum dolor sit am adipi we help </p>
									</div>
									<Link to={"./about-us"}  data-swiper-parallax="-2000" className="btn btn-primary btn-border-white btn-border m-r10 m-b10">ABOUT US</Link>
								</SwiperSlide>
							))}	
						</Swiper>
					</div>
				</div>
			</div>
			
			<div ref={paginationRef} className="swiper-pagination-about about-pagination swiper-pagination-clickable swiper-pagination-bullets" ></div>
					
			<Swiper className="swiper-container about-bg-slider bg-about-slider"
				onSwiper={setThumbsSwiper}
				spaceBetween= {0}
				slidesPerView= {1}
				loop={false}
				speed={1500}
				freeMode={true}
				effect={"fade"}
				
				watchSlidesProgress= {true}
				autoplay={{
					delay: 2800,
				}}
				modules={[ EffectFade, Autoplay,Pagination]}
			>
				{aboutbgBlog.map((data, index)=>(
					<SwiperSlide key={index}>
						<div className="dz-media">
							<img src={data.image} alt="" />
						</div>
					</SwiperSlide>
				))}				
			</Swiper>
						
		</>
	)
}