let addOp = document.getElementById("add");
let subtractOp = document.getElementById("subtract");
let multiplyOp = document.getElementById("multiply");
let divideOp = document.getElementById("divide");
let resultEL = document.getElementById("result-el");

addOp.addEventListener("click", function(){
    let firstNumber = parseFloat(document.getElementById("num1").value);
    let secondNumber = parseFloat(document.getElementById("num2").value);
    let sum = firstNumber + secondNumber;
    resultEL.innerHTML = "Sum: " + sum;
});

subtractOp.addEventListener("click", function(){
    let firstNumber = parseFloat(document.getElementById("num1").value);
    let secondNumber = parseFloat(document.getElementById("num2").value);
    if (firstNumber > secondNumber) {
        let sub = firstNumber - secondNumber;
        resultEL.innerHTML = "Subtraction: " + sub;
    } else {
        resultEL.innerHTML = "Subtraction not possible";
    }
});

multiplyOp.addEventListener("click", function(){
    let firstNumber = parseFloat(document.getElementById("num1").value);
    let secondNumber = parseFloat(document.getElementById("num2").value);
    let multiplication = firstNumber * secondNumber;
    resultEL.innerHTML = "Multiplication: " + multiplication;
});

divideOp.addEventListener("click", function(){
    let firstNumber = parseFloat(document.getElementById("num1").value);
    let secondNumber = parseFloat(document.getElementById("num2").value);
    if (secondNumber === 0) {
        resultEL.innerHTML = "Division by zero is not possible";
    } else {
        let division = firstNumber / secondNumber;
        resultEL.innerHTML = "Division: " + division;
    }
});
