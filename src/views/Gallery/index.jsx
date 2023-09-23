import { SRLWrapper, useLightbox } from "simple-react-lightbox";

//Layouts
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import PageTitle from "../../layouts/PageTitle";

//Components
// import FooterSingUp from "./../components/FooterSingUp";


//Images

import pic1 from "../../assets/images/gallery/1.jpg";
import pic2 from "../../assets/images/gallery/2.jpg";
import pic3 from "../../assets/images/gallery/3.jpg";
import pic4 from "../../assets/images/gallery/4.jpg";
import pic5 from "../../assets/images/gallery/5.jpg";
import pic6 from "../../assets/images/gallery/6.jpg";
import pic7 from "../../assets/images/gallery/7.jpg";
import pic8 from "../../assets/images/gallery/8.jpg";
import pic9 from "../../assets/images/gallery/9.jpg";
import pic10 from "../../assets/images/gallery/10.jpg";
import pic11 from "../../assets/images/gallery/11.jpg";
import pic12 from "../../assets/images/gallery/12.jpg";
import pic13 from "../../assets/images/gallery/13.jpg";
import pic14 from "../../assets/images/gallery/14.jpg";
import pic15 from "../../assets/images/gallery/15.jpg";
import pic16 from "../../assets/images/gallery/16.jpg";
import pic17 from "../../assets/images/gallery/17.jpg";
import pic18 from "../../assets/images/gallery/18.jpg";
import pic19 from "../../assets/images/gallery/19.jpg";
import pic20 from "../../assets/images/gallery/20.jpg";
import pic21 from "../../assets/images/gallery/21.jpg";
import pic22 from "../../assets/images/gallery/22.jpg";
import pic23 from "../../assets/images/gallery/23.jpg";
import pic24 from "../../assets/images/gallery/24.jpg";
import pic25 from "../../assets/images/gallery/25.jpg";
import pic26 from "../../assets/images/gallery/26.jpg";
import pic27 from "../../assets/images/gallery/27.jpg";
import pic28 from "../../assets/images/gallery/28.jpg";
import pic29 from "../../assets/images/gallery/29.jpg";



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
  { image: pic10 },
  { image: pic11 },
  { image: pic12 },
  { image: pic13 },
  { image: pic14 },
  { image: pic15 },
  { image: pic16 },
  { image: pic17 },
  { image: pic18 },
  { image: pic19 },
  { image: pic20 },
  { image: pic21 },
  { image: pic22 },
  { image: pic23 },
  { image: pic24 },
  { image: pic25 },
  { image: pic26 },
  { image: pic27 },
  { image: pic28 },
  { image: pic29 },
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
        <PageTitle title="Tarihimiz" parentPage="Ana Sayfa" childPage="Hakkımızda" />
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
