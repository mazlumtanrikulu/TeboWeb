import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Collapse from 'react-bootstrap/Collapse';
import {MenuListArray2} from './MenuListArray2';

//Images
import Logowhite from './../assets/images/logo-white.png';
import Logo from './../assets/images/logo.png';

function CommanHeader(){
	
	//Sidebar
	const [openToggleBtn,setOpenToggleBtn] = useState(false);
	
    /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 
	
	// Menu dropdown list 
	const [active , setActive] = useState('Home')
    const handleMenuActive = status => {
		setActive(status)
        if(active === status){
			setActive('');
		}
    }
	// Menu dropdown list End
	
	
    return(
	
        <>
            <header className="site-header mo-left header-transparent style-1">
                {/* <!-- Top Bar --> */}
                <div className="top-bar text-white">
                    <div className="container">
                        <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
                            <div className="dz-topbar-left">
                                <p>Mon 8am - 7pm    -   Sunday 10am - 4pm</p>
                            </div>
                            <div className="dz-topbar-right">
                                <ul>
                                    <li><i className="fas fa-phone-alt"></i> Phone line:  (123) 456-7891</li>
                                    <li><i className="fas fa-envelope"></i> info@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Main Header --> */}
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion">
                                <Link to={'./'}><img src={Logowhite} alt="" /></Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button className={`navbar-toggler navicon justify-content-start ${openToggleBtn ? 'open' : 'collapsed' }`}
								type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
								onClick={()=>setOpenToggleBtn(!openToggleBtn)}
							>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link to={'contact-us'} className="btn btn-primary btn-border d-sm-inline-flex d-none white-border">CONTACT US</Link>
                                </div>
                            </div>
                            {/* <!-- Extra Nav --> */}
                            
                            <div className={`header-nav navbar-collapse justify-content-start ${openToggleBtn ? ' collapse show' : ' collapse'}`}>
                                <div className="logo-header">
                                    <Link to={'#'}><img src={Logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">	
									{MenuListArray2.map((data,index) => {	
										var menuClass = data.classsChange;									
										return(
											<li key={index}
												className={`${menuClass} ${ active === data.title ? 'open' : ''}`}
												onClick={() => handleMenuActive(data.title)}
											>
												<Link to={"#"} >
													<span>{data.title}</span>
												</Link>	
												<Collapse in={active === data.title ? true :false}>
													<ul className={`${menuClass === "sub-menu-down" ? "sub-menu" : menuClass ==="has-mega-menu" ? "mega-menu" :""}`}>
														{data.content && data.content.map((data,index) => {
															return(
																<>
																	<li key={index}>
																		<Link to={data.to}>{data.title}</Link>
																		{menuClass === "has-mega-menu" &&
																			<ul>
																				{data.content&&data.content.map((data,index) => {
																					return(
																						<li key={index}><Link to={data.to}>{data.title}</Link></li>
																					)
																				})}
																			</ul>
																		}
																	</li>
																</>	
															)
														})}														
													</ul>
												</Collapse>
											</li>
										)
									})}
								
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
												<i className="fab fa-facebook-f"></i>	
											</a>
										</li>
										<li><a target="_blank" rel="noreferrer"  href="https://twitter.com/?lang=en">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li><a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/">
												<i className="fab fa-linkedin-in"></i>	
											</a>
										</li>
										<li><a target="_blank" rel="noreferrer"  href="https://www.instagram.com/?hl=en">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
                                    </ul>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    )
}
export default CommanHeader;