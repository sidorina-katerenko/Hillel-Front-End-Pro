alert('Задание 4');
const number4 = parseInt(prompt('Введите любое число'));

const lastDigit4 = number4 % 10;

if (lastDigit4 % 2 === 0) {
    alert('Число заканчивается четной цифрой: ' + lastDigit4);
} else {
    alert('Число заканчивается нечетной цифрой: ' + lastDigit4);
}