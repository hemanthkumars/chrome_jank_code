




function openRazorPayModal(rzKey,amount,chainName,
                          logoUrl,rzOrderId,customerName,customerEmail,customerContact,themeInput){
var options = {
    "key": rzKey, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": chainName,
    "description": "",
    "image": logoUrl,
    "order_id": rzOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
//        alert(response.razorpay_payment_id);
//        alert(response.razorpay_order_id);
//        alert(response.razorpay_signature);
          razorPaySuccess({'param': response});
    },
    "prefill": {
        "name": customerName,
        "email": customerEmail,
        "contact": customerContact
    },
    "theme": {
        "color": themeInput
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
//        alert(response.error.code);
//        alert(response.error.description);
//        alert(response.error.source);
//        alert(response.error.step);
//        alert(response.error.reason);
//        alert(response.error.metadata.order_id);
//        alert(response.error.metadata.payment_id);
        razorPayFailure({'param': response});
});


rzp1.open();
}