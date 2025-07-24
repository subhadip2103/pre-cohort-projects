let todolist = [];
let taskDates = [];

function getUserName() {
    const userName = prompt("Enter your name:");
    if (userName) {
        let welcomeContainer = document.querySelector('#welcome-container');
        welcomeContainer.innerHTML = `<p class="welcome-text">Have a productive day ahead, <strong>${userName}</strong>!`;
    }
}

function addtask() {
    let inputelement = document.querySelector('#todo-display');
    let dateelement = document.querySelector('#date-display');  // Corrected 'Date-display' to 'date-display'
    let todotask = inputelement.value;
    let taskDate = dateelement.value;

    if (todotask && taskDate) {
        todolist.push(todotask);
        taskDates.push(taskDate);
        inputelement.value = '';
        dateelement.value = '';

        // Call Displaytodo after adding the task
        Displaytodo();
    }
}

function Displaytodo() {
    let toDo = '';
    for (i = 0; i < todolist.length; i++) {
        toDo += `
        <div class="sticky-note">
          <span>${todolist[i]}</span>
          <span>${taskDates[i]}</span>
          <button onclick="deleteTasks(${i})">Delete</button>
        </div>
        `;
    }
    let msgDisplay = document.querySelector('#containerElement');
    msgDisplay.innerHTML = toDo;
}

function deleteTasks(index) {
    let stickyNote = document.querySelectorAll('.sticky-note')[index];

    // Add the shake class to animate shaking
    stickyNote.classList.add('shake');

    // After the shake animation ends (1000ms), make it disappear
    setTimeout(() => {
        stickyNote.classList.remove('shake');
        stickyNote.classList.add('disappear');  // Fade out

        // After fade out, remove the task from the list
        setTimeout(() => {
            todolist.splice(index, 1);
            taskDates.splice(index, 1);
            Displaytodo();  // Re-render the to-do list
        }, 500);  // Wait another 500ms for the fade-out effect
    }, 1000);  // Shake for 1000ms before fading out
}



function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33D4'];
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 5000); // Changes every 5 seconds
}

// Initializing the dynamic background color change on page load
window.onload = function () {
    getUserName();
    changeBackgroundColor();
};
