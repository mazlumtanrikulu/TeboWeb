import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import VideoPopup from './../components/VideoPopup'

//images
import bg2 from './../assets/images/background/bg2.png';
// import logowhite from './../assets/images/logo-white.png';
import teboLogo from "./../assets/images/tebo-logo.JPG"
import about23 from './../assets/images/about/about23.jpg';
import TeboLogo from './../assets/images/TeboLogo.png'
import { useTranslation } from 'react-i18next';

function Footer({ ref }) {
	const { t } = useTranslation();
	return (
		<>
			<footer ref={ref} className="site-footer style-2" id="footer">
				<div className="footer-top" style={{ backgroundImage: "url(" + bg2 + ")" }}>
					<div className="container">
						<div className="row m-b40 m-md-b10">
							<div className="col-xl-3 col-lg-3 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
								<div className="widget widget_about">
									<div className="footer-logo logo-white">
										<Link to={"./"}><img src={TeboLogo} alt="" /></Link>
									</div>
									<p>{t('footer.content')}</p>
									{/* <Link to={"./about-us"} className="btn btn-primary btn-icon m-r10 m-b10" >READ MORE <i className="fas fa-arrow-right"></i></Link> */}
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
								<div className="widget">
									<h4 className="footer-title">{t('footer.title')}</h4>
									<p>{t('home.contact_us.info.email.content')}</p>
									<div className="call-box2 m-b20"><span><i className="fas fa-phone"></i></span>{t('home.contact_us.info.phone.content')}</div>
									<p>{t('home.contact_us.info.address.content')}</p>
								</div>
							</div>
						</div>

					</div>
				</div>
				{/*  footer bottom part  */}
				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12 text-center">
								<span className="copyright-text">Copyright © 2023 TEBO. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
export default Footer;