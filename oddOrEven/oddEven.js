let checkBtn = document.getElementById("isEvenOrNot")
let showResult = document.getElementById("result")

checkBtn.addEventListener("click",function(){
    let input = document.getElementById("number").value
    if( input %2 == 0) {
        showResult.innerHTML= "Its is an even number" 
    }else {
        showResult.innerHTML = "It is a odd number"
    }
})