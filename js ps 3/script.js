let todoList = [];

function AddTodoTask() {
    let todoContainer = document.querySelector(".todo-task-conatainer");
    let dateConatiner = document.querySelector(".date-container");

    let todoTask = todoContainer.value;
    let todoDate = dateConatiner.value;

    if (todoTask && todoDate) {
        todoList.push({ task: todoTask, date: todoDate })
    }
    else{
        alert("Enter both Task and Date");
    }
    
    todoContainer.value="";
    todoDate.value="";

}
function displayTodoTask() {
    todoDisplay = document.querySelector(".todo-tasks-section");
    todoDisplay.innerHTML='';
    da

    for(let i=0;i<todoList.length;i++){
        todoDisplay.HTML+=`
        <div class="task">
          <span>${todoList[i].task} - ${todoList[i].date}</span>
          <button>Delete</button>
        </div>`
    }
}
