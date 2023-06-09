import { Link } from 'react-router-dom';

//Layouts
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import PageTitle from '../../layouts/PageTitle';

//images
import media1 from '../../assets/images/media/media1.png';
import media2 from '../../assets/images/media/media2.png';
import media3 from '../../assets/images/media/media3.png';
import pic4 from '../../assets/images/pic4.png';

const aboutSection = [
    { image: media1, title: 'indiro Was Founded' },
    { image: media2, title: 'Start with a Small Services' },
    { image: media3, title: 'Indiro is Growing' },
];

export default function CompanyHistory() {
    return (
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle title='Company History' parentPage='Home' childPage='Pages' />
                <section className="content-inner">
                    <div className="container">
                        {/* <div className="row m-b30">
                            {aboutSection.map((item, ind) => (
                                <div className="col-md-4 m-b30" key={ind}>
                                    <div className="dz-media-list d-flex align-items-center">
                                        <img src={item.image} alt="media image" />
                                        <div className="ms-3">
                                            <span>September 2011</span>
                                            <Link to={"#"}><h4>{item.title}</h4></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="m-b30 align-self-center">
                                    <div className="about-content">
                                        <div className="section-head style-1">
                                            <h3 className="title m-b20">Hakkımızda</h3>
                                            <p>Firmamız 1993 yılında Sevgili babamız Behsat AŞĞIN tarafından İskenderun Organize Sanayi bölgesinde kurulmuştur.
</p>
                                        </div>
                                        <p>Kurulduğu ilk yıllarda çelik fabrikalarına yedek parça üreten, bunların tamiratı ve bakımını yapan firmamız, bölgemizdeki çelik üretim kapasitesindeki genişlemeye paralel olarak kapasitesini ve yeterliliğini büyüterek ilerlemiştir.
</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 m-b30">
                                <div className="worker">
                                    <img src={pic4} alt="work" />
                                </div>
                            </div>
                            <p className="m-b30"> Halen İskenderun Organize sanayi bölgesinde faaliyet gösteren firmamız 6000m² kapalı alanı olan atölyesinde Çelik konstrüksiyon imalat ve montajı, Çelikhane ve Haddehane makine ve yedek imalatları, Gezer köprülü tavan vinci imalat ve montajı, Hurda damperi imalatları, Endüstriyel boru imalatları, Sülo ve Bunker imalatları vs. alanlarında faaliyet göstermektedir.
                            </p>
                        </div>
                        <div className="m-b30">
                            <Link to={'/company-definition/gallery'} className="btn btn-primary btn-border m-r10 m-b10">Gallery</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}