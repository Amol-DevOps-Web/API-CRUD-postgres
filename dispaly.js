let varTval = new Promise((resolve,reject)=>{
    let i =7
    if(i != 3 ){
      resolve("Successfully....!");
    }else{
        reject("Unsuccessfully....!");
    }

})
let i=3;
varTval.then((resolve)=>{
 console.log(resolve)
}).catch((reject)=>{
  console.log(reject)
})