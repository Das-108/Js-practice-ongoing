// let inputNumber = document.getElementById("number").value
// let result = document.getElementById("isHappyNumber")

// const checkBtn = document.getElementById("check").addEventListener("click",function(){
//     for(i = inputNumber; i )
// })


// Function to check if a number is a happy number
function happy_number(num) {
    var m, n;
    var c = [];

    // Continue loop until the number becomes 1 or enters a cycle
    while (num !== 1 && c[num] !== true) {
        c[num] = true;
        m = 0;

        // Calculate the sum of the squares of digits
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }

        num = m;
    }

    return (num === 1);
}

// Variables to track the count and current number
var cnt = 5;
var num = 1;
var f5 = '';

// Find the first 5 happy numbers
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;

    f5 = f5 + (num + ", ");
    num++;
}
console.log('First 5 happy numbers are: ' + f5); 
