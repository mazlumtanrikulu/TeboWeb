import React, { Component, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
// import WOW from 'wowjs';

//Components
import Header from "./../../layouts/Header";
import Footer from "./../../layouts/Footer";
import VideoPopup from "./../../components/VideoPopup";
import BannerSlider from "./../../components/BannerSlider";
import PortfolioSlider from "./../../components/PortfolioSlider";
import ClientsSlider from "./../../components/ClientsSlider";
import TestimonialSlider from "./../../components/TestimonialSlider";
import TrendsSlider from "./../../components/TrendsSlider";
import ServiceSlider from "./../../components/Index2/ServiceSlider";
import FooterSingUp from "./../../components/FooterSingUp";
import ModalVideo from "react-modal-video";
import ContactUs from "../../components/ContactUs";
//Images
import bg1 from "./../../assets/images/background/bg1.png";
import bg2 from "./../../assets/images/background/bg2.jpg";
import Bg2Png from "./../../assets/images/background/bg2.png";
import bg3 from "./../../assets/images/background/bg3.jpg";
import bg22 from "./../../assets/images/background/bg22.jpg";
import bg7 from "./../../assets/images/background/bg7.jpg";
import bg7png from "./../../assets/images/background/bg7.png";

import about1 from "./../../assets/images/about/about1.jpg";
import about2 from "./../../assets/images/about/about2.jpg";
import about6 from "./../../assets/images/about/about6.jpg";
import about7 from "./../../assets/images/about/about7.jpg";
import about8 from "./../../assets/images/about/about8.jpg";
import about9 from "./../../assets/images/about/about9.jpg";
import about28 from "./../../assets/images/about/about28.jpg";
import about14 from "./../../assets/images/about/about14.jpg";
import bnr2 from "./../../assets/images/bnr/bnr2.jpg";
import pic1 from "./../../assets/images/bnr/pic1.jpg";
import teboHomePhoto from "./../../assets/images/bnr/4453 (2).png";
import teboHomePhoto2 from "./../../assets/images/bnr/20180208_095122.jpg"
import main1 from './../../assets/images/main1.jpg'
import main2 from './../../assets/images/main2.jpg'

import ContactUse from "./../ContactUse";
import { useTranslation } from 'react-i18next';


function Home() {

  const [isOpen, setOpen] = useState(false);
  const [splitEvent, setsplitEvent] = useState(false);
  const { t } = useTranslation();
  return (
    <>


      <div className="page-content bg-white">
        <div
          className="banner-one overlay-black-light"
          style={{ backgroundImage: "url(" + main1 + ")", height: '110vh' }}
        >
          <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            {/* <div className="banner-media ">
              <img src={main2} alt="" />
            </div> */}
            <div className="banner-content">
              {/* <h1 className="m-b20">{t('home.slider.head')}</h1> */}
              <div className="video-bx" style={{ marginBottom: '40px' }}>
                <Link
                  to={"#"}
                  className="popup-youtube play-btn5"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </Link>
                <span className="video-text">
                  {t('home.slider.about1')}
                  <br />
                  {t('home.slider.about2')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <section
          className="content-inner overlay-white-middle"
          style={{ backgroundImage: "url(" + bg2 + ")" }}
          id="about"
        >
          <div className="container">
            <div className="row about-style1 align-items-center">
              <div className="col-lg-6 m-b30">
                <div className="row sp10 about-thumb">
                  <div className="col-sm-6">
                    <div
                      className={
                        splitEvent ? "split-box" : "split-box split-active"
                      }
                    >
                      <div>
                        <img className="m-b30" src={teboHomePhoto2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className={
                        splitEvent ? "split-box" : "split-box split-active"
                      }
                    >
                      <div>
                        <img className="m-b20 aos-item" src={teboHomePhoto} alt="" />
                      </div>
                    </div>
                    <div className="exp-bx aos-item" style={{ marginLeft: '-250px', width: '529px' }}>
                      <div className="exp-head" style={{ width: '200px' }}>
                        <div className="counter-num">
                          <h2 className="counter">
                            {" "}
                            <CountUp end={35} />
                          </h2>
                          <small>+</small>
                        </div>
                        <h6 className="title">{t('home.about.year')}</h6>
                      </div>
                      <div className="exp-info">
                        <ul className="list-check primary">
                          <li>{t('home.about.list.p1')}</li>
                          <li>{t('home.about.list.p2')}</li>
                          <li>{t('home.about.list.p3')}</li>
                          <li>{t('home.about.list.p4')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 m-b30 ">
                <div className="about-content">
                  <div className="section-head style-1">
                    <h2 className="title">{t('home.about.title')}</h2>
                    <p>
                      {t('home.about.content')}
                    </p>
                  </div>
                  <Link to={'/company-definition'} className="btn btn-primary btn-icon">
                    {t('home.about.btn')} <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner-2 service-wrapper-2 overlay-black-dark"
          style={{
            backgroundImage: "url(" + bg7 + ")",
            backgroundSize: "cover",
          }}
          id="services"
        >
          <div className="container">
            <div
              className="section-head style-1 text-center aos-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <h6 className="sub-title text-primary">{t('home.services.title')}</h6>
              <h2 className="title m-b20 text-white">
                {t('home.services.content')}
              </h2>
            </div>
            <div className="btn-center-lr">
              <ServiceSlider />
            </div>
          </div>
        </section>
        <section className="content-inner bg-gray" id="references">
          <div className="container">
            <div className="row about-style8">
              <div
                className="col-lg-6 m-b30 align-self-center aos-item"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="about-content">
                  <div className="section-head style-1">
                    <h5 className="sub-title text-primary">
                      {t('home.studies.title')}
                    </h5>
                    <h3 className="title m-b20">
                      {t('home.studies.subTitle')}
                    </h3>
                    <p>
                      {t('home.studies.content')}{" "}
                    </p>
                  </div>
                  <Link
                    to={"/cases"}
                    className="btn btn-primary btn-border m-r10 m-b10"
                  >
                    {t('home.studies.btn')}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 m-b30">
                <div className="dz-media">
                  <div className="split-box">
                    <img src={about14} alt="" className="aos-item" />
                  </div>
                  <ul
                    className="list-check-circle white aos-item"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1000"
                  >
                    <li>{t('home.studies.list.p1')}</li>
                    <li>{t('home.studies.list.p2')}</li>
                    <li>{t('home.studies.list.p3')}</li>
                    <li>{t('home.studies.list.p4')}</li>
                    <li>{t('home.studies.list.p5')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="content-inner-6">
          <div className="container">
            <ClientsSlider />
          </div>
        </section> */}
        {/* <ContactUs splitEvent={splitEvent} /> */}
        <ContactUse />
        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          url="/landing.mp4"
          onClose={() => setOpen(false)}
        />
      </div>

    </>
  );
}
export default Home;
