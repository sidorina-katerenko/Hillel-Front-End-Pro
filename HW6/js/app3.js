function doMath(x, operation, y) {
    switch(operation) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '%':
            return x % y;
            break;
        case '^':
            return x ** y;
            break;
    }
}

function checkOperationValidity(symbol, listOfSymbols) {
    let symbolValidity = true;

    for (let i = 0; i < listOfSymbols.length; i++) {
        if (symbol === listOfSymbols[i]) {
            symbolValidity = false;
            break;
        }
    }

    return symbolValidity;
}

const validSymbols = ['+', '-', '*', '/', '%', '^'];
let firstNumber3;
let secondNumber3;
let operation;

do {
    firstNumber3 = parseInt(prompt('Введите первое число'));
} while (firstNumber3 !== firstNumber3);

do {
    secondNumber3 = parseInt(prompt('Введите второе число'));
} while (secondNumber3 !== secondNumber3 || secondNumber3 === 0);

do {
    operation = prompt('Введите знак (+, -, *, /, %, ^)');
} while (checkOperationValidity(operation, validSymbols));

const result = doMath(firstNumber3, operation, secondNumber3);
alert('Результат операции над введенными числами равен ' + result);