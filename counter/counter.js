let count = 0
let countNumber = document.getElementById("count")

const increaseBtn = document.getElementById("increase").addEventListener("click",function(){
    count += 1
    countNumber.textContent = "count: " + count
})

const decreaseBtn = document.getElementById("decrease").addEventListener("click", function(){
    count -=1
    countNumber.textContent = "count: " + count
})