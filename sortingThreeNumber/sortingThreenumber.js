

let result = document.getElementById("result")

const sortBtn = document.getElementById("sort").addEventListener("click",function(){
    let firstNumber = parseInt(document.getElementById("num1").value)
    let secondNumber = parseInt(document.getElementById("num2").value)
    let thridNumber = parseInt(document.getElementById("num3").value)

    if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thridNumber)){
        result.textContent = "Please enter vaild Number"
    }if (firstNumber > secondNumber && firstNumber > thridNumber){
        if (secondNumber > thridNumber ){
            result.textContent = firstNumber + "," +  secondNumber + "," + thridNumber
        }else if ( thridNumber > secondNumber){
            result.textContent = firstNumber +  "," + thridNumber  + "," + secondNumber
        }
    }else if (secondNumber > firstNumber && secondNumber > thridNumber){
        if(firstNumber > thridNumber ){
            result.textContent = secondNumber + "," + firstNumber + "," + thridNumber
        }else if ( thridNumber > firstNumber){
            result.textContent = secondNumber + "," + thridNumber + "," + firstNumber
        }
    }else if (thridNumber > firstNumber && thridNumber > secondNumber) {
        if( firstNumber > secondNumber){
            result.textContent = thridNumber + "," +  firstNumber + "," + secondNumber
        }else if (secondNumber > firstNumber) {
            result.textContent = thridNumber + "," + secondNumber + "," + firstNumber
        }
    }
})