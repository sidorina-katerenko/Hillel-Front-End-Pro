alert('Задание 3');
const numberOne2 = parseInt(prompt('Введите число a'));
const numberTwo2 = parseInt(prompt('Введите число b'));

if (numberOne2 % numberTwo2 === 0) {
    alert('b является делителем a');
} else if (numberTwo2 % numberOne2 === 0) {
    alert('a является делителем b');
} else {
    alert('Числа не являются делителями друг друга');
}