const button = document.querySelector('.button-add-task')

const input = document.querySelector('.input-task')
const completList = document.querySelector('.list-tasks')

let myListOfTasks = []



function addNewTask(){
    myListOfTasks.push({
        task : input.value,
        checked : false
    })
    input.value = ''

    showTasks()
}

function showTasks() {

    let novaLi = ''

    myListOfTasks.forEach((item, position) => {

        novaLi = novaLi + `
        
        <li class="task ${item.checked && "done"}" onclick="checkTask(${position})">
            <img src="./img/checked.png.png" alt="checked">
             <p>${item.task}</p>
            <img src="./img/trash.png.png" alt="done-task" onclick="deleteTask(${position})">
        </li>
          
        `
    })

    completList.innerHTML = novaLi

    localStorage.setItem('list', JSON.stringify(myListOfTasks))


}

function checkTask(position) {
    myListOfTasks[position].checked = !myListOfTasks[position].checked

    showTasks()
}

function deleteTask(position) {
    myListOfTasks.splice(position, 1)

    showTasks()
}

function reloadTasks(){
    const tasksFromLocalStorage = localStorage.getItem('list')
    myListOfTasks = JSON.parse(tasksFromLocalStorage)
    showTasks()
}


reloadTasks()
button.addEventListener('click', addNewTask)