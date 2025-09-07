let result = document.getElementById("output")

const checkBtn = document.getElementById("check").addEventListener("click", function(){
    let firstNumber = parseFloat(document.getElementById("num1").value)
    let secondNumber = parseFloat(document.getElementById("num2").value)
    
    if(firstNumber < secondNumber){
        result.textContent = `The largest number is ${secondNumber}`
    }else{
        result.textContent =`The largest number is ${firstNumber}`
    }
})