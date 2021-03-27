//There are 3 type promise

//i.Successful Promise
function successfulPromise(){
    //inside promise there will be resolve and reject
    return new Promise((resolve, reject)=>{
        resolve('success')
    })
}

//ii.Rejected Promise
function rejectedPromise(){
    return new Promise((resolve, reject)=>{
        reject(new Error('Here is our error!'))
    })
}

//iii.Pending Promise: when the promise is not resolve or not rejected
function pendingPromise(){
    return new Promise((resolve, reject)=>{
        const interval = setInterval(()=> console.log('pending'),1000)
        setTimeout(()=>{
            clearInterval(interval)
            resolve('success after 4 second')
        }, 4000)
    })
}
//to run promise we need immediate invoke js function.
//here we will use async function

(async function(){
    try{
        const successResult = await successfulPromise()
        console.log(successResult)

        const pendingResult = await pendingPromise()
        console.log(pendingResult)

        const rejectResult = await rejectedPromise()
        console.log(rejectResult)

    }catch(err){
        console.log(err)
    }
})();

console.log('----------------------')

//Practice promise

