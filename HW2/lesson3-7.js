alert('Задание 7');
let number7 = parseInt(prompt('Введите трехзначное число'));

const thirdDigit7 = number7 % 10;
number7 = parseInt(number7 / 10);
const secongDigit7 = number7 % 10;
number7 = parseInt(number7 / 10);
const firstDigit7 = number7 % 10;

if ((firstDigit7 === secongDigit7) && (secongDigit7 === thirdDigit7)) {
    alert('Все цифры равны');
} else if ((firstDigit7 === secongDigit7) || (secongDigit7 === thirdDigit7) || (firstDigit7 === thirdDigit7)) {
    alert('Не все цифры равны, но есть одинаковые числа');
} else {
    alert('В числе нет одинаковых чисел');
}

