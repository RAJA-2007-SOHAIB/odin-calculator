const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const square = function(num1) {
    return num1 ** 2;
}


let firstNumber;
let secondNUmber;
let operator;

const operate = function(num1, num2, operand) {
    return operand(num1, num2);
}

console.log(operate(2, 3, add))