import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import "./assets/css/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompanyHistory from "./views/CompanyHistory/index";
import Services from "./views/Services/index";
import Gallery from "./views/Gallery/index";
import ServiceDetails from "./views/ServiceDetails/index";
import CertificateOfCompany from "./views/CertificateOfCompany/index";
import Cases from "./views/Cases";
import CaseDetail from "./views/CaseDetail";
import { Fragment, useEffect } from "react";
import ScrollToTop from "./views/ScrollToTop/scrollToTop";
import ContactUse from "./views/ContactUse";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <ScrollToTop />
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/company-definition">
              <Switch>
                <Route path="/company-definition/gallery" component={Gallery} />
                <Route path="/company-definition" component={CompanyHistory} />
              </Switch>
            </Route>
            <Route path="/services">
              <Switch>
                <Route path="/services/detail" component={ServiceDetails} />
                <Route path="/services" component={Services} />
              </Switch>
            </Route>
            <Route path="/cases">
              <Switch>
                <Route path="/cases/detail" component={CaseDetail} />
                <Route path="/cases" component={Cases} />
              </Switch>
            </Route>
            <Route
              path="/certificate-of-company"
              component={CertificateOfCompany}
            />
              <Route
              path="/contact-us"
              component={ContactUse}
            />
            
            
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
