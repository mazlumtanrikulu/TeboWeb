import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/images/logo.png';
// import logowhite from './../assets/images/logo-white.png';
// import teboLogo from "./../assets/images/tebo-logo.JPG"
import TeboLogo from './../assets/images/TeboLogo.png'


export default function Header() {
    //Sidebar
    const [openToggleBtn, setOpenToggleBtn] = useState(false);
    //Header fixed
    const [headerFix, setheaderFix] = React.useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });

        // Menu open {mestmenu} 
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
        function checkLi(current) {
            //SubMenu.forEach(el => (current !== el) ? el.classList.remove('none') : '');
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
            setTimeout(() => {
                current.classList.toggle('open');
            }, 100);
        }

    }, []);
    return (
        <>
            <header className="site-header mo-left header style-3">

                {/* <div className="top-bar">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="dz-topbar-center">
                                <p className="help-text"><strong>Need Help :</strong>Providing Innovative and Sustainable Solutions, Call (123) 123456789</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <!-- Main Header --> */}
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""} `}>
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-white" style={{ backgroundColor: 'white' }}>
                                <Link to={"/"}><img src={TeboLogo} alt="" /></Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler navicon justify-content-end ${openToggleBtn ? 'open' : 'collapsed'}`}
                                onClick={() => setOpenToggleBtn(!openToggleBtn)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    {/* <div className="search-inhead">
                                        <div className="dz-quik-search On">
                                            <form action="#">
                                                <input name="search" value="" type="text" className="form-control" placeholder="Search" />
                                                <span id="quik-search-remove"><i className="ti-close"></i></span>
                                            </form>
                                        </div>
                                        <Link to={"#"} className="search-link" id="quik-search-btn">
                                            <i className="fas fa-search"></i>
                                        </Link>
                                    </div> */}
                                    <Link to={"/contact-us"} className="btn btn-secondary d-xl-inline-block d-none btn-border btn-border-secondary m-r10 m-b10">CONTACT US</Link>
                                </div>
                            </div>
                            {/* <!-- Extra Nav --> */}

                            <div className={`header-nav navbar-collapse justify-content-start ${openToggleBtn ? ' collapse show' : ' collapse'}`}
                            >
                                <div className="logo-header logo-dark">
                                    <Link to={"./"}><img src={TeboLogo} alt="" /></Link>
                                </div>
                                {/* <ul className="nav navbar-nav navbar navbar-left">
                                    <li><Link to={"./"}><span>Ana Sayfa</span></Link>
                                    </li>
                                    <li className="has-mega-menu"><Link to={"#"}>Pages</Link>
                                        <ul className="mega-menu">
                                            <li><Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={"./about-me"}>About Me</Link></li>
                                                    <li><Link to={"./about-us"}>About Us</Link></li>
                                                    <li><Link to={"./coming-soon"}>Coming Soon</Link></li>
                                                    <li><Link to={'./team'}>Team</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'company-history'}>Company History</Link></li>
                                                    <li><Link to={'contact-us'}>Contact Us</Link></li>
                                                    <li><Link to={'error-404'}>Error 404</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'./gallery-grid-4'}>Gallery Grid 4</Link></li>
                                                    <li><Link to={'./gallery-masonry'}>Gallery Masonry</Link></li>
                                                    <li><Link to={'./help-desk'}>Help Desk</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'./pricing'}>Pricing Table</Link></li>
                                                    <li><Link to={'./privacy-policy'}>Privacy Policy</Link></li>
                                                    <li><Link to={'./services'}>Services</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"#"}><span>Portfolio</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./portfolio'}>Portfolio 1</Link></li>
                                            <li><Link to={'./portfolio-collage'}>Portfolio Collage</Link></li>
                                            <li><Link to={'./portfolio-details'}>Portfolio Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"#"}><span>Shop</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./shop-grid-3'}>Shop Grid 3</Link></li>
                                            <li><Link to={'./product-details'}>Product Details</Link></li>
                                            <li><Link to={'./shop-wishlist'}>Wishlist</Link></li>
                                            <li><Link to={'./shop-checkout'}>Checkout</Link></li>
                                            <li><Link to={'./shop-cart'}>Cart</Link></li>
                                            <li><Link to={'./login'}>Login</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"/"} onClick={ScrollToContactUsHandler}><span>İletişim</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./contact-us'}>Contact Us</Link></li>
                                            
                                        </ul>
                                    </li>
                                </ul> */}
                                {/* <div className="dz-social-icon">
                                    <ul>
                                        <li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                        <li><a className="fab fa-twitter" href="https://twitter.com/?lang=en"></a></li>
                                        <li><a className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
                                        <li><a className="fab fa-instagram" href="https://www.instagram.com/?hl=en"></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    )
}
