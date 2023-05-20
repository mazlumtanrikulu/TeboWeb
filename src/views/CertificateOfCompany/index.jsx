import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';

//Layouts
import Header from '../../layouts/CommanHeader';
import Footer from '../../layouts/Footer';
import PageTitle from '../../layouts/PageTitle';

//Components
import BlogGridSlider from '../../components/BlogGridSlider';
import BlogSideNavLink from '../../components/BlogSideNavLink';
import SidebarSection from '../../components/SidebarSection';
import FooterSingUp from '../../components/FooterSingUp';

//images
import gride1 from '../../assets/images/blog/blog-grid/pic1.jpg';
import gride2 from '../../assets/images/blog/blog-grid/pic2.jpg';
import gride6 from '../../assets/images/blog/blog-grid/pic6.jpg';
import gride7 from '../../assets/images/blog/blog-grid/pic7.jpg';
import gride8 from '../../assets/images/blog/blog-grid/pic8.jpg';

const ListBar = ({image, title})=>{
    return(
        <>
            <div className="dz-card style-1 blog-half shadow m-b30">
                <div className="dz-media">
                    <Link to={"./blog-details"}><img src={image} alt="" /></Link>
                </div>
                <div className="dz-info">
                    <div className="dz-meta">
                        <ul>
                            <li className="post-date">August 30, 2019</li>
                        </ul>
                    </div>
                    <h3 className="dz-title"><Link to={"./blog-details"}>{title}</Link></h3>
                    <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                    
                </div>
            </div>
        </>
    )
}


function BlogListSidebar(){
	const [isOpen, setOpen] = useState(false)
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Blog List Sidebar' parentPage='Home' childPage='Blog' />
                           
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b40">
                                      
                                <ListBar  image={gride1} title='Think Positive, Think Always Powering Your Business' />
                                <div className="dz-card style-1 blog-half shadow m-b30">
                                    <div className="dz-media video-bx style-2 h-auto">
                                        <Link to={"./blog-details"}><img src={gride2} alt="" /></Link>
                                        <div className="video-btn sm">                                           
											<Link to={"#"} className="popup-youtube" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
                                        </div>
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">August 30, 2019</li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title"><Link to={"./blog-details"}>SuperEasy Ways To Learn Everything About Industry</Link></h3>
                                        <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                                        
                                    </div>
                                </div>  
                                <div className="dz-card style-1 blog-half shadow m-b30">
                                    <BlogGridSlider />  
                                </div>    
                                <ListBar  image={gride6} title='Does Industry Sometimes Make You Feel Stupid?' />
                                <ListBar  image={gride8} title="Here's A Quick Way To Solve A Problem with Industry" />
                                <ListBar  image={gride7} title='The Next 3 Things To Immediately Do About Industry' />
                                <nav aria-label="Blog Pagination">
                                    <BlogSideNavLink />
                                </nav>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Blog large Side bar  */}
                                <SidebarSection /> 
                            </div>
                        </div>
                    </div>
                </section>                
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>				
				<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
            </div>
            <Footer />
        </>
    )
}
export default BlogListSidebar;