//import { Row,Label,Form,FormGroup,Button,Input } from 'reactstrap';
var React=require('react');
var ReactDOM=require('react-dom');
var Web3 = require('web3');
var _=require('lodash');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var IndiaHacksContractABI = [{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_ssn","type":"bytes32"},{"name":"_uid","type":"bytes32"}],"name":"do_KYC","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order","outputs":[{"name":"item","type":"bytes32"},{"name":"location","type":"bytes32"},{"name":"qty","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_info","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_quotations","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"some","type":"bytes32"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_item","type":"bytes32"},{"name":"_price","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_quotes","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_location","type":"bytes32"},{"name":"_qty","type":"uint256"},{"name":"_item","type":"bytes32"}],"name":"place_order","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getKYC","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kyc","outputs":[{"name":"firstName","type":"bytes32"},{"name":"ssn","type":"bytes32"},{"name":"uid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quote","outputs":[{"name":"item","type":"bytes32"},{"name":"price","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"address"}],"name":"addSecurity","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_uid","type":"bytes32"},{"name":"_firstName","type":"bytes32"}],"name":"signup","outputs":[],"payable":false,"type":"function"}]

var IndiaHacksContractAddress = '0xfc68462ff36137df3381e73873daca6a98543ea8';
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);



var User_Requisition=React.createClass({
  handleClick:function(obj){
    ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];
    obj.preventDefault();
    var tgt=obj.target;
    console.log(this.refs.commodity.value);
    console.log(this.refs.location.value);
    console.log(this.refs.qty.value);
    var arg1=this.refs.commodity.value;
    var arg2=this.refs.location.value;
    var arg3=this.refs.qty.value;
    IndiaHacksContract.place_order(arg2,arg3,arg1);
    console.log("Hello "+ IndiaHacksContract.get_info());

   alert("Your Purchase Requisition for " + this.refs.commodity.value + " ** Location: " + this.refs.location.value + " ** Quantity:" + this.refs.qty.value + " ** has been placed to our Vendors Successfully, Thank You!!")

   ReactDOM.render(<index/>,document.getElementById('root'))

  },


  render:function(){
    return(

          <div id="test">
          <div id="try" className="text-center">
          <h1>
          User Requisition Form
          </h1>
          <hr/>
          <span>Commodity:</span><select id="Commodity" ref="commodity"  style={{width:140,height:80,marginLeft:10,marginTop:80}}>
          <option value="Laptop">Laptop</option>
          <option value="Desktop">Desktop</option>
          <option value="HeadPhones">HeadPhones</option>
          <option value="Communicator">Communicator</option>
          </select>
          <br/>
          <br/>
         <span>Location:</span><select id="Location" ref="location" style={{width:140,height:80,marginLeft:45,marginTop:95}}>
          <option value="InfospaceLT">InfospaceLT</option>
          <option value="CyberCity">CyberCity</option>
          <option value="ShastriPark">ShastriPark</option>
          <option value="London">London</option>
          </select><br/>

          <span>Quantity:</span><input type="text" name="quantity" ref="qty" style={{width:100,height:24,marginTop:110,marginLeft:40}}/><br/>
           <input type="Submit" name="submit" onClick={this.handleClick.bind(this)}value="PlaceOrder" style={{marginTop:100,width:180,height:50,borderRadius:15,background:"#2F4F4F",color:"yellow"}}/>
          <br/>
          <br/>
          </div>

          </div>
        );
  }
});


export default User_Requisition;
//ReactDOM.render(<App />,document.getElementById('root'));
