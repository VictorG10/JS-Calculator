let num1 = window.prompt("Enter num1: ");
let num2 = window.prompt("Enter num2: ");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
    console.log("add clicked");
}

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
    console.log("subtract clicked");
}

function divide() {
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
    console.log("divide clicked");
}

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
    console.log("multiply clicked");
}
