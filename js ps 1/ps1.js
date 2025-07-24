// let name="sachin";
// let number=5;
// let result=name+number;

// console.log(result)
// console.log(typeof result)

// const studentData={
//     name:"rohan",
//     age:18,
//     course:"cse",
//     grede:"A",
// }

// console.log(studentData)
// studentData.gender="male";
// console.log(studentData)
// console.log(studentData.name)


// let marks= {
//     harry:56,
//     rohan:84,
//     mohan:72,
//     sohan:98,
// }
// for (let i = 0; i < studentData.keys(marks); i++) {
//     console.log("The marks of"+ Object.keys(marks)+" are"+ marks[Object.keys[marks]])

// }

// const data = [
//     { name: "Alice", age: 25, salary: 50000 },
//     { name: "Bob", age: 30, salary: 60000 },
//     { name: "Charlie", age: 35, salary: 70000 },
//   ];

// let updatedSalary= data.map(person => person.salary*2);
// console.log(updatedSalary);

//question 1
// const products = [
//   { name: "Laptop", price: 1000, specs: { RAM: "8GB", storage: "256GB SSD" } },
//   { name: "Phone", price: 500, specs: { RAM: "6GB", storage: "128GB" } },
//   { name: "Tablet", price: 700, specs: { RAM: "4GB", storage: "64GB" } },
// ];

// let discountedPrice = products.map(product => {
//   return {
//     ...product,
//     discountedPrice: product.price - product.price * 10 / 100,
//   }
// })
// console.log(discountedPrice);

//question 2

// const students = [
//   "Alice:25:A",
//   "Bob:22:B",
//   "Charlie:28:C",
// ];
// let studentsList = students.map(student => {
//   let [name, age, grade] = student.split(":");

//   return {
//     Name: name,
//     Age: age,
//     grade: grade,

//   }
// }
// );
// console.log(studentsList);

//question 3

// const numbers = [3, 6, 9, 12, 15];

// numMsgArr=numbers.map(num=>{
//   if(num%5===0 && num%3===0){
//     return "FizzBuzz";
//   }
//   else if(num%5===0){
//     return "Buzz";
//   }
//   else if(num%3===0){
//     return "Fizz";
//   }
// });
// console.log(numMsgArr);

//question 4
// const categories = ["Electronics", "Clothing", "Grocery"];

// let noOfItems = categories.map(category => {
  
//   return {
    
//     [category]: category.length,
//   }
// });
// console.log(noOfItems);

//qeustion 5 
const nestedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

let combinedArray=nestedArray.flat();
let square=combinedArray.map(num=>num*num);

console.log(square);