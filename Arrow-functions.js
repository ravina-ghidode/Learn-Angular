// function DisplayName() {
//   return `Hello World`;
// }

// //Arrow Function
// const DisplayName = () => `Hello World by Ravina`;
// console.log(DisplayName());

// function greet(name) {
//   return `Hello, ${name}`;
// }

// //Arrow Function
// const greet = (name) => `Hello, ${name}`;
// console.log(greet("Ravina"));

// function calculateSum(a, b) {
//   return a + b;
// }
//Arrow Function
// const calculateSum = (a, b) => a + b;
// console.log(calculateSum(10, 20));

// const numbers = [1, 2, 3, 4];
// function MultiplySame(arr) {
//   let result = [];
//   arr.forEach((element) => {
//     result.push(element * element);
//   });
//   return result;
// }

//Arrow Function
// const numbers = [2, 2, 3, 4];
// const MultiplySame = (arr) => {
//   let result = [];
//   arr.forEach((element) => {
//     result.push(element * element);
//   });
//   return result;
// };
// const square = numbers.map((num) => num * num);
// console.log(square);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = nums.filter((n) => n % 2 == 0);
// console.log(even);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
// function calculateSum(arr) {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum = sum + element;
//   });
//   return sum;
// }
// console.log(calculateSum(nums));

// const sum = nums.reduce((total, n) => total + n, 0);
// console.log(sum);

// const isEven = (num) => (num % 2 == 0 ? "Even" : "Odd");
// console.log(isEven(5));
// console.log(isEven(10));
// console.log(isEven(15));
// console.log(isEven(50));

// const createUser = (name, age) => ({ name, age });
// console.log(createUser("Ravina", 23));

// const addAndMultiply = (a, b) => (c) => (a + b) * c;
// const result = addAndMultiply(2, 3)(4);
// console.log(result);

// const greet = (name = "Guest") => `Hello, ${name}`;
// console.log(greet());
// console.log(greet("Namnesh"));

// function CalculateFactorial(n) {
//   if (n == 1 || n == 0) {
//     return 1;
//   } else {
//     return n * CalculateFactorial(n - 1);
//   }
// }
// function Fact(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }
// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// console.log(Fact(3));
// console.log(CalculateFactorial(5));
// console.log(factorial(4));

const sumAll = (...n) => n.reduce((sum, num) => sum + num, 0);
console.log(sumAll(1, 2, 3, 4));
