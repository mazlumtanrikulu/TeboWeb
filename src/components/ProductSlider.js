import React,{useState} from "react";
import { SRLWrapper , useLightbox} from "simple-react-lightbox";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import thumb1 from './../assets/images/product/item/thumb/item1.jpg';
import thumb2 from './../assets/images/product/item/thumb/item2.jpg';
import thumb3 from './../assets/images/product/item/thumb/item3.jpg';
import thumb4 from './../assets/images/product/item/thumb/item4.jpg';
import thumb5 from './../assets/images/product/item/thumb/item5.jpg';

import item1 from './../assets/images/product/item/item1.jpg';
import item2 from './../assets/images/product/item/item2.jpg';
import item3 from './../assets/images/product/item/item3.jpg';
import item4 from './../assets/images/product/item/item4.jpg';
import item5 from './../assets/images/product/item/item5.jpg';


// import Swiper core and required modules
import SwiperCore, {Autoplay,  Navigation ,Thumbs} from "swiper";

SwiperCore.use([Navigation]);

const productData = [
	{image: thumb1},
	{image: thumb2},
	{image: thumb3},
	{image: thumb4},
	{image: thumb5},
];
const productData2 = [
	{image: item1},
	{image: item2},
	{image: item3},
	{image: item4},
	{image: item5},
];

const options = {
	buttons: {
		showDownloadButton: false,		
	},	
}

function ProductSlider() {
	const { openLightbox, closeLightbox } = useLightbox()	
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)

	const navigationPrevRef2 = React.useRef(null)
	const navigationNextRef2 = React.useRef(null)
	return (
		<>
			<div className="col-3 position-relative">
				<Swiper className="swiper-container thumb-slider sync2"
					//onSwiper={setThumbsSwiper}
					slidesPerView={"auto"}
					slidesPerGroupAuto={true}
					watchSlidesVisibility= {true}
					watchSlidesProgress={true}
					direction={"vertical"}
					spaceBetween= {15}
					loop={true}
					autoplay= {{
						delay: 2500,
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
					breakpoints= {{
						576: {
							spaceBetween: 15
						},
						320: {
							spaceBetween: 15
						}
					}}

				>		
					{productData.map((item,index)=>(
						<SwiperSlide key={index}>
							<div className="dz-media">
								<img src={item.image} alt="" />
							</div>
						</SwiperSlide>
					))}                
					<div className="thumb-slider-navigation">
						<div className="swiper-button-next-thumb" ref={navigationNextRef}></div>
						<div className="swiper-button-prev-thumb" ref={navigationPrevRef}></div>
					</div>				
				</Swiper>
			</div>
			<div className="col-9">
				<SRLWrapper options={options}>
					<Swiper className="swiper-container single-image-slider sync1 lightgallery"	
						thumbs={{ swiper: thumbsSwiper }}
						spaceBetween= {10}	
						navigation={{
							prevEl: navigationPrevRef2.current,
							nextEl: navigationNextRef2.current,
						}}				
						onSwiper={(swiper) => {
							// Delay execution for the refs to be defined
							setTimeout(() => {
							// Override prevEl & nextEl now that refs are defined
							swiper.params.navigation.prevEl = navigationPrevRef2.current
							swiper.params.navigation.nextEl = navigationNextRef2.current

							// Re-init navigation
							swiper.navigation.destroy()
							swiper.navigation.init()
							swiper.navigation.update()
							})
						}} 
						modules={[Navigation , Autoplay, Thumbs]}
					>		
						{productData2.map((item,index)=>(
							<SwiperSlide key={index}>
								<div className="dz-thum-bx">
									<img src={item.image} alt="" />
									<div className="overlay-bx">
										<div className="overlay-icon">
											<span data-exthumbimage={item.image} data-src={item.image} className="view-btn lightimg"
												onClick={() => openLightbox(index)}
											>
												<svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M44.5334 27.7473V32.3718C44.5334 33.3257 43.7424 34.106 42.7755 34.106H34.572V42.199C34.572 43.1528 33.7809 43.9332 32.8141 43.9332H28.1264C27.1595 43.9332 26.3685 43.1528 26.3685 42.199V34.106H18.1649C17.1981 34.106 16.4071 33.3257 16.4071 32.3718V27.7473C16.4071 26.7935 17.1981 26.0131 18.1649 26.0131H26.3685V17.9201C26.3685 16.9663 27.1595 16.1859 28.1264 16.1859H32.8141C33.7809 16.1859 34.572 16.9663 34.572 17.9201V26.0131H42.7755C43.7424 26.0131 44.5334 26.7935 44.5334 27.7473ZM73.9782 68.8913L69.8325 72.9812C68.4555 74.3396 66.2288 74.3396 64.8664 72.9812L50.2466 58.5728C49.5874 57.9225 49.2212 57.0409 49.2212 56.116V53.7604C44.05 57.749 37.5458 60.1191 30.4702 60.1191C13.6384 60.1191 0 46.6646 0 30.0596C0 13.4545 13.6384 0 30.4702 0C47.3021 0 60.9405 13.4545 60.9405 30.0596C60.9405 37.0397 58.538 43.4563 54.4949 48.5578H56.8827C57.8202 48.5578 58.7138 48.9191 59.373 49.5694L73.9782 63.9777C75.3406 65.3362 75.3406 67.5329 73.9782 68.8913ZM50.3931 30.0596C50.3931 19.1919 41.4864 10.4052 30.4702 10.4052C19.4541 10.4052 10.5474 19.1919 10.5474 30.0596C10.5474 40.9273 19.4541 49.7139 30.4702 49.7139C41.4864 49.7139 50.3931 40.9273 50.3931 30.0596Z" fill="white" fill-opacity="0.66"/>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}   
						<div className="swiper-button-prev" ref={navigationPrevRef2}></div>
						<div className="swiper-button-next" ref={navigationNextRef2}></div>										
					</Swiper>
				</SRLWrapper>
			</div>
		</>
	)
}
export default ProductSlider;