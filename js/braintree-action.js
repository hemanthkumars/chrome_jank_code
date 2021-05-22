var venmoButton = document.getElementById('venmo-button');
 function executeBrainTree(){
  var button = document.querySelector('#submit-button');

   var clientTokenGenerated='eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUyTVRVME5ETTBPVGNzSW1wMGFTSTZJamRqWVdZeU0yUmlMV1V4TVRFdE5HWXdNeTFoTldObUxUVXdNVEZtWlRZMU0yRTFOU0lzSW5OMVlpSTZJalkwY1cwMVluTmljV1ptWmpsb05tWWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pTmpSeGJUVmljMkp4Wm1abU9XZzJaaUlzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPblJ5ZFdWOUxDSnlhV2RvZEhNaU9sc2liV0Z1WVdkbFgzWmhkV3gwSWwwc0luTmpiM0JsSWpwYklrSnlZV2x1ZEhKbFpUcFdZWFZzZENKZExDSnZjSFJwYjI1eklqcDdJbU4xYzNSdmJXVnlYMmxrSWpvaVl6TWlmWDAuN1Y0M2x6NmhRV1dmQ0NoOHZiaUtxclQyUDBGS3hteXZuM0stSDBkU3VrcVZDRW03NDFJcmxXOHdGdHRrTlh5X05Jc0tiRnA2SHpUY1J1RHlLLXZoemc/Y3VzdG9tZXJfaWQ9IiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzY0cW01YnNicWZmZjloNmYvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4IiwiZmVhdHVyZXMiOlsidG9rZW5pemVfY3JlZGl0X2NhcmRzIl19LCJoYXNDdXN0b21lciI6dHJ1ZSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzY0cW01YnNicWZmZjloNmYvY2xpZW50X2FwaSIsImVudmlyb25tZW50Ijoic2FuZGJveCIsIm1lcmNoYW50SWQiOiI2NHFtNWJzYnFmZmY5aDZmIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJ2ZW5tbyI6Im9mZiIsImNoYWxsZW5nZXMiOltdLCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9vcmlnaW4tYW5hbHl0aWNzLXNhbmQuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS82NHFtNWJzYnFmZmY5aDZmIn0sInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjpmYWxzZSwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImFsbG93SHR0cCI6dHJ1ZSwiZGlzcGxheU5hbWUiOiJUaGlua2l0aXZlIFNvZnR3YXJlIHN5c3RlbXMgcHJpdmF0ZSBsaW1pdGVkIiwiY2xpZW50SWQiOiJBVlc1c3EzR0lnci1RdE1VVkpJRHQyZFJUZkRWNlFVZ1lPV2VlVlRDTHVCZDVMbnZaelU1U3A4bU95TTJhZ3lOSkFMNHgyQ0ZHZG5DcWlhQiIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImVudmlyb25tZW50Ijoib2ZmbGluZSIsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsIm1lcmNoYW50QWNjb3VudElkIjoidGhpbmtpdGl2ZXNvZnR3YXJlc3lzdGVtc3ByaXZhdGVsaW1pdGVkIiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn19';


   if (window.PaymentRequest) {
 	 $("#payment-request-button").show();
 	} else {
 		$("#payment-request-button").hide();
 	}


   var threeDSecureParameters = {
 		  amount: '500.00',
 		  email: 'test@example.com',
 		  billingAddress: {
 		    givenName: 'Jill', // ASCII-printable characters required, else will throw a validation error
 		    surname: 'Doe', // ASCII-printable characters required, else will throw a validation error
 		    phoneNumber: '8101234567',
 		    streetAddress: '555 Smith St.',
 		    extendedAddress: '#5',
 		    locality: 'Oakland',
 		    region: 'CA',
 		    postalCode: '12345',
 		    countryCodeAlpha2: 'US'
 		  },
 		  additionalInformation: {
 		    workPhoneNumber: '8101234567',
 		    shippingGivenName: 'Jill',
 		    shippingSurname: 'Doe',
 		    shippingPhone: '8101234567',
 		    shippingAddress: {
 		      streetAddress: '555 Smith St.',
 		      extendedAddress: '#5',
 		      locality: 'Oakland',
 		      region: 'CA',
 		      postalCode: '12345',
 		      countryCodeAlpha2: 'US'
 		    }
 		  },
 		};

   braintree.dropin.create({
     // Insert your tokenization key here
     authorization: clientTokenGenerated,
     container: '#dropin-container',
     vaultManager: true,
     /* threeDSecure: true, */
     paypal: {
     	 flow: 'checkout',
     	    amount: '10.00',
     	    currency: 'USD',
     	    buttonStyle: {
     	        color: 'blue',
     	        shape: 'rect',
     	        size: 'medium'
     	      }
       },
       venmo: {
     	  allowNewBrowserTab: false
       } ,
       googlePay: {
     	    googlePayVersion: 2,
     	    merchantId: 'BCR2DN6TZOS2PFLP',
     	    transactionInfo: {
     	      totalPriceStatus: 'FINAL',
     	      totalPrice: '123.45',
     	      currencyCode: 'USD'
     	    },
     	    allowedPaymentMethods: [{
     	      type: 'CARD',
     	      parameters: {
     	        // We recommend collecting and passing billing address information with all Google Pay transactions as a best practice.
     	        billingAddressRequired: true,
     	        billingAddressParameters: {
     	          format: 'FULL'
     	        }
     	      }
     	    }]
     	  },
     	  applePay: {
     		    displayName: 'My Store',
     		    paymentRequest: {
     		      total: {
     		        label: 'My Store',
     		        amount: '19.99'
     		      },
     		      // We recommend collecting billing address information, at minimum
     		      // billing postal code, and passing that billing postal code with all
     		      // Apple Pay transactions as a best practice.
     		      requiredBillingContactFields: ["postalAddress"]
     		    }
     	  },

   }, function (createErr, instance) {

     button.addEventListener('click', function () {
       instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
         // When the user clicks on the 'Submit payment' button this code will send the
         // encrypted payment information in a variable called a payment method nonce
         console.log(payload.nonce);
       });
     });


    /* this code is for 3d secure do not delete button.addEventListener('click', function (e) {
         e.preventDefault();
         instance.requestPaymentMethod({
           threeDSecure: threeDSecureParameters
         }).then(function (payload) {
             // Send payload.nonce to your server
             // The 3D Secure Authentication ID can be found
             //  at payload.threeDSecureInfo.threeDSecureAuthenticationId
             console.log(payload.threeDSecureInfo.threeDSecureAuthenticationId);
         }).catch(function (error) {
             // Handle error
         });
     }); */

   })


   braintree.client.create({
 	  authorization: clientTokenGenerated
 	}).then(function (clientInstance) {
 	  // Creation of any other components...

 	  return braintree.dataCollector.create({
 	    client: clientInstance,
 	    paypal: true
 	  }).then(function (dataCollectorInstance) {
 	    // At this point, you should access the dataCollectorInstance.deviceData value and provide it
 	    // to your server, e.g. by injecting it into your form as a hidden input.
 	    var deviceData = dataCollectorInstance.deviceData;
 	    console.log("device data"+deviceData);
 	  });
 	}).catch(function (err) {
 	  // Handle error in creation of components
 	});


   var paymentRequestButton = document.querySelector('#payment-request-button');



   braintree.client.create({
 	  authorization: clientTokenGenerated
 	}).then(function (clientInstance) {
 	  // Creation of any other components...
 		braintree.paymentRequest.create({
 			  client: clientInstance
 			}).then(function (instance) {
 				paymentRequestButton.addEventListener('click', function (event) {
 			    var amount = '100.00';

 			    instance.tokenize({
 			      details: {
 			        total: {
 			          label: 'Total',
 			          amount: {
 			            currency: 'USD',
 			            value: amount
 			          }
 			        }
 			      }
 			    }).then(function (payload) {
 			      // Send payload.nonce to your server
 			    	  console.log(payload.nonce);
 			    }).catch(function (err) {
 			      // Handle errors from processing payment request
 			    });
 			  });

 			}).catch(function (err) {
 			  // Handle errors from creating payment request instance
 			});
 	}).catch(function (err) {
 	  // Handle error in creation of components
 	});






   braintree.client.create({
 	  authorization: clientTokenGenerated
 	}).then(function (clientInstance) {
 	  // Create a Venmo component.
 	 braintree.venmo.create({
     client: clientInstance,
     allowDesktop: true,
     allowNewBrowserTab: false
     // Add allowNewBrowserTab: false if your checkout page does not support
     // relaunching in a new tab when returning from the Venmo app. This can
     // be omitted otherwise.
     // allowNewBrowserTab: false
   }).then(function (venmoInstance) {
     // Verify browser support before proceeding.
 		    if (!venmoInstance.isBrowserSupported()) {
 		      console.log('Browser does not support Venmo');
 		      return;
 		    }

 		    //displayVenmoButton(venmoInstance);

 		    // Check if tokenization results already exist. This occurs when your
 		    // checkout page is relaunched in a new tab. This step can be omitted
 		    // if allowNewBrowserTab is false.
 		    if (venmoInstance.hasTokenizationResult()) {
 		      venmoInstance.tokenize().then(handleVenmoSuccess).catch(handleVenmoError);
 		    }
 		  }).catch(function (venmoErr) {
 		    console.error('Error creating Venmo:', venmoErr);
 		  });


 	}).then(function (venmoInstance) {
 	  // ...
 	}).catch(function (err) {
 	  // Handle component creation error
 	});



   if (window.ApplePaySession && ApplePaySession.supportsVersion(3) && ApplePaySession.canMakePayments()) {
 	  $("#applePayButton").show();
 	}


 	braintree.client.create({
 	  authorization: clientTokenGenerated
 	}).then(function (clientInstance) {
 	  return braintree.applePay.create({
 	    client: clientInstance
 	  });
 	}).then(function (applePayInstance) {
 		var paymentRequest = applePayInstance.createPaymentRequest({
 			  total: {
 			    label: 'My Store',
 			    amount: '19.99'
 			  },

 			  // We recommend collecting billing address information, at minimum
 			  // billing postal code, and passing that billing postal code with
 			  // all Apple Pay transactions as a best practice.
 			  requiredBillingContactFields: ["postalAddress"]
 			});
 			console.log(paymentRequest.countryCode);
 			console.log(paymentRequest.currencyCode);
 			console.log(paymentRequest.merchantCapabilities);
 			console.log(paymentRequest.supportedNetworks);
 			applePayButton.addEventListener('click', function () {
 				applePayButton.disabled = true;
 				var session = new ApplePaySession(3, paymentRequest);

 				session.onvalidatemerchant = function (event) {
 					  applePayInstance.performValidation({
 					    validationURL: event.validationURL,
 					    displayName: 'My Store'
 					  }).then(function (merchantSession) {
 					    session.completeMerchantValidation(merchantSession);
 					  }).catch(function (validationErr) {
 					    // You should show an error to the user, e.g. 'Apple Pay failed to load.'
 					    console.error('Error validating merchant:', validationErr);
 					    session.abort();
 					  });
 					};

 					session.onpaymentauthorized = function (event) {
 						  console.log('Your shipping address is:', event.payment.shippingContact);

 						  applePayInstance.tokenize({
 						    token: event.payment.token
 						  }).then(function (payload) {
 						    // Send payload.nonce to your server.
 						    console.log('nonce:', payload.nonce);

 						    // If requested, address information is accessible in event.payment
 						    // and may also be sent to your server.
 						    console.log('billingPostalCode:', event.payment.billingContact.postalCode);

 						    // After you have transacted with the payload.nonce,
 						    // call `completePayment` to dismiss the Apple Pay sheet.
 						    session.completePayment(ApplePaySession.STATUS_SUCCESS);
 						    applePayButton.removeAttribute('disabled');
 						  }).catch(function (tokenizeErr) {
 							  applePayButton.removeAttribute('disabled');
 						    console.error('Error tokenizing Apple Pay:', tokenizeErr);
 						    session.completePayment(ApplePaySession.STATUS_FAILURE);
 						  });
 						};

 						session.begin();



 			    });
 	}).catch(function (err) {
 	  // Handle error
 	});
 }
  
  
  

  function displayVenmoButton(venmoInstance) {
	    // Assumes that venmoButton is initially display: none.
	   // venmoButton.style.display = 'block';
	
	    venmoButton.addEventListener('click', function () {
	      venmoButton.disabled = true;
	
	      venmoInstance.tokenize().then(function (payload) {
	        venmoButton.removeAttribute('disabled');
	
	        // ...
	      });
	    });
	  }

  

  function handleVenmoError(err) {
   console.log("venmo Failure");
  }

  function handleVenmoSuccess(payload) {
	  console.log(payload.nonce);
   
  }
  
  
  
  
  