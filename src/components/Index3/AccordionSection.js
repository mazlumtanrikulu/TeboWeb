import React,{useState} from 'react';
import {Accordion} from 'react-bootstrap';

const accordDataBlog = [
    {title: 'WHAT IS REQUIRED OR INDUSTRIAL REVOLUTION?'},
    {title: 'INFORMATION ARCHITECTURE'},
    {title: 'USER INTERFACE DESIGN (UI)'},
];

function AccordionSection (){
    const [activeDefault2, setActiveDefault2] = useState(0)
    return(
        <>
            <Accordion className=" dz-accordion2" defaultActiveKey="0">
                {accordDataBlog.map((data, i)=>(
                    <Accordion.Item   key={i} eventKey={`${i}`}>
                        <Accordion.Header className="accordion-header" id="headingOne2">
                            {data.title}
                            <span className="toggle-close"></span>
                        </Accordion.Header>
                        <Accordion.Collapse  eventKey={`${i}`}>
                            <div className="accordion-body">                                
                                <p className="m-b0">We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects. General repair & industrial and machinery. Our team up-to-date, sustainable custom manufacturing solutions. </p>
                            </div>
                        </Accordion.Collapse>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
}
export default AccordionSection;