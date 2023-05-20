import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import "./assets/css/style.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CompanyHistory from "./views/CompanyHistory/index";
import Services from "./views/Services/index";
import CompanyDefinition from './views/CompanyDefinition/index';
import ServiceDetails from "./views/ServiceDetails/index"
import CertificateOfCompany from "./views/CertificateOfCompany/index"


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='page-wraper'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/company-history' exact component={CompanyHistory} />
            <Route path='/company-definiton' exact component={CompanyDefinition} />
            <Route path='/services' exact component={Services} />
            <Route path='/service-details' exact component={ServiceDetails} />
            <Route path='/certificate-of-company' exact component={CertificateOfCompany} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
