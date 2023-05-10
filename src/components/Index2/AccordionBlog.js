import React from 'react';
import { Accordion } from 'react-bootstrap';

const accordionItems = [
    {title:'What Is Required or Industrial Revolution?',},
    {title:'Vestibulum nibh risus, in neque eleifendulputate', },
    {title:'Donec maximus, sapien id auctor ornare ?', },
    {title:'What Is Required or Industrial Revolution?', },
    {title:'Vestibulum nibh risus, in neque eleifendulputate', },
];

const AccordionBlog = () =>{   
    return(
        <>
            <div className="col-lg-5 m-b30">
                <div className="section-head style-1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <h3 className="title m-b20">Checkout Our Recently Closed Projects</h3>
                </div>
                <Accordion  defaultActiveKey="0" className="dz-accordion1 aos-item">
                    {accordionItems.map((data,i)=>(
                        <Accordion.Item className="accordion-item" key={i} eventKey={`${i}`}>
                            <Accordion.Header className="accordion-header" >
                                  {data.title}
                                <span className="toggle-close"></span>
                            </Accordion.Header>
                            <Accordion.Collapse eventKey={`${i}`} >
                                <div className="accordion-body">
                                    <p className="m-b0">Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, s</p>
                                </div>
                            </Accordion.Collapse>
                        </Accordion.Item>
                    ))}
                </Accordion>   
            </div>
        </>
    )
}
export default AccordionBlog;