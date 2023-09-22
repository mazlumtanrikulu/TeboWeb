import { SRLWrapper, useLightbox } from "simple-react-lightbox";

//Layouts
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import PageTitle from "../../layouts/PageTitle";

//Components
// import FooterSingUp from "./../components/FooterSingUp";


//Images

import pic1 from "../../assets/images/gallery/resim1.jpeg";
import pic2 from "../../assets/images/gallery/resim2.jpeg";
import pic3 from "../../assets/images/gallery/resim3.jpeg";
import pic4 from "../../assets/images/gallery/resim4.jpg";
import pic5 from "../../assets/images/gallery/resim5.jpg";
import pic6 from "../../assets/images/gallery/pic1.jpg";
import pic7 from "../../assets/images/gallery/pic2.jpg";
import pic8 from "../../assets/images/gallery/pic3.jpg";
import pic9 from "../../assets/images/gallery/pic4.jpg";



const GallerySection = [
  { image: pic1 },
  { image: pic2 },
  { image: pic3 },
  { image: pic4 },
  { image: pic5 },
  { image: pic6 },
  { image: pic7 },
  { image: pic8 },
  { image: pic9 },
  { image: pic1 },
  { image: pic2 },
  { image: pic3 },
];

function Gallery(props) {
  const { openLightbox } = useLightbox();
  const options = {
    settings: {
      slideAnimationType: "slide",
    },
  };
  return (
    <>
     
      <div className="page-content bg-white">
        <PageTitle title="Gallery Grid 4" parentPage="Home" childPage="Pages" />
        <section className="content-inner">
          <div className="container">
            <SRLWrapper options={options}>
              <div className="row lightgallery">
                {GallerySection.map((data, ind) => (
                  <div className="col-lg-3 col-md-6 m-b30" key={ind}>
                    <div className="dz-box style-4">
                      <div className="dz-media height-sm">
                        <img src={data.image} alt="" />
                      </div>
                      <span
                        data-exthumbimage={data.image}
                        data-src={data.image}
                        className="view-btn lightimg"
                        title=""
                        onClick={() => openLightbox(ind)}
                      >
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </div>
        </section>
      </div>

    </>
  );
}
export default Gallery;
