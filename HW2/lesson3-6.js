alert('Задание 6');
let number6 = parseInt(prompt('Введите трехзначное число'));

const thirdDigit6 = number6 % 10;
number6 = parseInt(number6 / 10);
const secongDigit6 = number6 % 10;
number6 = parseInt(number6 / 10);
const firstDigit6 = number6 % 10;

const sum6 = firstDigit6 + secongDigit6 + thirdDigit6
const product6 = firstDigit6 * secongDigit6 * thirdDigit6

if (sum6 % 2 === 0) {
    alert('Сумма цифр - четное число');
} else {
    alert('Сумма цифр - нечетное число');
}

if (sum6 % 5 === 0) {
    alert('Сумма цифр кратна пяти');
} else {
    alert('Сумма цифр не кратна пяти');
}

if (product6 > 100) {
    alert('Произведение цифр больше ста');
} else {
    alert('Произведение цифр меньше ста');
}