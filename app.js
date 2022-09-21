// variebles

const addTask = document.getElementById("add-task")
const taskContainer = document.getElementById("task-container")
const inputTask = document.getElementById("input-task")



// events

addTask.addEventListener("click", function () {
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = (inputTask.value)
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)

    // validation
    if (inputTask.value === "") {
        alert('please enter a Task')
    } else {
        taskContainer.appendChild(task)
    }

    inputTask.value = "";

    checkButton.addEventListener("click", function () {
        checkButton.parentElement.style.textDecoration = "line-through"
    })


    deleteButton.addEventListener("click", function (e) {
        let target = e.target
        target.parentElement.parentElement.remove()

    })
})
// ive problem with the delete function sometimes when  you delete a task it remove all the task
// and also the add task fuction is not working after you deleted other task