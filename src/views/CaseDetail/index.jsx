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

export default function CaseDetail() {
    return (
        <>

            <div className="page-content bg-white">
                <PageTitle title='Service Details' parentPage='Home' childPage='Service' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="m-b30 align-self-center">
                                    <div className="about-content">
                                        <div className="section-head style-1">
                                            <h3 className="title m-b20">Indiro Was Founded</h3>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'self-start', marginBottom: '20px' }}>
                                            <img src={pic4} alt="work" width={150} />
                                            <div>
                                                <h6>Title some title some title etc.</h6>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'self-start', marginBottom: '20px' }}>
                                            <img src={pic4} alt="work" width={150} />
                                            <div>
                                                <h6>Title some title some title etc.</h6>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'self-start', marginBottom: '20px' }}>
                                            <img src={pic4} alt="work" width={150} />
                                            <div>
                                                <h6>Title some title some title etc.</h6>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'self-start', marginBottom: '20px' }}>
                                            <img src={pic4} alt="work" width={150} />
                                            <div>
                                                <h6>Title some title some title etc.</h6>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                                <p>content content content</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 m-b30">
                                <div className="worker">
                                    <img src={pic4} alt="work" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}