function gotoPayment(){
location.replace("http://localhost:8555/laeui/laetoday/other/braintree")
}

window.onmessage = function(e){
    if (e.data == 'hello') {
        alert('It works!');
        _functionName();
    }
};