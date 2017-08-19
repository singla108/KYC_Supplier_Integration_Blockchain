import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import view_orders from './view_orders';
import submit_quotation from './submit_quotation';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(<Router>
  <div className="container1">
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    <b>  <a className="navbar-brand" href="#"><span style={{color:"blue"}}>KYC & Supplier Integration using Blockchain (Supplier View) </span></a> </b>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><NavLink activeClassName="activeNav" to = "/view_orders" >View Orders</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/submit_quotation" >Submit Quotation</NavLink></li>
      </ul>
    </div>
  </div>
</nav>



      <hr/>

      <Route exact path="/" component={view_orders}/>
      <Route path="/view_orders" component={view_orders} history ={history}/>
      <Route path="/submit_quotation" component={submit_quotation} history ={history}/>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
