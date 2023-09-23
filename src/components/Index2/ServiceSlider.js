import React from "react";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import service1 from './../../assets/images/services/pic1.jpg';
import service2 from './../../assets/images/services/pic2.jpg';
import service3 from './../../assets/images/services/pic3.jpg';




// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";

const serviceBlog = [
    { id: 1, icon: 'flaticon-cogwheel', image: service1, title: 'Çelikhane Makineleri İmalatı ve Montajı', description: 'Firmamız çelik konstrüksiyon imalatı ve montajında uzmandır. Yüksek kalite ve güvenlik standartlarına önem veririz. Müşteri memnuniyeti önceliğimizdir. İşbirliği için bize ulaşın.' },
    { id: 2, icon: 'flaticon-engineer-1', image: service2, title: 'Çelik Konstrüksiyon İmalatı ve Montajı', description: 'Firmamız, özel çelikhane ve haddehane makineleri üretiyor. Kalite, özelleştirme, hızlı teslimat ve müşteri memnuniyeti bizim önceliğimizdir. İletişime geçin, ihtiyaçlarınıza çözüm sunalım.' },
    { id: 3, icon: 'flaticon-robot-arm', image: service3, title: 'Gezer Köprülü Tavan Vinci İmalatı ve Montajı', description: 'Firmamız, Gezer köprülü tavan vincinin imalatı ve montajında uzmandır. Kaliteli, güvenilir ve özelleştirilmiş çözümler sunarız. Güvenlik ve maliyet etkinlik önceliğimizdir. İhtiyacınız varsa bizimle iletişime geçin.' },
    { id: 4, icon: 'flaticon-robot-arm', image: service3, title: 'Damper İmalatı ve Montajı', description: 'Firmamız, hurda damperi üretiminde uzman. Özel ihtiyaçlara yönelik güvenilir ve yüksek kaliteli ekipmanlar sunuyoruz. Müşteri memnuniyeti ve kalite odaklıyız. İhtiyacınıza uygun çözümler için bize güvenebilirsiniz.' }
];


function ServiceSlider() {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const [swiper, setSwiper] = React.useState(null)
    return (
        <>

            <Swiper className="swiper-container service-slider w-100"
                onSwiper={(s) => {
                    console.log("initialize swiper", s);
                    setSwiper(s);
                }}
                speed={1500}
                parallax={true}
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2900,
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}
            >
                {serviceBlog.map((data, index) => (
                    <SwiperSlide key={index} >
                        <div className="content-box overlay-shine aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="dz-media">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="dz-info" data-num={data.id}>
                                <div className="icon-lg m-b20 text-primary">
                                    <i className={data.icon}></i>
                                </div>
                                <h3 className="dz-title" style={{ height: '150px' }}><Link to={"./services"}>{data.title}</Link></h3>
                                <p className="m-b0" style={{ height: '200px' }}>{data.description}</p>
                            </div>
                            <div className="dz-bottom">
                                <Link to={`./services/${data.id}`} className="btn btn-primary d-block" >READ MORE</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}
export default ServiceSlider;