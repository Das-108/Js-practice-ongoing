let workTime = 25 * 60
let breakTime = 5 * 60
let currentTime = workTime
let isWorkPhase = true
let timerRunning = null
let remainigTime = document.getElementById("displayTime");

const startBtn = document.getElementById("start").addEventListener("click", function(){
    
    if(timerRunning === null){
        timerRunning = setInterval(() => {
            currentTime -= 1
            if(currentTime === 0){
        let sound = new Audio("/sound.mp3")
        sound.play()        
            if(isWorkPhase === true){
                currentTime = breakTime
                remainigTime.innerText = " Now break time"
            }else{
                currentTime = workTime
                remainigTime.innerText = " Now Work time"
            }
            isWorkPhase = !isWorkPhase                    
        }
            remainigTime.innerText = `Timing: ${formatTime(currentTime)}`
        },1000);
    }
    
});

const pauseBtn = document.getElementById("pause").addEventListener("click",function(){
    if (timerRunning != null) {
        clearInterval(timerRunning)
        timerRunning = null
        remainigTime.innerText = ` Timer has been paused. ${formatTime(currentTime)}`
    }
})
const resetBtn = document.getElementById("reset").addEventListener("click",function(){
    clearInterval(timerRunning)
    timerRunning = null
    isWorkPhase = true
    currentTime = workTime
    remainigTime.innerText = formatTime(workTime)
})
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60)
    let secs = seconds % 60
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}
