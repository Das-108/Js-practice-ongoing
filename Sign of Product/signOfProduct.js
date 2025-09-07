let result = document.getElementById("result")

const showBtn = document.getElementById("show").addEventListener("click",function(){
    let inputX = parseFloat(document.getElementById("x").value)
    let inputY = parseFloat(document.getElementById("y").value)
    let inputZ = parseFloat(document.getElementById("z").value)
    if (isNaN(inputX)|| isNaN(inputY) || isNaN(inputZ)){
        result.textContent = "Please enter vaild number"
    }else if( inputX < 0 && inputY < 0 && inputZ) {
        result.textContent = " The sign is -"
    }else if (inputX > 0 && inputY < 0 && inputZ < 0) {
        result.textContent = " The sign is -"
    }else if (inputX < 0 && inputY > 0 && inputZ < 0){
        result.textContent = "The sign is -"
    }else if (inputX < 0 && inputY < 0 && inputZ > 0) {
        result.textContent = "The sign is -"
    }else{
        result.textContent = "The sign is +"
    }
})