import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import user_KYC from'./user_KYC';
import login from'./login';
import User_Requisition from './User_Requisition';
import viewSupplierQuotations from'./viewSupplierQuotations';


import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(<Router>

  <div className="container">
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <b><a className="navbar-brand" href="#"><span style={{color:"red"}}>KYC & Supplier Integration using Blockchain (User View)</span></a></b>
    </div>

    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><NavLink activeClassName="activeNav" to = "/user_KYC" >KYC</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/login" >Login</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewSupplierQuotations" >View Supplier Quotations</NavLink></li>


      </ul>

    </div>

  </div>
</nav>

      <hr/>
      <Route path="/user_KYC" component={user_KYC} history ={history}/>
      <Route path="/login" component={login} history ={history}/>
      <Route path="/viewSupplierQuotations" component={viewSupplierQuotations} history ={history}/>


    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
