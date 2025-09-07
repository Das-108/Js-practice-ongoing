const messages ={ 
    happy: ["keep similing","Today is gift","Spread the joy!"],
    sad : ["Tough times pass","You're stronger than you feel","This shall too pass"],
    tired : ["Take a deep breath","Rest is productive too","You deserve a break"],
    angry : ["Pause. Breathe. Reset","Let go and grow", "Peace begins with you."]
}


let generateBtn = document.getElementById("generateMessage").addEventListener("click",function(){
    const inputName = document.getElementById("name").value
    const inputMood = document.getElementById("mood").value
    let messageBox = document.getElementById("result")
    if (!inputName || !inputMood){
        messageBox.innerHTML = "Please enter your name and mood"
        return
    }
    const moodMessage = messages[inputMood]
    const randomIndex = Math.floor(Math.random()* moodMessage.length)
    messageBox.innerHTML =  ` Hi ${inputName}, ${moodMessage[randomIndex]}`

})