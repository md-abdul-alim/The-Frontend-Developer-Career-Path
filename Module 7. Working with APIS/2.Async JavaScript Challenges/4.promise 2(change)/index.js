const randomBool = Boolean(Math.round(Math.random())) //return either 0 or 1


const getHero = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(randomBool){
                resolve('batman is here')
            }else{
                reject(new Error('hero is on vacation'))
            }
        },1000)
    })
}

(async function(){
    try{
        const result = await getHero()
        console.log(result)
    }catch(err){
        console.log(err)
    }
})();