/*This faulty calculator doest the following:
1.It takes two numbers as input from the users
2.It performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations only 10% of the time */

reset();

let num1 = parseFloat(prompt('Enter your 1st number'));
let num2 = parseFloat(prompt('Enter your 2nd number'));
let operation = prompt('Enter an operation you want to perform (+, -, *, /)');
let randomNumber = Math.random();

document.querySelector('.display input').value = faultyOutput();

function faultyOutput() {
    if (randomNumber <= 0.1) {
        // Faulty operations
        if (operation === '+') {
            return num1 - num2;
        } else if (operation === '*') {
            return num1 + num2;
        } else if (operation === '-') {
            return num1 / num2;
        } else if (operation === '/') {
            return num1 ** num2;
        }
    } else {
        // Correct operations
        if (operation === '+') {
            return num1 + num2;
        } else if (operation === '*') {
            return num1 * num2;
        } else if (operation === '-') {
            return num1 - num2;
        } else if (operation === '/') {
            return num1 / num2;
        }
    }
}
function reset(){
    document.querySelector('.display input').value=''
}
