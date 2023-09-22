import { Link } from "react-router-dom";

//Layouts
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import PageTitle from "../../layouts/PageTitle";

//images
import media1 from "../../assets/images/media/media1.png";
import media2 from "../../assets/images/media/media2.png";
import media3 from "../../assets/images/media/media3.png";
import pic4 from "../../assets/images/pic4.png";

const aboutSection = [
  { image: media1, title: "indiro Was Founded" },
  { image: media2, title: "Start with a Small Services" },
  { image: media3, title: "Indiro is Growing" },
];

export default function CompanyHistory() {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle
          title="Çelik Konstrüksiyon İmalatı ve Montajı"
          parentPage="Home"
          childPage="Service1"
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
                        Çelik Konstrüksiyon İmalatı ve Montajı
                      </h3>
                      <p>
                        Çelik konstrüksiyon imalatı ve montajı konusunda uzman
                        olan firmamız, yıllardır sektördeki deneyimi ve uzman
                        kadrosuyla müşterilerimize kaliteli hizmet sunmaktadır.
                        İmalat aşamasında yüksek kaliteli çelik malzemeler
                        kullanarak, her projeyi mükemmel bir şekilde tamamlamak
                        için çalışıyoruz. Tasarım, imalat ve montaj
                        süreçlerimizde güvenlik standartlarına en üst düzeyde
                        önem veriyoruz, böylece hem çalışanlarımızın hem de
                        müşterilerimizin güvende olduğundan emin oluyoruz.
                      </p>
                    </div>
                    <p>
                      Müşterilerimizin özel ihtiyaçlarına ve projelerine uygun
                      çözümler sunarak, her işi özgün bir yaklaşımla ele
                      alıyoruz. İmalat aşamasında hassasiyetle çalışarak, çelik
                      konstrüksiyonlarımızın dayanıklılığını ve uzun
                      ömürlülüğünü garanti altına alıyoruz. Montaj işlemi
                      sırasında da işimizi zamanında ve hatasız bir şekilde
                      tamamlamak için titizlikle çalışıyoruz. Siz de çelik
                      konstrüksiyon projelerinizde güvenilir bir iş ortağı
                      arıyorsanız, bize başvurabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 m-b30">
                <div className="worker">
                  <img src={pic4} alt="work" />
                </div>
              </div>
              <p className="m-b30">
                Firmamız, çelik konstrüksiyon imalatı ve montajı alanında lider
                bir konumda bulunmaktadır ve her türlü projeye profesyonel bir
                yaklaşım sunmaktadır. Müşteri memnuniyetini her zaman
                önceliğimiz olarak kabul ediyor ve projelerinizi en yüksek
                kalitede tamamlamak için buradayız. İşbirliği için bize ulaşın
                ve çelik konstrüksiyon ihtiyaçlarınızı en iyi şekilde
                karşılayalım.
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
