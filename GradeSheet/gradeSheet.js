

const gradeBtn = document.getElementById("grades").addEventListener("click",function(){
    const inputName = document.getElementById("name").value
    const inputMarks = parseInt(document.getElementById("marks").value)
    let remarks = document.getElementById("result")
    let gmarks
    switch (true){
        case (inputMarks <= 100 && inputMarks >90):
        gmarks = "A";
        remarks.innerHTML = "Outstanding! 💫 "
        break;
        case(inputMarks < 90 && inputMarks >80):
        gmarks = "B";
        remarks.innerHTML = "Great job!"
        break;
        case(inputMarks < 80 && inputMarks >70):
        gmarks = "c"
        remarks.innerHTML =" Good , but you can improve"
        break;
        case (inputMarks < 70 && inputMarks < 60):
        gmarks = "D"
        remarks.innerHTML = "Can do better"
        break;
        case(inputMarks < 60 && inputMarks > 50):
        gmarks = "Needs inprovement"
        break;
        case(inputMarks < 50):
        gmarks = "Not Graded";
        remarks.innerHTML = " failed. Don't give"
    }
})