import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//images 
import product1 from './../assets/images/product/item1.jpg';
import product2 from './../assets/images/product/item2.jpg';
import product3 from './../assets/images/product/item3.jpg';
import product4 from './../assets/images/product/item4.jpg';
import product5 from './../assets/images/product/item5.jpg';
import product6 from './../assets/images/product/item6.jpg';
import product7 from './../assets/images/product/item7.jpg';
import product8 from './../assets/images/product/item8.jpg';
import product9 from './../assets/images/product/item9.jpg';


// import Swiper core and required modules
import {Autoplay,  Navigation } from "swiper";

const itemProductBlog = [
    { image:product1, title:'Denim Jeans', price:<h4 className="item-price">$400</h4>,   badge:'Sale', badgeClass:'bg-success'  },
    { image:product2, title:'Outlaw Jacket', 
        price:<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>,    
    },
    { image:product3, title:'Tennis Shorts', price:<h4 className="item-price">$384</h4>,  badge:'Sale', badgeClass:'bg-danger'  },
    { image:product4, title:'Plain Multicolored', 
        price:<h4 className="item-price"><del>$500</del> <span className="text-primary">$299</span></h4>,    
    },
    { image:product5, title:'Cashmere Sweater', price:<h4 className="item-price">$280</h4>,  badge:'Hot', badgeClass:'bg-danger'  },
    { image:product6, title:'Cotton Jacket', price:<h4 className="item-price">$198</h4>,  badge:'Trending', badgeClass:'bg-info'  },

    { image:product7, title:'Merlon Jeans', badge:'New', badgeClass:'bg-danger',
        price:<h4 className="item-price"><del>$850</del> <span className="text-primary">$500</span></h4>,    
    },
    { image:product8, title:'Cotton Polo Shirt', price:<h4 className="item-price">$700</h4>, },

    { image:product9, title:'Short Sleeved Hoodie', badge:'New', badgeClass:'bg-danger',
        price:<h4 className="item-price"><del>$400</del> <span className="text-primary">$200</span></h4>,    
    },
];

export default function RealtedItemSwiper() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper className="swiper-container related-item-swiper"						
				speed= {1500}
				parallax= {true}
				slidesPerView={4}
				spaceBetween= {30}
				loop={false}
				autoplay= {{
				   delay: 3000,
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
                breakpoints= {{
                    1191: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}
				modules={[Navigation , Autoplay]}
			>	
					
				{itemProductBlog.map((item,index)=>(
					<SwiperSlide key={index}>
						<div className="item-box">
                            <div className="item-img">
                                <img src={item.image} alt="" />
                                <span className={`badge ${ item.badgeClass}`}>{item.badge}</span>
                                <div className="item-info-in">
                                    <ul>
                                        <li><Link to={"#"}><span className="material-icons">shopping_cart</span></Link></li>
                                        <li><Link to={"#"}><span className="material-icons">visibility</span></Link></li>
                                        <li><Link to={"#"}><span className="material-icons">favorite_border</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item-info text-center">
                                <h4 className="item-title"><Link to={"./shop-grid-3"}>{item.title}</Link></h4>
                                <ul className="item-review">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fas fa-star-half-alt"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                </ul>
                                {item.price}
                            </div>
                        </div>
					</SwiperSlide>
				))}
                
				
				<div className="swiper-button-next-related" ref={navigationNextRef}></div>
				<div className="swiper-button-prev-related" ref={navigationPrevRef} ></div>
								
			</Swiper>
		</>
	)
}