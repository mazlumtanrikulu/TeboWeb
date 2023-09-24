import { Link } from 'react-router-dom';
//Layouts
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import PageTitle from '../../layouts/PageTitle';

//Components
// import FooterSingUp from './../components/FooterSingUp';

//images
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useTranslation } from 'react-i18next';

function Services() {
    const { service } = useParams()
    const { t } = useTranslation();
    const d = t(service, { returnObjects: true })
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle title={d.title} parentPage={t('home.title')} childPage={t('home.services.title')} />
                {/* <!-- Services --> */}
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row">
                            {d.items.map((data, ind) => (
                                <div className="col-lg-3 col-md-6" key={ind}>
                                    <div className="content-box2 m-b30">
                                        <div className="dz-info">
                                            <h5 className="title">{data.item.title}</h5>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p> */}
                                        </div>
                                        <div className="dz-media m-b30">
                                            <img src={data.item.image} alt="" />
                                        </div>
                                        <div className="dz-bottom">
                                            <Link to={`/services/${service}/${data.id}`} className="btn-link" >Daha Detaylı<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}
export default Services;