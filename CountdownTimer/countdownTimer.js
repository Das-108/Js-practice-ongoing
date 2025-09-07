let currentTime;
let intervalId = null;
let remainingTime = document.getElementById("timeLeft")

const startBtn = document.getElementById("start").addEventListener("click", function(){
    let inputTime = parseInt(document.getElementById("timer").value)
    if ( intervalId === null){
        currentTime = inputTime
        intervalId = setInterval(() => {
            currentTime -= 1
            remainingTime.innerText = `Remaining Time: ${currentTime}`
            if(currentTime === 0) {
                clearInterval(intervalId)
                intervalId = null
            }
        }, 1000);
    }
})
const pauseBtn = document.getElementById("pause").addEventListener("click",function(){
    if (intervalId != null){
        clearInterval(intervalId)
        intervalId = null
    }
})
const resetBtn = document.getElementById("reset").addEventListener("click",function(){
    if ( intervalId != null ){
        clearInterval(intervalId)
        intervalId = null
    }
    currentTime = 0
    let inputTime = document.getElementById("timer")
    inputTime.value = ""
    remainingTime.innerText = ""
})