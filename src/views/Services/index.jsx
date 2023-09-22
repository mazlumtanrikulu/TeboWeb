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
import { useParams } from 'react-router-dom/cjs/react-router-dom';


const serviceData = [
    { id: 1, image: pic1, title: 'Industrial Construction' },
    { id: 2, image: pic2, title: 'Mechanical Engineering' },
    { id: 3, image: pic3, title: 'Automotive Manufacturing' },
    { id: 4, image: pic1, title: 'Chemical Engineering' },
    { id: 5, image: pic2, title: 'Information Architecture' },
    { id: 6, image: pic3, title: 'Flexible Manufacturing' },
];

function Services() {
    const { service } = useParams()
    return (
        <>

            <div className="page-content bg-white">
                <PageTitle title='Hizmetlerimiz' parentPage='Home' childPage='Pages' />
                {/* <!-- Services --> */}
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row">
                            {serviceData.map((data, ind) => (
                                <div className="col-lg-4 col-md-6" key={ind}>
                                    <div className="content-box2 m-b30">
                                        <div className="dz-info">
                                            <h3 className="title">{data.title}</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p> */}
                                        </div>
                                        <div className="dz-media m-b30">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="dz-bottom">
                                            <Link to={`/services/${service}/${data.id}`} className="btn-link">Daha Detaylı<i className="fas fa-arrow-right"></i></Link>
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