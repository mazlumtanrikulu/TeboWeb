import VideoPopup from './../../components/VideoPopup';

import bg8 from './../../assets/images/background/bg8.jpg';
function ExperSectionIndex2(){
	return(
		<>
			<section className="content-inner-4 overlay-black-middle" style={{backgroundImage:'url('+ bg8 +')', backgroundSize: 'cover',backgroundPosition: 'center'}}>
				<div className="container">
					<div className="section-head style-1 text-center">
						<h6 className="sub-title text-primary">Our Experts</h6>
						<h2 className="title m-b20 text-white">Everyone Loves Got An Incredible Project Right Now.</h2>
					</div>
					
					<VideoPopup classChange="popup-youtube play-btn2 m-auto" /> 
				</div>
			</section>	
		</>
	)
}
export default ExperSectionIndex2;