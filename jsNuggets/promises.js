// javascript nuggets - promises

//async await
// consume/use prromises

//pendind ,Rected, Resolve, fulfilled

const value = 2

const promise = new promise((resolve, reject) =>{
    const random = Math.floor((Math.random * 3))
    if (random === value){

        resolve('you geusssed correctly')
    }else{
        reject('wrong Number')
    }
})

console.log(promise)

promise.then((data) => console.log(data).catch((err) => console.log(err)))
