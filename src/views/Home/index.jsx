import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
// import WOW from 'wowjs';


//Components 
import Header from './../../layouts/Header';
import Footer from './../../layouts/Footer';
import VideoPopup from './../../components/VideoPopup';
import BannerSlider from './../../components/BannerSlider';
import PortfolioSlider from './../../components/PortfolioSlider';
import ClientsSlider from './../../components/ClientsSlider';
import TestimonialSlider from './../../components/TestimonialSlider';
import TrendsSlider from './../../components/TrendsSlider';


//Images
import bg1 from './../../assets/images/background/bg1.png';
import bg2 from './../../assets/images/background/bg2.jpg';
import Bg2Png from './../../assets/images/background/bg2.png';
import bg3 from './../../assets/images/background/bg3.jpg';
import bg22 from './../../assets/images/background/bg22.jpg';

import about1 from './../../assets/images/about/about1.jpg';
import about2 from './../../assets/images/about/about2.jpg';
import about6 from './../../assets/images/about/about6.jpg';
import about7 from './../../assets/images/about/about7.jpg';
import about8 from './../../assets/images/about/about8.jpg';
import about9 from './../../assets/images/about/about9.jpg';
import bnr2 from './../../assets/images/bnr/bnr2.jpg';
import pic1 from './../../assets/images/bnr/pic1.jpg';


//Array

const counterBlog = [
  { title: 'Delivered Goods', countnum: '528', },
  { title: 'Clients Worldwide', countnum: '444', },
  { title: 'Tons of Goods', countnum: '641', },
];



const infoSection = [
  {
    iconClass: 'far fa-envelope', title: 'Email Address',
    subtitle: <h5 className="m-b0">info@webmail.com<br />info@webmail.com</h5>
  },
  {
    iconClass: 'fas fa-phone', title: 'Phone Number',
    subtitle: <h5 className="m-b0 text-nowrap">+123 456 789 89<br />+123 456 789 89</h5>
  },
  {
    iconClass: 'fas fa-map-marker-alt', title: 'Office Address',
    subtitle: <h5 className="m-b0">Envato Pty Ltd 13/2 Permanent St</h5>
  },
];

// class SocialTrading extends Component {
//   componentDidMount() {
//     new WOW.WOW().init();
//   }
//   render() {
//     return (
//       <Index1 />
//     )
//   }
// }
// export default SocialTrading;



