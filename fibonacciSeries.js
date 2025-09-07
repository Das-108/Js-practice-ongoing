let sum
let a = 0
let b = 1
let c =[]

function fibonacci(num){
    if(num >= 0){
        c.push(a)
    }
    if (num >= 1){
        c.push(b)
    }
    for(let i = 2; i <= num; i++){
        sum = a + b
        c.push(sum)
        a = b
        b = sum
    }
    console.log(c)
}
fibonacci(4)