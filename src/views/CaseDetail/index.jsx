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

export default function CaseDetail() {
    return (
        <>
        
            <div className="page-content bg-white">
                <PageTitle title='Service Details' parentPage='Home' childPage='Service' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row m-b30">
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
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="m-b30 align-self-center">
                                    <div className="about-content">
                                        <div className="section-head style-1">
                                            <h3 className="title m-b20">Indiro Was Founded</h3>
                                            <p>Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor sed do consulting firms Et leggings across </p>
                                        </div>
                                        <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 m-b30">
                                <div className="worker">
                                    <img src={pic4} alt="work" />
                                </div>
                            </div>
                            <p className="m-b30">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam 		processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                            </p>
                        </div>
                        <div className="m-b30">
                            {/* <Link to={'/company-definiton'} className="btn btn-primary btn-border m-r10 m-b10">Gallery</Link> */}
                        </div>
                    </div>
                </section>
            </div>
           
        </>
    )
}