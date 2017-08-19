import Web3 from 'web3'
var React = require('react');

//var createReactClass = require('create-react-class');
//var ReactDOM = require('react-dom');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var IndiaHacksContractABI = [{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_ssn","type":"bytes32"},{"name":"_uid","type":"bytes32"}],"name":"do_KYC","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order","outputs":[{"name":"item","type":"bytes32"},{"name":"location","type":"bytes32"},{"name":"qty","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_info","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_quotations","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"some","type":"bytes32"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_item","type":"bytes32"},{"name":"_price","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_quotes","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_location","type":"bytes32"},{"name":"_qty","type":"uint256"},{"name":"_item","type":"bytes32"}],"name":"place_order","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getKYC","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kyc","outputs":[{"name":"firstName","type":"bytes32"},{"name":"ssn","type":"bytes32"},{"name":"uid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quote","outputs":[{"name":"item","type":"bytes32"},{"name":"price","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"address"}],"name":"addSecurity","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_uid","type":"bytes32"},{"name":"_firstName","type":"bytes32"}],"name":"signup","outputs":[],"payable":false,"type":"function"}]

var IndiaHacksContractAddress = '0xfc68462ff36137df3381e73873daca6a98543ea8';
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


var submit_quotation = React.createClass({

  getInitialState: function() {
      return {
        name: 'select'
      };
    },

handleChange : function(e){
  var name = e.target.value;
  console.log(name, " was selected");
  this.setState({name: e.target.value});
  //this.props.onChange(name);

},


handleClick : function(event){
  ETHEREUM_CLIENT.eth.defaultAccount = ETHEREUM_CLIENT.eth.accounts[0];
  event.preventDefault()
      var el = event.target;


      console.log(this.refs.price.value);

      console.log(this.refs.vendor.value);
      console.log(this.refs.item.value);

      var pricen=this.refs.price.value;

      var vendorn=this.refs.vendor.value;

      var itemn=this.refs.item.value;
    IndiaHacksContract.place_quotes(itemn,pricen,vendorn);

    //this.props.router.push('/src/App.js');

},


  render : function(){


    return(
      <div>
<center>
<h1 className="text-center"> <b> <u> * * Update Supplier Quote Form * *  </u></b></h1>

<hr/>

      <form>

<div className="box-footer" style={{textAlign:"center", marginTop : 30}}>

<h1>
      <span> Vendor :  </span><select className="selectpicker" onChange= {this.handleChange} value={this.state.value} ref="vendor">
    <option value="HP">HP</option>
    <option value="Dell">Dell</option>
    <option value="Toshiba">Toshiba</option>
    <option value="Apple">Apple</option>
    <option value="Microsoft">Microsoft</option>
      <option value="Samsung">Samsung</option>
      </select>
</h1>
</div>

    <div style={{textAlign:"center", marginTop : 30}}>
      <span style= {{fontSize : 30}}>Item : </span><input type="text" name="item" ref="item"/>
      </div>
      <div>
      <span style= {{fontSize : 30}}>Price : </span><input type="text" name="price" ref="price"/>

    </div>

  <br/>
  <br/>


    <h1>  <input type="button" href='#' onClick={this.handleClick} value="* * Update Quote * * " /> </h1>

      </form>
      </center>
    </div>
  );


  }



});

//ReactDOM.render(<myComponent />, document.getElementById('root'))
export default submit_quotation;
