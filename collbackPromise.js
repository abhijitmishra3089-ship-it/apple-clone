// function step1(callback){
//     setTimeout(()=>{
//         console.log("Step 1");
//         // callback(reason, value)
//         callback(null, 1);
//     }, 500);
// }


// function step2(prev, callback){
//     setTimeout(()=>{
//         console.log("Step 2 executed with: ", prev);
//         callback(null, prev+1);
//     }, 500)
// }


// function step3(prev, callback){
//     setTimeout(()=>{
//         console.log("Step 3 with: ", prev);
//         callback(null, prev+2)
// }, 500)
// }

// // step1((err, value1)=>{
// //     if(err) return console.error(err);
// //     step2(value1, (err, value2)=>{
// //         if(err) console.error(err);
// //         step3(value2, (err, value3)=>{
// //             if(err) return console.error(err);
// //             console.log("Final Result:", value3);
// //         })
// //     }) 
// // })  




// // Promisified 

// function step1Promise(){
//     return new Promise((resolve, reject)=>{
//         step1((err, result)=>{
//             if(err) reject(err);
//             else resolve(result);
//         })
//     })
// }

// function step2Promise(prev){
//     return new Promise((resolve, reject)=>{
//         step2(prev, (err, result)=>{
//             if(err) reject(err);
//             else resolve(result);
//         })
//     })
// }


// function step3Promise(prev){
//     return new Promise((resolve, reject)=>{
//         step3(prev, (err, result)=>{
//             if(err) reject(err);
//             else resolve(result);
//         })
//     })
// }


// step1Promise()
//     .then(value1=>step2Promise(value1))
//     .then(value2=>step3Promise(value2))
//     .then(final=>{
//         console.log("Final value return withL ", final);
//     })
//     .catch(err=>{
//         console.err("Error:", err);
//     })

// function step1Promise() {
//     return new Promise((resolve, reject) => {
//         resolve(1);
//     });
// }

// function step2Promise(prev) {
//     return new Promise((resolve, reject) => {
//         resolve(prev + 1);
//     });
// }

// function step3Promise(prev) {
//     return new Promise((resolve, reject) => {
//         resolve(prev + 2);
//     });
// }

// step1Promise()
//     .then(value1 => step2Promise(value1))
//     .then(value2 => step3Promise(value2))
//     .then(final => {
//         console.log("Final value returned:", final);
//     })
//     .catch(err => {
//         console.error("Error:", err);
//     });


//     function calcSum(a,b,callback) {
//         let sum=a+b
//         console.log(sum);
//         callback(sum);
//     }

//     function greet(sum){
//         console.log("the sum is:",sum)
//     }

//     calcSum(2,5,greet)



    function promise(a,b) {
        return new Promise((res,rej)=>{
            res(a+b);
        })
    }

    promise(2,3).then((data)=>{
        console.log("the sum is:",data)
    })