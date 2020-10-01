alert('Задание 1');
const numberOne1 = parseInt(prompt('Первое число'));
const numberTwo1 = parseInt(prompt('Второе число'));

if (numberOne1 > numberTwo1) {
    alert('Первое число больше второго');
} else if (numberOne1 < numberTwo1) {
    alert('Второе число больше первого');
} else {
    alert('Числа равны');
}
