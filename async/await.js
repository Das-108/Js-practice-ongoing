let stocks = {
    fruits: ['strawberry','grapes','banna','apple'],
    liquid: [ 'water','ice'],
    holder: [ 'cone','cup','stick'],
    toppings: [ 'chocolates','peanuts'],
}

let is_shop_open = true

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        }else{
            reject(console.log('shop is closed'))
        }
    })
}

async function Kitchen(params) {
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]}`)

        await time(2000)
        console.log(`cut the fruit`)

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("Start machine")

        await time(2000)
        console.log(`${stocks.holder[0]} is selected as container`)

        await time(3000)
        console.log(`${stocks.toppings[0]} is used as toppings`)

        await time(2000)
        console.log('ice cream is served')
    }
    catch(error){
        console.log('customer left', error)
    }
    finally{
        console.log('day ended, shop is closed')
    }
}

Kitchen()