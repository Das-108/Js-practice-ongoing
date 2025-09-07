
let greetBtn = document.getElementById("greet-btn")
let greetingsEl = document.getElementById("greetings")

greetBtn.addEventListener("click", function(){
    let nameEl = document.getElementById("name").value
    let ageEl =document.getElementById("age").value
    console.log(typeof ageEl)
    // ageEl=parseInt(ageEl)
    if (ageEl< 18){
        greetingsEl.innerText = ` Hey Kiddo ${nameEl}`
    }else{
        greetingsEl.innerText= `Hello ${nameEl}`
    }
})