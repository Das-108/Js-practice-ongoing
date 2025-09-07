// function one(call_two){
//         call_two();
//     console.log("step 1 complete call two ");
// }

// function two(){
//     console.log("step 2")
// }

// one(two);
// // two();

let stocks = {
    fruits : ["strawberry", "grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup", "stick"],
    topplings : ["cholate", "peanuts"],
}

console.log(stocks.fruits[2])


let order = (Fruit_name,call_production) =>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[Fruit_name]} was selected`)
            call_production();
    },2000)
}

let production =() =>{
    setTimeout(()=>{
        console.log("production has started")

        setTimeout(() => {
            console.log("chopping has started")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(() => {
                    console.log("the was started")

                    setTimeout(()=>{
                        console.log(` Ice cream is placed on ${stocks.holder[0]}`)

                        setTimeout(() => {
                            console.log(`${stocks.topplings[0]} was added`)

                            setTimeout(() => {
                                console.log("the icecream was server")
                            }, 2000);
                        }, 3000);
                    },1000)
                },1000);
            }, 1000);
        }, 2000);
    },)
   
}

order(0,production);