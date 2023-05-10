import React,{useState, useEffect} from 'react';
import {Tab, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import about15 from './../../assets/images/about/about15.jpg';
import about16 from './../../assets/images/about/about16.jpg';

const TabContentSection = ({title1, title2, number})=>{
    return(
        <>
            <p className="m-b40">Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, felis enim interdum purus.</p>
            <div className="row">
                <div className="col-sm-6">
                    <div className="company-info">
                        <h4 className="users">{number}</h4>
                        <div>
                            <h5 className="title">{title1}</h5>
                            <span>Integer dui metus, venenatis</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="company-info">
                        <h4 className="brand">37</h4>
                        <div>
                            <h5 className="title">{title2}</h5>
                            <span>Pellentesque et nisl quis</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 
export default function ServicesTabSection(){
    //Add split-active event
	const [splitEvent, setsplitEvent] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setsplitEvent(window.scroll > 96);
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll);
	},[]) 

    return(
        <>
            <div className="row about-style9">
                <div className="col-lg-6 m-b30 align-self-center">
                    <Tab.Container defaultActiveKey="women">
                        <div className="about-content">
                            <div className="section-head style-1 aos-item">
                                <h5 className="sub-title text-primary">Latest Case Studies</h5>
                                <h2 className="title m-b20">INDUSTRIES PROVIDE BEST SERVICES</h2>
                            </div>
                            <Nav as="ul" className="nav nav-tabs style-1 item3 m-b30 aos-item" >
                                <Nav.Item as="li" className="nav-item">
                                    <Nav.Link   eventKey="women">women collection</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                    <Nav.Link eventKey="men" >men collection</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                    <Nav.Link eventKey="children" >children collection</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="tab-content m-b40 m-sm-b20 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <Tab.Pane  eventKey="women">	
                                    <TabContentSection title1="Thousands of users" title2 ="Brands collection" number="923"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="men">
                                    <TabContentSection title1="Lakhs of users" title2 ="Brands collection" number="576" />
                                </Tab.Pane>
                                <Tab.Pane eventKey="children" >
                                    <TabContentSection title1="Thousands of users" title2 ="Brands collection" number="657" />
                                </Tab.Pane>
                            </Tab.Content>
                            <Link to={"./services"} className="btn btn-primary btn-border m-r10 m-b10">VIEW MORE</Link>
                        </div>
                    </Tab.Container>    
                </div>
                <div className="col-lg-6 m-b30">
                    <div className="dz-media">	
                        <div className={splitEvent ? "split-box" : "split-box split-active"}>
                            <div>
                                <img className="m-b15 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" src={about15} alt="" />
                            </div>
                        </div>
                        <div className={splitEvent ? "split-box" : "split-box split-active"}>
                            <div>
                                <img className="aos-item"  src={about16} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}