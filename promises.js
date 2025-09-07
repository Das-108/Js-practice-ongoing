let stocks = {
    fruits: ["strawberry","cup", "stick"],
    liquid: ["water","ice"],
    holder: ["cone", "cup","stick"],
    topplings: ["chocolate", "peanuts"]
}

let isShopOpen = true;

let order = (time, work) =>{
    return new Promise((resolve, reject) => {
        if(isShopOpen){

            setTimeout(() => {
                resolve( work())

            }, time);
        }else{
            reject(console.log("our shop is closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
    return order(0,()=>console.log("production has started"))
})

.then(()=>{

    return order(2000, ()=>console.log("the fruit was chopped"))
})

.then(()=>{

    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`))
})

.then(()=>{

    return order(1000, ()=> console.log("the machine is started"))
})

.then(()=>{

    return order(2000, ()=> console.log(`items are added in ${stocks.holder[1]}`))
})

.then(()=>{

    return order(3000,()=>console.log(`${stocks.topplings[0]} is used as topplings`))
})

.then(()=>{

    return order(2000, ()=> console.log("the icecream is served"))
})

.catch(()=>{
    console.log('Customer left ')
})

.finally(()=>{
    console.log('the day ended the shop is closed')
})