pragma solidity ^0.4.8;

contract IndiaHacks{
mapping (bytes32 => bytes32) public admins;
  Order[] public order;
  struct Order {
  bytes32 item;
  bytes32 location;
  uint qty;
  }
  Quotes[] public quote;
  struct Quotes {
  bytes32 item;
  uint price;
  bytes32 vendor;
  }
  address add;


  struct KYC{
       bytes32 firstName;
       bytes32 ssn;
       bytes32 uid;
  }
  KYC[] public kyc;

  function do_KYC(bytes32 _firstName, bytes32 _ssn, bytes32 _uid) returns (bool success){
      KYC memory newKYC;
       newKYC.firstName=_firstName;
       newKYC.ssn=_ssn;
       newKYC.uid=_uid;

       kyc.push(newKYC);
     return true;
  }
  function signup(bytes32 _uid,bytes32 _firstName){
    admins[_uid]=_firstName;
  }
  function login(bytes32 some) constant returns (bool)
{

    if(admins[some]== 0)
       return false;
    else return true;
}

  function getKYC() constant returns (bytes32[],bytes32[],bytes32[]){
       uint length =kyc.length;

       bytes32[] memory firstNames = new bytes32[](length);
       bytes32[] memory ssns = new bytes32[](length);
       bytes32[] memory uids = new bytes32[](length);

       for(uint i=0; i< ssns.length; i++){
       KYC memory currentKYC;
       currentKYC = kyc[i];
       firstNames[i]=currentKYC.firstName;
       ssns[i]=currentKYC.ssn;
       uids[i]=currentKYC.uid;
       }

      return (firstNames, ssns, uids);

  }


function place_order(bytes32 _location, uint _qty,bytes32 _item) returns (bool success){
        Order memory newOrder;
        newOrder.item=_item;
        newOrder.location=_location;
        newOrder.qty=_qty;

        order.push(newOrder);
        return true;
}
function get_info() constant returns ( bytes32[],uint[],bytes32[]){
       uint length=order.length;

       bytes32[] memory items = new bytes32[](length);
       bytes32[] memory locations = new bytes32[](length);
       uint[] memory quantities = new uint[](length);

       for(uint i=0; i< order.length; i++){
         Order memory currentOrder;
         currentOrder = order[i];

         items[i]=currentOrder.item;
         locations[i]=currentOrder.location;
          quantities[i]=currentOrder.qty;
      }
      return (items,quantities,locations);
}
function place_quotes( bytes32 _item, uint _price, bytes32 _vendor) returns (bool success) {

         Quotes memory newQuote;
         newQuote.item =_item;
         newQuote.price =_price;
         newQuote.vendor =_vendor;

         quote.push(newQuote);
         return true;
}
function get_quotations() constant returns ( bytes32[],uint[],bytes32[]){
      uint length=quote.length;

      bytes32[] memory itms = new bytes32[](length);
      uint[] memory amount = new uint[](length);
      bytes32[] memory vendorsName = new bytes32[](length);

      for(uint j=0; j< quote.length; j++){
        Quotes memory currentQuote;
        currentQuote = quote[j];
        itms[j]=currentQuote.item;
         amount[j]=currentQuote.price;
         vendorsName[j]=currentQuote.vendor;
     }
     return ( itms,amount,vendorsName);

}

}
