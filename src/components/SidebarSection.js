import React from 'react';
import {Link} from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";

import small1  from './../assets/images/gallery/small/pic1.jpg';
import small2  from './../assets/images/gallery/small/pic2.jpg';
import small3  from './../assets/images/gallery/small/pic3.jpg';
import small4  from './../assets/images/gallery/small/pic4.jpg';
import small5  from './../assets/images/gallery/small/pic5.jpg';
import small6  from './../assets/images/gallery/small/pic6.jpg';

import blog1  from './../assets/images/blog/recent-blog/pic1.jpg';
import blog2  from './../assets/images/blog/recent-blog/pic2.jpg';
import blog3  from './../assets/images/blog/recent-blog/pic3.jpg';

const galleryThum = [
    {image: small1 },
    {image: small2 },
    {image: small3 },
    {image: small4 },
    {image: small5 },
    {image: small6 },
];

const widgetPost=[
    {image: blog1, title:'Aliqua sodales vestibulum risus nterdum malesuad', date:'7 March, 2022' },
    {image: blog2, title:'How To Make Money From The agency Phenomenon', date:'6 March, 2022' },
    {image: blog3, title:'The 8 Biggest Agency Mistakes You Can Easily', date:'5 March, 2022' },
    
];

export default function SidebarSection(){
    return(
        <>
            <aside className="side-bar sticky-top right">
                <div className="widget style-1">
                    <div className="widget-title">
                        <h4 className="title">Search</h4>
                    </div>
                    <div className="search-bx">
                        <form role="search" method="post">
                            <div className="input-group">
                                <input name="text" className="form-control" placeholder="Search Here..." type="text" />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3"></i></button>
                                </span> 
                            </div>
                        </form>
                    </div>
                </div>
                <div className="widget style-1 widget_categories">
                    <div className="widget-title">
                        <h4 className="title">Category</h4>
                    </div>
                    <ul>
                        <li className="cat-item"><Link to={"#"}>Software</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Analysis</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Cryptocurrency</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Technology</Link></li>                                         
                        <li className="cat-item"><Link to={"#"}>Mobile App</Link></li> 
                        <li className="cat-item"><Link to={"#"}>Development</Link></li> 
                    </ul>
                </div>
                <div className="widget style-1 widget_gallery gallery-grid-3">
                    <div className="widget-title">
                        <h4 className="title">Gallery</h4>
                    </div>
                    <SRLWrapper>
                        <ul id="lightgallery" className="lightgallery">
                            {galleryThum.map((item,ind)=>(
                                <li key={ind}>
                                    <div className="dlab-post-thum dlab-img-effect">
                                        <span data-exthumbimage={item.image} data-src={item.image} className="lightimg" title="Image 1 Title will come here">		
                                            <img src={item.image} alt="" /> 
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </SRLWrapper>    
                </div>

                <div className="widget style-1 recent-posts-entry">
                    <div className="widget-title">
                        <h4 className="title">Recent Post</h4>
                    </div>
                    <div className="widget-post-bx">
                        {widgetPost.map((item, i)=>(
                            <div className="widget-post clearfix">
                                <div className="dz-media"> 
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">{item.date}</li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><Link to={"./blog-details"}>{item.title}</Link></h6>
                                </div>
                            </div>        
                        ))}    
                    </div>
                </div>    
                <div className="widget style-1 widget_tag_cloud">
                    <div className="widget-title">
                        <h4 className="title">Popular Tags</h4>
                    </div>
                    <div className="tagcloud"> 
                        <Link to={"#"}>Mock-Ups</Link>
                        <Link to={"#"}>UI</Link>
                        <Link to={"#"}>Websites</Link>
                        <Link to={"#"}>PSD Templates</Link>
                        <Link to={"#"}>Branding</Link>
                        <Link to={"#"}>WordPress</Link>
                        <Link to={"#"}>Graphic Design</Link>
                        <Link to={"#"}>UI Kit</Link>
                        <Link to={"#"}>Development</Link>
                    </div>
                </div>   
            </aside> 
        </>
    )
}