
    let inputTask = document.getElementById("task")
    let taskList = document.getElementById("taskList")

    const addTaskBtn = document.getElementById("addTask").addEventListener("click", function(){
        let task = inputTask.value.trim()
        inputTask.value = ""
        if(task !== ""){
            let li = document.createElement("li")
            li.innerText = task
            taskList.appendChild(li)
        }
    })
