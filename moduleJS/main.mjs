import { multiplication, summation, PI } from "./index.mjs";

console.log(multiplication(2000, 20));
let mul_result = multiplication(2000, 20);
console.log(summation(2000, 5550));
let sum_result = summation(2000, 20);
console.log(PI * summation(2000, 20));
let piResult = PI * summation(2000, 20);


let h1 = document.createElement("h4");
let h2 = document.createElement("h4");
let h3 = document.createElement("h4");

h1.textContent = "Multiplication Result: " + mul_result;
h2.textContent = "summation Result: " + sum_result;
h3.textContent = "piResult Result: " + piResult;

document.querySelector("body").appendChild(h1);
document.querySelector("body").appendChild(h2);
document.querySelector("body").appendChild(h3);