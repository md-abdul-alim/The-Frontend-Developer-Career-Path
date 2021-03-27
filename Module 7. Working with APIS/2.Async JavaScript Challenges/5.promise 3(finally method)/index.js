const promise = ()=>{
    return new Promise((resolve, reject)=>{
        reject(new Error("something went wrong."))
    })
}

const resolver = async (promise)=>{
    try{
        await promise()
    }catch(err){
        console.log(err)
    }finally{
        return 'I still return the value'
        console.log('I am here from finally.')
    }
}
(async function(){
    const test = await resolver(promise)
    console.log(test)
})();