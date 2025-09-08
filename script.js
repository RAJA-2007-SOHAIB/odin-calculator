// calculator functions
const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    return num1 / num2;
}

const square = function (num1) {
    return num1 ** 2;
}


let firstNumber = "";
let secondNumber = "";
let operator = "";
let pressed = false;


const operate = function (num1, num2, operand) {
    return operand(num1, num2);
}


const AC = function () {
    const clear = document.querySelector(".clear");
    clear.addEventListener("click", (event) => {
        const answer = document.querySelector(".answer");
        answer.textContent = "0";
        const expression = document.querySelector(".expression");
        expression.textContent = "";
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
    })
}


const operatorChosen = function () {
    return (operator) ? true : false;
}


const readyToCalculate = function () {
    return (pressed) ? true : false;
}


const equalListener = function () {
    const equal = document.querySelector(".equal");
    equal.addEventListener("click", (event) => {
        if (firstNumber && operator && secondNumber) {
            pressed = true;
        }
    })
}


const appendFirstNumber = function (value) {
    firstNumber += toString(value);
}


const appendSecondNumber = function (value) {
    secondNumber += toString(value);
}

const firstToFloat = function () {
    firstNumber = parseFloat(firstNumber);
}

const secondToFloat = function () {
    secondNumber = parseFloat(secondNumber);
}


