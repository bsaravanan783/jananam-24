const PayU = require("payu");
require('dotenv').config();

const payuClient = new PayU({
  key: process.env.PAYU_MERCHANT_KEY,  
  salt: process.env.PAYU_MERCHANT_SALT 
}, process.env.PAYU_ENVIRONMENT || "TEST");  


payuClient.paymentInitiate(<JSON>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});

payuClient.verifyPayment(<txnID>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});


payuClient.getTransactionDetails(<START_DATE>,<END_DATE>).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});