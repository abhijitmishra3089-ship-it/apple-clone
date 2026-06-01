// const promise=new Promise((res,rej)=>{
//     const success=true;
//     if(success){
//         res('success!')
//     }else{
//         rej('error')
//     }
// })

// promise
// .then((qrScan)=>{
//     console.log(qrScan);
//     return qrScan;
// })
// .then((idFind)=>{
//     console.log(idFind);
//     return idFind;
// })
// .then((amount)=>{
//     console.log(amount);
//     return amount
// })
// .then((pin)=>{
//     console.log(pin);
//     return pin;
// })
// .then((initiatepayment)=>{
//     console.log(initiatepayment);
//     return initiatepayment;
// })
// .then((processpayment)=>{
//     console.log(processpayment);
//     return processpayment;
// })
// .then((success)=>{
//     console.log(success);
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally((done)=>{
//     console.log("process complete!")
// })

// const promise=new Promise((res,rej)=>{
//     const success=true;
//     if(success){
//         res('Qr scan for user!')
//     }else{
//         rej('error')
//     }
// })

// promise
// .then((qrScan)=>{
//     console.log(qrScan);
//     return "scan qr found user" ;
// })
// .then((idFind)=>{
//     console.log(idFind);
//     return "user found";
// })
// .then((amount)=>{
//     console.log(amount);
//     return "enter amount"
// })
// .then((pin)=>{
//     console.log(pin);
//     return "enter your pin";
// })
// .then((initiatepayment)=>{
//     console.log(initiatepayment);
//     return "payment initiaited";
// })
// .then((processpayment)=>{
//     console.log(processpayment);
//     return "payment process start";
// })
// .then((success)=>{
//     console.log("payment completed");
// })
// .catch((err)=>{
//     console.log(err)
// })


// why is this important ?because promise make async code esiear to read denbug and improve

// callback problem->differnt to read ,to debug to hundle errors conssitetly 

// promisify->wraping a callback based function in a promise , so it return a promise object isted of expecting a value.




 const promise=new Promise((res,rej)=>{
    const value=true
    if(value){
        res(1)
    }else{
        rej("error")
    }
 })

 promise
 .then((value)=>{
    console.log(value);
    return value;
 })
 .then((value2)=>{
    console.log(value2);
    return value2 +1;
 })
 .then((value3)=>{
    console.log(value3);
    return value3 +2;
 })
 .then((value4)=>{
   console.log("final value:",value4)
 })
 .catch((err)=>{
    console.log(err)
 })