function Home() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="banner-one overlay-black-light" style={{ backgroundImage: 'url(' + bnr2 + ')' }}>
          <div className="banner-inner">
            <div className="banner-media overlay-black-middle">
              <img src={pic1} alt="" />
            </div>
            <div className="banner-content">
              <h1 className="m-b20" >Your Partner for Future Innovation</h1>
              <div className="video-bx">
                <Link to={"#"} className="popup-youtube play-btn5" onClick={() => setOpen(true)} ><i className="fa fa-play" ></i></Link>
                <span className="video-text">about<br />Indiro</span>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="content-inner overlay-white-middle" style={{ backgroundImage: "url(" + bg2 + ")" }} >
          <div className="container">
            <div className="row about-style1 align-items-center">
              <div className="col-lg-6 m-b30">
                <div className="row sp10 about-thumb">
                  <div className="col-sm-6">
                    <div className={splitEvent ? "split-box" : "split-box split-active"}>
                      <div>
                        <img className="m-b30" src={about1} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className={splitEvent ? "split-box" : "split-box split-active"}>
                      <div>
                        <img className="m-b20 aos-item" src={about2} alt="" />
                      </div>
                    </div>
                    <div className="exp-bx aos-item "  >
                      <div className="exp-head">
                        <div className="counter-num">
                          <h2 className="counter"> <CountUp end={50} /></h2>
                          <small>+</small>
                        </div>
                        <h6 className="title">Years of Experience</h6>
                      </div>
                      <div className="exp-info">
                        <ul className="list-check primary">
                          <li>Oil & Gas Engineering</li>
                          <li>Chemical Engineering</li>
                          <li>Information architecture</li>
                          <li>Chemical Engineering</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 m-b30 " >
                <div className="about-content">
                  <div className="section-head style-1">
                    <h2 className="title">Industry United In Seeking Rate </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
                  </div>
                  <Link to={"./about-us"} className="btn btn-primary btn-icon">READ MORE <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-inner-7 overflow-hidden">
          <div className="container-fluid p-lg-0">
            <PortfolioSlider />
          </div>
        </section>
        <section className="content-inner overlay-black-dark" style={{ backgroundImage: "url(" + bg3 + ")" }}>
          <div className="container">
            <div className="row about-style5">
              <div className="col-lg-6 m-b30">
                <div className="about-media aos-item " >
                  <img className="w-100 m-b10" src={about6} alt="" />
                  <div className="video-box overlay-black-middle">
                    <img className="w-100" src={about7} alt="" />
                    <VideoPopup classChange="popup-youtube play-btn1" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 m-b30">
                <div className="about-content">
                  <div className="section-head style-1 aos-item"  >
                    <h3 className="title m-b20 text-white">WE ARE ARE LEADER IN INDUSTRIAL MARKET</h3>
                    <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted By</p>
                  </div>
                  <ul className="list-number-circle">
                    <li data-text="1" className="aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                      <h3 className="text-white">Oil And Lubricant</h3>
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </li>
                    <li data-text="2" className="aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                      <h3 className="text-white">Meterial Engineering</h3>
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </li>
                  </ul>
                  <Link to={"./about-us"} className="btn btn-primary btn-icon">READ MORE <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner" style={{ backgroundImage: "url(" + bg1 + ")", backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 m-b30">
                <div className={splitEvent ? "split-box" : "split-box split-active"}>
                  <div className="about-thumb p-r15 p-md-r0">
                    <img className="w-100 m-b10" src={about8} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 m-b30 align-self-center">
                <div className="about-content">
                  <div className="section-head style-1 aos-item "  >
                    <h2 className="title m-b20">We Are Always Best For Industrial Solution</h2>
                  </div>
                  <div className="row m-b10">
                    <div className="col-md-8 m-b30 aos-item wow fadeInUp" data-wow-delay="0.01s" data-wow-duration="1.3s">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even</p>
                      <p className="m-b30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even There are many variations of passages.</p>
                      <Link to={"./about-us"} className="btn btn-primary btn-icon">READ MORE <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="col-md-4">
                      <ul className="list-square-box">
                        <li className="aos-item wow fadeInUp" data-wow-delay="0.01s" data-wow-duration="1.3s">
                          <h4>Quality</h4>
                          <p>There are many variations of passages </p>
                        </li>
                        <li className="aos-item wow fadeInUp" data-wow-delay="0.01s" data-wow-duration="1.3s">
                          <h4>Reliability</h4>
                          <p>There are many variations of passages </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-6">
          <div className="container">
            <ClientsSlider />
          </div>
        </section>

        <section className="content-inner bg-secondary" style={{ backgroundImage: "url(" + Bg2Png + ")", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row about-style6">
              <div className="col-lg-6 m-b30 align-self-center aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
                <div className="about-content">
                  <div className="section-head style-1">
                    <h3 className="title m-b20 text-white">Think Positive, Think Always Powering Your Business</h3>
                    <p className="text-white">Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor</p>
                  </div>
                  <Link to={"./about-us"} className="btn btn-primary btn-icon">READ MORE <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="col-lg-6 m-b30 align-self-end">
                <div className="about-media aos-item" >
                  <div className="dz-media m-b40">
                    <img className="w-100" src={about9} alt="" />
                    <VideoPopup classChange="popup-youtube play-btn2" />
                  </div>
                  <div className="row m-b10">
                    {counterBlog.map((data, index) => (
                      <div className="col-4" key={index}>
                        <div className="counter-style-2 m-b30 aos-item" >
                          <div className="counter-num text-primary">
                            <h2 className="counter text-primary"><CountUp end={data.countnum} duration={5} /> </h2>
                            <small>m</small>
                          </div>
                          <h5 className="counter-text text-white">{data.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-1 bg-white aos-item" data-aos="fade-in" data-aos-duration="800" data-aos-delay="200">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h5 className="text-primary sub-title">Testimonials</h5>
              <h2 className="title">What Our Clients Say!</h2>
            </div>
            <TestimonialSlider />

          </div>
        </section>
        <section className="dz-section-3 bg-primary">
          <div className="bg-img bgeffect bg-img-fix" style={{ backgroundImage: "url(" + bg22 + ")", backgroundSize: "cover" }}></div>
          <div className="container">
            <div className="text-center">
              <VideoPopup classChange="popup-youtube play-btn1 text-white mx-auto m-b20" />
              <h4 className="text-white">PROMOTION VIDEO</h4>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="blog-wrapper bg-secondary">
              <div className="section-head style-1 text-center">
                <h2 className="title m-b10 text-white">Insight And Trends</h2>
                <p className="text-white">Latest Articles Updated Daily</p>
              </div>

              <TrendsSlider />

              <div className="text-center">
                <Link to={"./blog-details"} className="btn btn-primary btn-icon">VIEW MORE <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 m-b30">
                <div className="section-head style-1 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                  <h5 className="sub-title text-primary">CONTACT US</h5>
                  <h2 className="title m-b20">Get In Touch.</h2>
                  <p>Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor Lorem ipsum dolor</p>
                </div>
                {infoSection.map((item, ind) => (
                  <div className="icon-bx-wraper left style-2 m-b10 aos-item wow fadeInRight" data-wow-delay="0.01s" data-wow-duration="1.3s" key={ind}>
                    <div className="icon-bx-sm radius bg-primary">
                      <Link to={"#"} className="icon-cell text-white">
                        <i className={item.iconClass}></i>
                      </Link>
                    </div>
                    <div className="row align-items-center w-100">
                      <div className="col-sm-6">
                        <h4 className="dz-title mb-sm-0 mb-2">{item.title}</h4>
                      </div>
                      <div className="col-sm-6">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-6 m-b30">
                <div className="map-iframe">
                  <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" className="align-self-stretch radius-sm" style={{ border: '0', width: '100%', minHeight: '100%' }} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  )
}
export default Home;