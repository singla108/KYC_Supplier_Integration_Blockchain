import React, {Component} from 'react';
import _ from 'lodash';
var Web3 = require('web3');


var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var IndiaHacksContractABI = [{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_ssn","type":"bytes32"},{"name":"_uid","type":"bytes32"}],"name":"do_KYC","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order","outputs":[{"name":"item","type":"bytes32"},{"name":"location","type":"bytes32"},{"name":"qty","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_info","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_quotations","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"some","type":"bytes32"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_item","type":"bytes32"},{"name":"_price","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_quotes","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_location","type":"bytes32"},{"name":"_qty","type":"uint256"},{"name":"_item","type":"bytes32"}],"name":"place_order","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getKYC","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kyc","outputs":[{"name":"firstName","type":"bytes32"},{"name":"ssn","type":"bytes32"},{"name":"uid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quote","outputs":[{"name":"item","type":"bytes32"},{"name":"price","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"address"}],"name":"addSecurity","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_uid","type":"bytes32"},{"name":"_firstName","type":"bytes32"}],"name":"signup","outputs":[],"payable":false,"type":"function"}]

var IndiaHacksContractAddress = '0xfc68462ff36137df3381e73873daca6a98543ea8';
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


class view_orders extends Component{

  constructor(props){
  super(props);

  this.state = {

    items:[],

    qties:[]
  };
  this.submitPro = this.submitPro.bind(this);
}
componentWillMount(){
  var data=IndiaHacksContract.get_info()
  this.setState(
    {

      items:String(data[0]).split(','),
      location:String(data[2]).split(','),
      qties:String(data[1]).split(',')
    }
  )
}

  submitPro () {
    console.log('button clicked');
    this.props.history.push('/supplier');
    // data=PaymentContract.get_info();
  }

render (){
  var count=1;
  var TableRows=[]

  _.each(this.state.items,(value, index)=> {
     TableRows.push(
       <tr >
       <td><span style={{marginLeft:80,fontSize:25}}>{count++}</span></td>
       <td><span style={{marginLeft:35,fontSize:25}}>{ETHEREUM_CLIENT.toAscii(this.state.items[index])}</span></td>
       <td><span style={{marginLeft:80,fontSize:25}}>{this.state.qties[index]}</span></td>
       <td><span style={{marginLeft:35,fontSize:25}}>{ETHEREUM_CLIENT.toAscii(this.state.location[index])}</span></td>

       </tr>

     )
   })

  return(

    <div className="App">

     <div className="App-Content" >
<center>      <table style={{marginTop:80}}>
        <thead>
           <tr>

           <th><span style={{marginLeft:30,fontSize:25}}>Order Id</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Item</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Quantity</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Location</span></th>
              </tr>
        </thead>
        <tbody>
          {TableRows}
        </tbody>

     </table></center>

</div>

 </div>
);
}
}



export default view_orders;
