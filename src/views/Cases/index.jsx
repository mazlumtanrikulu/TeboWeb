import { Link } from 'react-router-dom';
//Layouts
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import PageTitle from '../../layouts/PageTitle';

//Components
// import FooterSingUp from './../components/FooterSingUp';

//images
import pic1 from '../../assets/images/services/pic1.jpg';
import pic2 from '../../assets/images/services/pic2.jpg';
import pic3 from '../../assets/images/services/pic3.jpg';
import { useTranslation } from 'react-i18next';


// const serviceData = [
//     { image: pic1, title: 'Industrial Construction' },
//     { image: pic2, title: 'Mechanical Engineering' },
//     { image: pic3, title: 'Automotive Manufacturing' },
//     { image: pic1, title: 'Chemical Engineering' },
//     { image: pic2, title: 'Information Architecture' },
//     { image: pic3, title: 'Flexible Manufacturing' },
// ];

function Cases() {
    const { t } = useTranslation();
    const serviceData = Object.values(t('referances', { returnObjects: true }))

    return (
        <>

            <div className="page-content bg-white">
                <PageTitle title={t('referance.title')} parentPage={t('home.title')} />
                {/* <!-- Services --> */}
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row">
                            {serviceData.map((data, ind) => (
                                <div className="col-lg-4 col-md-6" key={ind}>
                                    <div className="content-box2 m-b30">
                                        <div className="dz-info">
                                            <h3 className="title">{data.title}</h3>
                                            <p>{data.description}</p>
                                        </div>
                                        <div className="dz-media m-b30" style={{ height: '180px' }}>
                                            <img src={data.image} alt="" height={250} />
                                        </div>
                                        <div className="dz-bottom">
                                            <Link to={`/cases/${ind + 1}`} className="btn-link">Services Detail<i className="fas fa-arrow-right"></i></Link>
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
export default Cases;