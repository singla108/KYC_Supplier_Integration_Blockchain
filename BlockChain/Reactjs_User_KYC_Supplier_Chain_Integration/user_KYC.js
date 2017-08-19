import Web3 from 'web3'
var React = require('react');
var ReactDOM=require('react-dom');

//var createReactClass = require('create-react-class');
//var ReactDOM = require('react-dom');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var IndiaHacksContractABI = [{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_ssn","type":"bytes32"},{"name":"_uid","type":"bytes32"}],"name":"do_KYC","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order","outputs":[{"name":"item","type":"bytes32"},{"name":"location","type":"bytes32"},{"name":"qty","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_info","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_quotations","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"some","type":"bytes32"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_item","type":"bytes32"},{"name":"_price","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_quotes","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_location","type":"bytes32"},{"name":"_qty","type":"uint256"},{"name":"_item","type":"bytes32"}],"name":"place_order","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getKYC","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kyc","outputs":[{"name":"firstName","type":"bytes32"},{"name":"ssn","type":"bytes32"},{"name":"uid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quote","outputs":[{"name":"item","type":"bytes32"},{"name":"price","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"address"}],"name":"addSecurity","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_uid","type":"bytes32"},{"name":"_firstName","type":"bytes32"}],"name":"signup","outputs":[],"payable":false,"type":"function"}]

var IndiaHacksContractAddress = '0xfc68462ff36137df3381e73873daca6a98543ea8';
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


var user_KYC = React.createClass({




  handleClick(event) {
      event.preventDefault()
ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];
      console.log(this.refs.name.value)
      console.log(this.refs.ssn.value)
      console.log(this.refs.uid.value)
      var firstn=this.refs.name.value
        var ssn=this.refs.ssn.value
          var uid=this.refs.uid.value

    IndiaHacksContract.do_KYC(firstn, ssn, uid);
    IndiaHacksContract.signup(uid,firstn);

  alert("Your Information has been submitted successfully for KYC, Thank You!!")

},


render() {
  return (
    <div  id="root">
    <center>
    <h1><b><u>* * Know Your Customer Form * * </u></b></h1>
  <h2>Name:          <input type="text" ref="name" /><br /></h2>
  <h2>SSN (Aadhar #):<input type="text" ref="ssn" /><br /></h2>
   <h2>Unique Id:    <input type="text" ref="uid" /><br /></h2>
</center>


        <center>
          <h1>  <input type="button" href='#' style={{background:"#D3D3D3",color:"black"}} onClick={this.handleClick.bind(this)} value=" Update Your KYC! " /> </h1>


        </center>

    </div>
  );
}


});

//ReactDOM.render(<myComponent />, document.getElementById('root'))
export default user_KYC;
