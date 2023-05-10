import CountUp from 'react-countup';
import {Link} from 'react-router-dom';
import IndustrialSlider from './IndustrialSlider';

function AboutUsSectionIndex3(){
	return(
		<>
			<div className="row">
				<div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
					<div className="section-head style-1">
						<h3 className="title m-b30">We Are Always Best For Industrial Solution</h3>
						<div className="exp-row">
							<h2 className="year counter"> <CountUp end={18} duration={5} /> </h2>
							<p>YEARS OF <span>EXPRIENCE</span></p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
					<p className="m-b30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud co </p>
					<Link to={"./about-us"} className="btn btn-primary btn-border btn-border m-r10 m-b10">ABOUT US</Link>
				</div>
			</div> 
			<IndustrialSlider />
		</>
		
	)
} export default AboutUsSectionIndex3;