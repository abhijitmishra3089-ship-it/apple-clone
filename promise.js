const promise=new Promise((res,rej)=>{
    const success=true;
    if(success){
        res('success!')
    }else{
        rej('error')
    }
})

promise
.then((qrScan)=>{
    console.log(qrScan);
    return qrScan;
})
.then((idFind)=>{
    console.log(idFind);
    return idFind;
})
.then((amount)=>{
    console.log(amount);
    return amount
})
.then((pin)=>{
    console.log(pin);
    return pin;
})
.then((initiatepayment)=>{
    console.log(initiatepayment);
    return initiatepayment;
})
.then((processpayment)=>{
    console.log(processpayment);
    return processpayment;
})
.then((success)=>{
    console.log(success);
})
.catch((err)=>{
    console.log(err)
})


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