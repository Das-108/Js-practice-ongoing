let userHobby = document.getElementById("myHobbies")
let hobbies = document.getElementById("hobbiesList")

const addBtn = document.getElementById("addHobby").addEventListener("click", function(){
    let hobby = userHobby.value.trim()
    userHobby.value = ""

    if (hobby != ""){
        let list = document.createElement("li")
        list.innerText = hobby
        hobbies.appendChild(list)
    }
})