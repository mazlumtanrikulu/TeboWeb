import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import "./assets/css/style.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='page-wraper'>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
