import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//images
import logowhite from './../assets/images/logo-white.png';
import logo from './../assets/images/logo.png';






import {ComponentsNav} from './HeaderMenuList';

function Header(){
	
	const [openList, setOpenList] = useState(false);
	const [openList2, setOpenList2] = useState(false);
	const [openList3, setOpenList3] = useState(false);
	const [openList4, setOpenList4] = useState(false);
	const [openList5, setOpenList5] = useState(false);
	//const [subopen, setSubopen] = useState(false);
	
	
	
	 /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 
	
	/* for open menu bar */
	const [sidebarOpen, setSidebarOpen] = useState(false);
	useEffect(() => {
		var mainMenu = document.getElementById('OpenMenu'); 
		if(mainMenu){
			if(sidebarOpen){
				mainMenu.classList.add('show');
			}else{
				mainMenu.classList.remove('show');
			}
		}	
		
	});
	
	
	
	
	
	
	/* useEffect(()=>{
		
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a'));
		
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function(e) { checkLi(this) });
        }
        function checkLi(current) {	
			
		    navUl.forEach(el =>  console.log(el) );
			setTimeout(() => {
				current.classList.toggle('dz-open');
				current.nextElementSibling.classList.toggle('d-none');					
			}, 100);		
        }
	});
	
	
	
	function slideUp(el) {
		var elem = document.getElementById(el);
		elem.style.transition = "all 2s ease-in-out";
		elem.style.height = "0px";
	}
	function slideDown(el) {
		
		var elem = document.getElementById(el);
		elem.style.transition = "all 2s ease-in-out";
		elem.style.height = "400px";
	}
	


	
	
	document.querySelectorAll('.sub-menu').forEach(function(el) {
		el.classList.add('d-none');
		//el.addEventListener('click', function () { checkLi(this) })
	}) 	*/
	
	
	
	return(
		<header className="site-header mo-left header-transparent header-sidenav-1">
			{/* <!-- main header --> */}
			<div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
				<div className="main-bar clearfix">
					<div className="container-fluid">
						<div className="header-content-bx">
							{/*  website logo */}
							<div className="logo-header logo-white">
								<Link to={"./"}>
									{ sidebarOpen === false ?
										(
											<img src={logowhite} alt=""/>
										)
										:
										(
											<img src={logo} alt=""/>
										)
									}
								</Link>
							</div>
							<div className="service-list">
								<ul>
									<li>
										<i className="la la-phone"></i>
										<span>Make A Call</span>
										<h4 className="title">+1800-001-658</h4>
									</li>
									<li>
										<i className="la la-clock-o"></i>
										<span>Email Address</span>
										<h4 className="title">Website@info.com</h4>
									</li>
									<li>
										<i className="la la-map"></i>
										<span>Location</span>
										<h4 className="title">Envato Pty Ltd 13/2</h4>
									</li>
								</ul>
							</div>
							<div className="extra-nav">
								<ul>
									<li className="search-btn">
										<Link to={"#"} className={`menu-btn ${sidebarOpen ? 'open' : '' }`} onClick={()=>setSidebarOpen(!sidebarOpen)}>
											<span></span>
											<span></span>
											<span></span>
										</Link>
									</li>
								</ul>
							</div>
							<div className="header-nav navbar-collapse full-sidenav navbar"  id="OpenMenu">
								<div className="flsbg">
									<span className="bg-wrap">
										<span></span>
									</span>
									<span className="bg-wrap">
										<span></span>
									</span>
									<span className="bg-wrap">
										<span></span>
									</span>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="logo-header logo-dark">
												<Link to={"./"}><img src={logo} alt="" /></Link>
											</div>
											
											<ul className="nav navbar-nav">	   
												<li className="sub-menu-down" >
													<a className={` ${ openList ? '' : 'dz-open'}`} onClick={() =>setOpenList(!openList)}><span>Home</span></a>								
													<ul  className={`sub-menu ${openList ? 'd-block' : 'd-none'}`}>
														<li><Link to={"./"}>Home 1</Link></li>
														<li><Link to={"./index-2"}>Home 2</Link></li>
														<li><Link to={"./index-3"}>Home 3</Link></li>
														<li><Link to={"./index-4"}>Home 4</Link></li>
														<li><Link to={"./index-5"}>Home 5</Link></li>
													</ul>
												</li>
												<li className="sub-menu-down">
													<a className={` ${ openList2 ? '' : 'dz-open'}`} onClick={() =>setOpenList2(!openList2)}><span>Pages</span></a>						
													<ul  className={`sub-menu ${openList2 ? '' : 'd-none'}`}>
														<li><Link to={"./about-me"}>About Me</Link></li>														
														<li><Link to={"./about-us"}>About Us</Link></li>
														<li><Link to={"./coming-soon"}>Coming Soon</Link></li>
														<li><Link to={"./company-history"}>Company History</Link></li>														
														<li><Link to={"./contact-us"}>Contact Us</Link></li>
														<li><Link to={"./error-404"}>Error 404</Link></li>
														<li><Link to={'./gallery-grid-4'}>Gallery Grid 4</Link></li>
														<li><Link to={'./gallery-masonry'}>Gallery Masonry</Link></li>														
														<li><Link to={"./help-desk"}>Help Desk</Link></li>
														<li><Link to={"./pricing"}>Pricing Table</Link></li>
														<li><Link to={"./privacy-policy"}>Privacy Policy</Link></li>
														<li><Link to={"./services"}>Services</Link></li>
														<li><Link to={"./team"}>Team</Link></li>
														
													</ul>
												</li>
												
												{/*<li className="sub-menu-down">
													<a className={` ${ openList3 ? '' : 'dz-open'}`} onClick={() =>setOpenList3(!openList3)}><span>Portfolio</span></a>						
													<ul  className={`sub-menu ${openList3 ? '' : 'd-none'}`}>													
														<li><Link to={"./portfolio"}>Portfolio 1</Link></li>
														<li><Link to={'./portfolio-collage'}>Portfolio Collage</Link></li>  														
														<li><Link to={"./portfolio-details"}>Portfolio Details</Link></li>														
													</ul>
												</li>
												<li className="sub-menu-down">
													<a className={` ${ openList4 ? '' : 'dz-open'}`} onClick={() =>setOpenList4(!openList4)}><span>Shop</span></a>						
													<ul  className={`sub-menu ${openList4 ? '' : 'd-none'}`}>													
														<li><Link to={"./shop-grid-3"}>Shop Grid 3</Link></li>														
														<li><Link to={"./product-details"}>Product Details</Link></li>
														<li><Link to={"./shop-wishlist"}>Wishlist</Link></li>
														<li><Link to={"./shop-checkout"}>Checkout</Link></li>
														<li><Link to={"./shop-cart"}>Cart</Link></li>
														<li><Link to={"./login"}>Login</Link></li>
													</ul>
												</li>
												<li className="sub-menu-down">
													<a className={` ${ openList5 ? '' : 'dz-open'}`} onClick={() =>setOpenList5(!openList5)}><span>Blog</span></a>						
													<ul  className={`sub-menu ${openList5 ? '' : 'd-none'}`}>													
													
														<li><Link to={'./blog-grid'}>Blog Grid</Link></li>
														<li><Link to={'./blog-large-right-sidebar'}>Blog Right Sidebar</Link></li>
														<li><Link to={'./blog-list-sidebar'}>Blog List Sidebar</Link></li>
														<li><Link to={'./blog-list-left-sidebar'}>Blog List Left Sidebar</Link></li>
														<li><Link to={'./blog-details-post-wide'}>Post Wide View</Link></li>
														<li><Link to={'./blog-details'}>Blog Details</Link></li>
													</ul>
												</li>	 */	}										
											</ul>	 
										</div>	
										<div className="col-lg-6">
											<div className="service-list">
												<ul>
													<li>
														<i className="la la-phone"></i>
														<span>Make A Call</span>
														<h4 className="title">+1800-001-658</h4>
													</li>
													<li>
														<i className="far fa-envelope"></i>
														<span>Email Address</span>
														<h4 className="title">Website@info.com</h4>
													</li>
													<li>
														<i className="la la-map"></i>
														<span>Location</span>
														<h4 className="title">Envato Pty Ltd 13/2 Permanent <br /> St Melbourne </h4>
													</li>
												</ul>
											</div>
											<div className="social-menu">
												<ul>
													<li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
													<li><a className="fab fa-twitter" href="https://twitter.com/?lang=en"></a></li>
													<li><a className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
													<li><a className="fab fa-instagram" href="https://www.instagram.com/?hl=en"></a></li>
												</ul>
											</div>
										</div>

											
									</div>	
								</div>	
							</div>	
						</div>	
					</div>	
				</div>	
			</div>	
			
		</header>	
	)
} 
export default Header;