import React from 'react';
import {Link} from 'react-router-dom';

import bnr1 from './../assets/images/bnr/bnr1.jpg';

const PageTitle = ({title, parentPage, childPage})=>{
    return(
        <>
            <div className="dz-bnr-inr dz-bnr-inr-sm overlay-black-middle text-center" style={{backgroundImage: 'url('+ bnr1 +')'}}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{title}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"./"}>{parentPage}</Link></li>
                                <li className="breadcrumb-item">{childPage}</li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageTitle;