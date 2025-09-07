let sumbitBtn = document.getElementById("sumbit").addEventListener("click", function(){
    const ans = document.getElementById("ans").value
    let feedback = document.getElementById("result")
    if ( ans === "kathmandu" ) {
        feedback.style.color = "green"
        feedback.innerHTML = `Correct!, The capital of Nepal is ${ans}`
    }else{
        feedback.style.color = "red"
        feedback.innerHTML =   `Invalid input ${ans}`
    }
})