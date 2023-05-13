import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import VideoPopup from './../components/VideoPopup'

//images
import bg2 from './../assets/images/background/bg2.png';
// import logowhite from './../assets/images/logo-white.png';
import teboLogo from "./../assets/images/tebo-logo.JPG"
import about23 from './../assets/images/about/about23.jpg';

function Footer() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		// emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		//   .then((result) => {
		// 	  console.log(result.text);
		//   }, (error) => {
		// 	  console.log(error.text);
		//   });
		// e.target.reset()
	};
	return (
		<>
			<footer className="site-footer style-2" id="footer">
				<div className="footer-top" style={{ backgroundImage: "url(" + bg2 + ")" }}>
					<div className="container">
						<div className="row m-b40 m-md-b10">
							<div className="col-xl-3 col-lg-3 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
								<div className="widget widget_about">
									<div className="footer-logo logo-white">
										<Link to={"./"}><img src={teboLogo} alt="" /></Link>
									</div>
									<p>Our goal is to offer broad capabilities, competitive pricing, exceptional quality and outstanding service to each and every customer.</p>
									<Link to={"./about-us"} className="btn btn-primary btn-icon m-r10 m-b10" >READ MORE <i className="fas fa-arrow-right"></i></Link>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
								<div className="widget">
									<h4 className="footer-title">Quick Contact</h4>
									<p>Our goal is to offer broad capabilities, competitive pricing, exception</p>
									<div className="call-box2 m-b20"><span><i className="fas fa-phone"></i></span>(012) 345678910</div>
									<p>1099 Springland Ave, Michigan City, IN 46360, USA</p>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-sm-4 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
								<div className="widget widget_services">
									<h4 className="footer-title">Company Menu</h4>
									<ul>
										<li><Link to={"./about-us"}>About Us</Link></li>
										<li><Link to={"./team"}>Meet Our Team</Link></li>
										<li><Link to={"./blog-grid"}>News &Media</Link></li>
										<li><Link to={"./services"}>Services</Link></li>
										<li><Link to={"./contact-us"}>Contact Us</Link></li>
										<li><Link to={"./pricing"}>Pricing</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-sm-8 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
								<div className="widget">
									<h4 className="footer-title">Our Newsletter</h4>
									<form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
										<p>Join our list and get 15% off your first purchase!</p>
										<div className="ft-subscribe">
											<div className="dzSubscribeMsg text-white"></div>
											<div className="ft-row m-b0">
												<input name="dzEmail" required="required" type="email" placeholder="Enter Email Address" className="form-control" />
												<button name="submit" value="Submit" type="submit" className="btn"><i className="fas fa-arrow-right"></i></button>
											</div>
										</div>
										<span className="text-danger">* Don’t worry we don’t spam</span>
									</form>
								</div>
							</div>
						</div>
						<div className="footer-info aos-item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
							<div className="row">
								<div className="col-lg-4">
									<div className="dz-media">
										<img src={about23} alt="" />
										<VideoPopup classChange="popup-youtube play-btn1" />
									</div>
								</div>
								<div className="col-lg-8">
									<div className="info-right">
										<ul className="service-info">
											<li>
												<h5 className="title">Email Us</h5>
												<p>info@example.com</p>
											</li>
											<li>
												<h5 className="title">Opening Hours</h5>
												<p>Mon-Fri: 8am- 7pm</p>
											</li>
										</ul>
										<Link to={"#"} className="btn btn-white sechedule-btn">SCHEDULE AN APPOINTMENT</Link>
									</div>
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
								<span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank" className="text-primary" rel="noreferrer">DexignZone</a>. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
export default Footer;