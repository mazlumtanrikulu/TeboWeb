import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "./../assets/images/logo.png";
// import logowhite from './../assets/images/logo-white.png';
// import teboLogo from "./../assets/images/tebo-logo.JPG"
import TeboLogo from "./../assets/images/TeboLogo.svg";
import { useTranslation } from "react-i18next";
import TurkeyFlag from "./../assets/images/countries/turkey.png";
import { USAFlag } from "./../assets/images/countries/united-states.png";
import { RussiaFlag } from "./../assets/images/countries/russia.png";
import { UAEFlag } from "./../assets/images/countries/united-arab-emirates.png";
import ReactFlagsSelect from "react-flags-select";

export default function Header() {
  //Sidebar

  const [selected, setSelected] = useState(
    localStorage.getItem("lang") ?? "US"
  );
  const { t } = useTranslation();
  const history = useHistory();
  const [openToggleBtn, setOpenToggleBtn] = useState(false);
  //Header fixed
  const [headerFix, setheaderFix] = React.useState(false);
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //     setheaderFix(window.scrollY > 50);
    // });

    // // Menu open {mestmenu}
    // var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
    // for (var y = 0; y < navUl.length; y++) {
    //     navUl[y].addEventListener('click', function () { checkLi(this) });
    // }
    // function checkLi(current) {
    //     //SubMenu.forEach(el => (current !== el) ? el.classList.remove('none') : '');
    //     navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
    //     setTimeout(() => {
    //         current.classList.toggle('open');
    //     }, 100);
    // }

    localStorage.setItem("lang", selected);
  }, [selected]);
  const scrollToElement = (id) => {
    let container = document.getElementById(id);
    if (!container) {
      history.push("/");
      setTimeout(() => {
        container = document.getElementById(id);
        container.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    } else {
      container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };
  return (
    <>
      <header className="site-header mo-left header style-3">
        {/* <div className="top-bar">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="dz-topbar-center">
                                <p className="help-text"><strong>Need Help :</strong>Providing Innovative and Sustainable Solutions, Call (123) 123456789</p>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/* <!-- Main Header --> */}
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""
            } `}
        >
          <div className="main-bar clearfix ">
            <div className="container-fluid clearfix">
              {/* <!-- Website Logo --> */}
              {/* <div
                className="logo-header mostion logo-white"
                style={{ height: "144.2px" }}
              >
                <Link to={"/"}>
                  <img src={TeboLogo} alt="" style={{ maxWidth: '220px' }} />
                </Link>
              </div> */}
              {/* <!-- Nav Toggle Button --> */}
              {/* <button
                                className={`navbar-toggler navicon justify-content-end ${openToggleBtn ? 'open' : 'collapsed'}`}
                                onClick={() => setOpenToggleBtn(!openToggleBtn)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button> */}
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  {/* <div className="search-inhead">
                                        <div className="dz-quik-search On">
                                            <form action="#">
                                                <input name="search" value="" type="text" className="form-control" placeholder="Search" />
                                                <span id="quik-search-remove"><i className="ti-close"></i></span>
                                            </form>
                                        </div>
                                        <Link to={"#"} className="search-link" id="quik-search-btn">
                                            <i className="fas fa-search"></i>
                                        </Link>
                                    </div> */}
                  {/* <li className="sub-menu-down"><Link to={"#"}><span>Portfolio</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./portfolio'}>Portfolio 1</Link></li>
                                            <li><Link to={'./portfolio-collage'}>Portfolio Collage</Link></li>
                                            <li><Link to={'./portfolio-details'}>Portfolio Details</Link></li>
                                        </ul>
                                    </li> */}
                  {/* <Link to={"/contact-us"} className="btn btn-secondary d-xl-inline-block d-none btn-border btn-border-secondary m-r10 m-b10">{t('home.contact_us.form.title')}</Link> */}
                  {/* <select>
                                        <option>
                                            <img src={TurkeyFlag} />
                                        </option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select> */}
                  <ReactFlagsSelect
                    className="menu-flags"
                    selectButtonClassName="menu-flags-button"
                    selected={selected}
                    onSelect={(code) => {
                      setSelected(code);
                      window.location.reload();
                    }}
                    countries={["TR", "US", "AE", "RU"]}
                    customLabels={{ TR: "TR", US: "US", AE: "AE", RU: "RU" }}
                    placeholder="Select Language"
                  />
                </div>
              </div>
              {/* <!-- Extra Nav --> */}

              <div
                className={`header-nav navbar-collapse justify-content-start ${openToggleBtn ? " collapse show" : " collapse"
                  }`}
              >
                <div
                  className="logo-header logo-dark"
                  style={{ maxWidth: "200px" }}
                >
                  <Link to={"/"}>
                    <img src={TeboLogo} alt="" />
                  </Link>
                </div>
                <ul className="navbar-nav navbar navbar-left" style={{
                  width: '100%',
                  height: '144px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '30px',
                  paddingLeft: '80px'
                }}>
                  <li>
                    <Link to={"/"}>
                      <span
                        className="navbar-item"
                        style={{
                          background: "#ffffff10",
                          border: "2px solid #ffffff36",
                          borderRadius: 50,
                          color: "white",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "150px",

                          outline: "none",
                          padding: "5px 11px",
                          transition:
                            "border 0.2s ease-out, color 0.2s ease-out",
                          textDecoration: "none",
                          textAlign: "center",
                          height: "50px",
                          fontWeight: '600',
                          '-webkit-backdrop-filter': 'blur(9px)',
                          'backdrop-filter': 'blur(9px)'
                        }}
                      >
                        {t("header.home")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={() => scrollToElement("about")}>
                      <span
                        className="navbar-item"
                        style={{
                          background: "#ffffff10",
                          border: "2px solid #ffffff36",
                          borderRadius: 50,
                          color: "white",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "150px",

                          outline: "none",
                          padding: "5px 11px",
                          transition:
                            "border 0.2s ease-out, color 0.2s ease-out",
                          textDecoration: "none",
                          textAlign: "center",
                          height: "50px",
                          fontWeight: '600',
                          '-webkit-backdrop-filter': 'blur(9px)',
                          'backdrop-filter': 'blur(9px)'
                        }}
                      >
                        {t("header.about_us")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={() => scrollToElement("services")}>
                      <span
                        className="navbar-item"
                        style={{
                          background: "#ffffff10",
                          border: "2px solid #ffffff36",
                          borderRadius: 50,
                          color: "white",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "150px",

                          outline: "none",
                          padding: "5px 11px",
                          transition:
                            "border 0.2s ease-out, color 0.2s ease-out",
                          textDecoration: "none",
                          textAlign: "center",
                          height: "50px",
                          fontWeight: '600',
                          '-webkit-backdrop-filter': 'blur(9px)',
                          'backdrop-filter': 'blur(9px)'
                        }}
                      >
                        {t("header.services")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={() => scrollToElement("references")}
                    >
                      <span
                        className="navbar-item"
                        style={{
                          background: "#ffffff10",
                          border: "2px solid #ffffff36",
                          borderRadius: 50,
                          color: "white",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "150px",

                          outline: "none",
                          padding: "5px 11px",
                          transition:
                            "border 0.2s ease-out, color 0.2s ease-out",
                          textDecoration: "none",
                          textAlign: "center",
                          height: "50px",
                          fontWeight: '600',
                          '-webkit-backdrop-filter': 'blur(9px)',
                          'backdrop-filter': 'blur(9px)'
                        }}
                      >
                        {t("header.referances")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={() => scrollToElement("contactus")}>
                      <span
                        className="navbar-item"
                        style={{
                          background: "#ffffff10",
                          border: "2px solid #ffffff36",
                          borderRadius: 50,
                          color: "white",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "150px",

                          outline: "none",
                          padding: "5px 11px",
                          transition:
                            "border 0.2s ease-out, color 0.2s ease-out",
                          textDecoration: "none",
                          textAlign: "center",
                          height: "50px",
                          fontWeight: '600',
                          '-webkit-backdrop-filter': 'blur(9px)',
                          'backdrop-filter': 'blur(9px)'
                        }}
                      >
                        {t("header.contact_us")}
                      </span>
                    </Link>
                  </li>

                  {/* <li className="sub-menu-down"><Link to={"#"}><span>Portfolio</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./portfolio'}>Portfolio 1</Link></li>
                                            <li><Link to={'./portfolio-collage'}>Portfolio Collage</Link></li>
                                            <li><Link to={'./portfolio-details'}>Portfolio Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"#"}><span>Shop</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./shop-grid-3'}>Shop Grid 3</Link></li>
                                            <li><Link to={'./product-details'}>Product Details</Link></li>
                                            <li><Link to={'./shop-wishlist'}>Wishlist</Link></li>
                                            <li><Link to={'./shop-checkout'}>Checkout</Link></li>
                                            <li><Link to={'./shop-cart'}>Cart</Link></li>
                                            <li><Link to={'./login'}>Login</Link></li>
                                        </ul>
                                    </li> */}
                  {/* <li className="sub-menu-down"><Link to={"/"} onClick={ScrollToContactUsHandler}><span>İletişim</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./contact-us'}>Contact Us</Link></li>

                                        </ul>
                                    </li> */}
                </ul>
                {/* <div className="dz-social-icon">
                                    <ul>
                                        <li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                        <li><a className="fab fa-twitter" href="https://twitter.com/?lang=en"></a></li>
                                        <li><a className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
                                        <li><a className="fab fa-instagram" href="https://www.instagram.com/?hl=en"></a></li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
    </>
  );
}
