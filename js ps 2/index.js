// problem 1
let age=59;

if(age>=10 && age<=20){
    console.log("This age is valid")
}
else{
    console.log("This age is not valid")
}
// problem 3
let a=71

if(a%2===0 && a%3===0){
    console.log("This number is divisible by 2 and 3")
}
else if(a%2===0 && a%3!==0){
    console.log("This nubmer is divisible by 2 but not divisible by 3")
}
else if(a%2!==0 && a%3===0){
    console.log("This nubmer is divisible by 3 but not divisible by 2")
}
else{
    console.log("This number is not divisible by both 2 and 3")
}
// problem 4
let b=59

if(b%2===0 || b%3===0 ){
    console.log("This number is either divisible by 2 or 3")
}
else{
    console.log("This number is not divisible by 2 or 3")
}
// problem 5
age=8

if(age>18){
    console.log("You can drive the car")
}
else{
    console.log("You cannot drive the car")
}
// alarm clock demonstration with if else
// let day="Friday"

// if(day==="Monday"){
//     console.log("wake up at 7 am")
// }
// else if(day==="Tuesday|| wednesday|| Thursday"){
//     console.log("wake up at 4 am")
// }
// else if(day==="Friday"){
//     console.log("wake up at 9 am")
// }
// else{
//     console.log("wake up at 8 am")
// }

// problem 2

let day="Tuesday"
switch(day){
    case "Monday":
        console.log("wake up at 7 am");
        break;
    case "Tuesday":
    case "wednesday":
    case "Thursday":
        console.log("wake up at 4 am");
        break;
    case "Friday":
        console.log("wake up at 9 am");
        break;
    case "saturday":
    case "sunday":
        console.log("wake up at 8 am")
        break;
}

