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
    if (checkForZero(num1, num2)) {
        return num1 / num2;
    } return `cannot divide by zero`;
}

const checkForZero = function (num1, num2) {
    if (num2 == 0) {
        return false;
    } return true;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let calculated = false;

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
        firstNumber = "";
        secondNumber = "";
        operator = "";
    })
}

const operatorChosen = function () {
    return !!(operator);
}

const appendFirstNumber = function (value) {
    firstNumber += (value);
}

const appendSecondNumber = function (value) {
    secondNumber += (value);
}

const firstToFloat = function () {
    return parseFloat(firstNumber);
}

const secondToFloat = function () {
    return parseFloat(secondNumber);
}

const isOperator = function (event) {
    if (event.target.parentElement.classList.contains("func")) {
        return true;
    }
    return false;
}

const isEqualto = function (event) {
    if (event.target.classList.contains("equals")) {
        return true;
    }
    return false;
}

const convertOperatorValue = function (operator) {
    let result;
    if (operator === `+`) {
        result = add;
    } else if (operator === `-`) {
        result = subtract;
    } else if (operator === `*`) {
        result = multiply;
    } else if (operator === `/`) {
        result = divide;
    }
    return result;
}

const ifFirstNumberThen = function (event, expression, value) {
    if (!isOperator(event) && !operatorChosen() && !isEqualto(event)) {
        appendFirstNumber(value);
        expression.textContent = `${firstNumber}`;
    }
}

const ifSecondNumberThen = function (event, expression, value) {
    if (firstNumber && operatorChosen() && !isEqualto(event) && !isOperator(event)) {
        appendSecondNumber(value);
        expression.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
}

const ifOperatorThen = function (event, expression, value) {
    if (firstNumber && isOperator(event) && !operatorChosen() && !isEqualto(event)) {
        operator = value;
        expression.textContent = `${firstNumber} ${operator} `;
    }
}

const ifEqualToThen = function (event, answer, value) {
    if (firstNumber && secondNumber && operatorChosen() && !isOperator(event) && isEqualto(event)) {
        const operatingFunction = convertOperatorValue(operator);
        answer.textContent = operate(firstToFloat(), secondToFloat(), operatingFunction);
        calculated = true;
    }
}

const ifSecondOperatorThen = function (event, expression, value, answer) {
    if (!isOperator(event) || isEqualto(event)) return;
    if (isOperator(event)) {
        if (firstNumber && !(secondNumber)) {
            operator = value;
            expression.textContent = `${firstNumber} ${operator} `;
        } else if (!!(firstNumber) && !!(secondNumber)) {
            const operatingFunction = convertOperatorValue(operator);
            const result = operate(firstToFloat(), secondToFloat(), operatingFunction);
            answer.textContent = result;
            firstNumber = String(result);
            secondNumber = "";
            operator = value;
            expression.textContent = ` ${firstNumber} ${operator} `;
        }
    }
}


const buttonListener = function () {
    const buttons = document.querySelectorAll(".btn");
    const expression = document.querySelector(".expression");
    const answer = document.querySelector(".answer")
    buttons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const value = event.target.textContent;
            ifFirstNumberThen(event, expression, value);
            ifSecondNumberThen(event, expression, value);
            ifOperatorThen(event, expression, value);
            ifEqualToThen(event, answer, value);
            ifSecondOperatorThen(event, expression, value, answer);
        })
    })
}

AC();
buttonListener();
