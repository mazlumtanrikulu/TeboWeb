import { SRLWrapper, useLightbox } from "simple-react-lightbox";

//Layouts
import PageTitle from "../../layouts/PageTitle";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useTranslation } from 'react-i18next';

//Components
// import FooterSingUp from "./../components/FooterSingUp";


//Images

function ServiceGallery(props) {
  const { service, detail } = useParams()
  const { t } = useTranslation();
  const data = t(service, { returnObjects: true })
  const item = data.items.find((i) => i.id.toString() === detail).item
  const { openLightbox } = useLightbox();
  const options = {
    settings: {
      slideAnimationType: "slide",
    },
  };
  return (
    <>

      <div className="page-content bg-white">
        <PageTitle
          title={item.title}
          parentPage={t('home.services.title')}
          childPage={data.title}
        />
        <section className="content-inner">
          <div className="container">
            <SRLWrapper options={options}>
              <div className="row lightgallery">
                {item.gallery.map((data, ind) => (
                  <div className="col-lg-3 col-md-6 m-b30" key={ind}>
                    <div className="dz-box style-4">
                      <div className="dz-media height-sm">
                        <img src={data} alt="" />
                      </div>
                      <span
                        data-exthumbimage={data}
                        data-src={data}
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
export default ServiceGallery;
