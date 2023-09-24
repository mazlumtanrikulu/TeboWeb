import PageTitle from "../../layouts/PageTitle";

import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useTranslation } from 'react-i18next';


export default function CompanyHistory() {
  const { service, detail } = useParams()
  const { t } = useTranslation();
  const data = t(service, { returnObjects: true })
  const item = data.items.find((i) => i.id.toString() === detail).item
  console.log(data);
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
            <div className="row m-b30">
              {/* {aboutSection.map((item, ind) => (
                <div className="col-md-4 m-b30" key={ind}>
                  <div className="dz-media-list d-flex align-items-center">
                    <img src={item.image} alt="media image" />
                    <div className="ms-3">
                      <span>2023</span>
                      <Link to={"#"}>
                        <h4>{item.title}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="m-b30 align-self-center">
                  <div className="about-content">
                    <div className="section-head style-1">
                      <h3 className="title m-b20">
                        {item.title}
                      </h3>
                      <p>
                        {item.p1}
                      </p>
                    </div>
                    <p>
                      {item.p2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 m-b30">
                <div className="worker">
                  <img src={item.image} alt="work" />
                </div>
              </div>
              <p className="m-b30">
                {item.p3}
              </p>
            </div>
            <div className="m-b30">
              {/* <Link to={'/company-definiton'} className="btn btn-primary btn-border m-r10 m-b10">Gallery</Link> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
