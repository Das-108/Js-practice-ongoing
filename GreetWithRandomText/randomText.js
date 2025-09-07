let randomText = ["Hope you're having a chill day!", "You're awesome","keepLearning and growing"]
let output = document.getElementById("result")
const generateBtn = document.getElementById("generateText")

generateBtn.addEventListener("click", function(){
const inputName = document.getElementById("name").value
const inputAge = parseFloat(document.getElementById("age").value)
    
    if (isNaN(inputAge) || inputAge < 0 ){
            output.innerHTML = " Invalid age"    
        }else {
            if(inputAge < 18){
            output.innerHTML = ` Hi ${inputName} ,you are ${inputAge} years old.<br>
                You're a minor`
            } else {
                output.innerHTML =`Hi ${inputName}, you are ${inputAge}.<br>
                you're an adult`
            }
    }
    randomTextGenerator()
})


function randomTextGenerator() {
    let show = Math.floor(Math.random()* randomText.length)
    let giveText = document.getElementById("randomText")
    giveText.innerHTML = randomText[show]
}
