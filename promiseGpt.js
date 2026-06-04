// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// a,d,c,b

// async function foo() {
//     console.log("1");
    
//     await Promise.resolve();
    
//     console.log("2");
// }

// console.log("3");
// foo();


// console.log("4");

// 3,1,4,2
// 1342


// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completed = 0;

//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then(result => {
//           results[index] = result;
//           completed++;

//           if (completed === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch(reject);
//     });
//   });
// }

// promiseAll()


setTimeout(()=>{
    console.log("settimeout")
},0)

setImmediate(()=>{
    console.log("setimmediate")
})