import Web3 from 'web3'
var React = require('react');
var ReactDOM=require('react-dom');


//var createReactClass = require('create-react-class');
//var ReactDOM = require('react-dom');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var IndiaHacksContractABI = [{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_ssn","type":"bytes32"},{"name":"_uid","type":"bytes32"}],"name":"do_KYC","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order","outputs":[{"name":"item","type":"bytes32"},{"name":"location","type":"bytes32"},{"name":"qty","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_info","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_quotations","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"some","type":"bytes32"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_item","type":"bytes32"},{"name":"_price","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_quotes","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_location","type":"bytes32"},{"name":"_qty","type":"uint256"},{"name":"_item","type":"bytes32"}],"name":"place_order","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getKYC","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kyc","outputs":[{"name":"firstName","type":"bytes32"},{"name":"ssn","type":"bytes32"},{"name":"uid","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quote","outputs":[{"name":"item","type":"bytes32"},{"name":"price","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"address"}],"name":"addSecurity","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_uid","type":"bytes32"},{"name":"_firstName","type":"bytes32"}],"name":"signup","outputs":[],"payable":false,"type":"function"}]

var IndiaHacksContractAddress = '0xfc68462ff36137df3381e73873daca6a98543ea8';
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


var login = React.createClass({




  handleClick(event) {
      event.preventDefault()
ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];

      var uid=this.refs.uid.value


    if(IndiaHacksContract.login(uid)){
    alert("Logged in Successfully")
    ReactDOM.render(<User_Requisition/>,document.getElementById('root'))

  }
    else{
     alert("Access Denied")
   }

},


render() {
  return (
    <div  id="root">
    <center>
    <h1> <u> <b> * * User Login Form * * </b> </u> </h1>
  <h2> Enter Your Unique Identification Number:<input type="text" ref="uid" /><br /> </h2>

</center>


        <center>
            <h1> <input type="button" href='#' style={{background:"#D3D3D3",color:"black"}} onClick={this.handleClick.bind(this)} value="User Login!!" /> </h1>


        </center>

    </div>
  );
}


});
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

   ReactDOM.render(<login/>,document.getElementById('root'))
   window.location.reload();


  },


  render:function(){
    return(

          <div id="test">
          <div id="try" className="text-center">
          <h1>
          <b> <u> * * User Requisition Form * * </u></b>
          </h1>
          <hr/>
          <h1>
          <span>Commodity:  </span><select id="Commodity" ref="commodity">
          <option value="Laptop">Laptop</option>
          <option value="Desktop">Desktop</option>
          <option value="HeadPhones">HeadPhones</option>
          <option value="Communicator">Communicator</option>
          </select>
          <br/>
          <br/>
         <span>Location:  </span><select id="Location" ref="location">
          <option value="InfospaceLT">InfospaceLT</option>
          <option value="CyberCity">CyberCity</option>
          <option value="ShastriPark">ShastriPark</option>
          <option value="London">London</option>
          </select><br/>


          <br/>

          <span>Quantity:  </span><input type="text" name="quantity" ref="qty"/><br/>

            <br/>

           <b> <input type="Submit" name="submit" onClick={this.handleClick.bind(this)}value="* * Place the Order * * " /> </b>
           </h1>

          </div>

          </div>
        );
  }
});


//ReactDOM.render(<myComponent />, document.getElementById('root'))
export default login;
