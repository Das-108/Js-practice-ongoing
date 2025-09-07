function sumOfDigits(num){
    let sumOfDigits = 0
    while(num > 0){
        let digit = num %10;
        sumOfDigits += digit;
        num = Math.floor(num - digit)/10
    }
    return sumOfDigits
}
console.log(sumOfDigits(12))
