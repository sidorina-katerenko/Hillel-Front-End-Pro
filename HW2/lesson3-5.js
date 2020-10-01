alert('Задание 5');
const number5 = parseInt(prompt('Введите двузначное число'));

const firstDigit5 = parseInt(number5 / 10);
const secondDigit5 = number5 % 10;

if (firstDigit5 > secondDigit5) {
    alert('Первая цифра больше второй');
} else if (firstDigit5 < secondDigit5) {
    alert('Вторая цифра больше первой');
} else {
    alert('Цифры равны');
}