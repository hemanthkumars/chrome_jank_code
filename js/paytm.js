function openPaytmJsPayment(){
      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
        "orderId": "11march035", /* update order id */
        "token": "dcb6afaeba0e4fbfa5a55e2103f9ccfd1615466443150", /* update token value */
        "tokenType": "TXN_TOKEN",
        "amount": "1.00" /* update amount */
        },
        "payMode": {
            "labels": {},
            "filter": [],
            "order": ['UPI','CARD']
        },
        "merchant":{
            "redirect": false
          },
        "handler": {
          "notifyMerchant": function(eventName,data){
            console.log("notifyMerchant handler function called");
            console.log("eventName => ",eventName);
            console.log("data => ",data);
          },
          transactionStatus:function(data){
              console.log("payment status ", data);
              paytmTransactionStatus({'param': data});
            } 
        }
      };

      if(window.Paytm && window.Paytm.CheckoutJS){
          window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                           window.Paytm.CheckoutJS.invoke();
                       }).catch(function onError(error){
                           console.log("error => ",error);
                       });
      } 
  }

