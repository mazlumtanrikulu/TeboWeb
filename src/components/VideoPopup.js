import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';

const VideoPopup = ({classChange}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
        <Link to={"#"} className={classChange} onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
    </React.Fragment>
  )
}


const VideoPopup2 = () => { 
    const [isOpen, setOpen] = useState(false)
  
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
        <Link to={"#"} className="popup-youtube play-btn3" onClick={()=> setOpen(true)} >Play Video</Link>
      </React.Fragment>
    )
}



export  {VideoPopup2,  };
export default VideoPopup;