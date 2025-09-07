function isPrimenumber(num){
    if (num <= 1){
        console.log(" it is a negavtive number")
        return false
    }
    if( num === 2){
        console.log("it is a prime number")
        return true
    }
    for(let i = 3 ; i < num; i+=2){
       if (num % i === 0){
        console.log( " it is not a prime number")
        return false
       }
    }
    console.log("it is a prime number")
    return true
}
isPrimenumber(18)