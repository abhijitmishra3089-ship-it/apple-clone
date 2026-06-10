//  const promise=new Promise((res,rej)=>{
//     const success=true;
//     if(success){
//         res('success')
//     }else{
//         rej('error')
//     }
// })

// promise
// .then((mobileInput)=>{
//     console.log(mobileInput);
//     return "enter your mobile number"
// })
// .then((connectionSpeed)=>{
//     console.log(connectionSpeed);
//     return "check connection speed";
// })
// .then((webCam)=>{
//     console.log(webCam);
//     return "click image"
// })
// .then((shareScreen)=>{
//     console.log(shareScreen);
//     return "share your screen";
// })
// .then((testStarted)=>{
//     console.log(testStarted);  
// })
// .catch((err)=>{
//     console.log(err)
// })


fetch("a")
.then(a=>fetch(`b?x=${a.id}`))
.then(b=>fetch(`c?y=${b.id}`))
.then(c=>console.log(c))

async function fetch(){
    const a=await fetch(`b?x=${a.id}`)
    const b=await fetch(`c?y=${b.id}`)
    const c= console.log(a,b);
}

fetch()