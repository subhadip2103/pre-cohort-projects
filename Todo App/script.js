let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '17/9/2024',
    },
    {
        item: 'Go to College',
        dueDate: '18/9/2024',
    }];
displayTodoMsg();
function Addtodo() {
    let inputvalue = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoTask = inputvalue.value;
    let todoDate = dateElement.value;

    todoList.push({ item: todoTask, dueDate: todoDate });
    inputvalue.value = '';
    dateElement.value = ''
    displayTodoMsg()


}
function displayTodoMsg() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
               <span>${item}</span>
               <span>${dueDate}</span>
               <button class="btn-delete" onclick="todoList.splice(${i}, 1);
               displayTodoMsg();">Delete</button>
            
         `;

    }
    containerElement.innerHTML = newHtml;



}