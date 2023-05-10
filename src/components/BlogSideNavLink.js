import {Link} from 'react-router-dom';

export default function BlogSideNavLink(){
    return(
        <>
            <ul className="pagination text-center m-b30 m-t50 m-lg-t10">
                <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                <li className="page-item"><Link to={"#"} className="page-link active">1</Link></li>
                <li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                <li className="page-item"><Link to={"#"} className="page-link" >4</Link></li>
                <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
            </ul>
        </>
    )
}