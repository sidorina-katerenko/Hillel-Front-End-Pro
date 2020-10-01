document.write('<p style="font-weight: 700;">Задание 1</p>');

let amount1;
let myArray1 = [];

do {
    amount1 = parseInt(prompt('Введите количество чисел (больше или равно пяти)'));
} while (amount1 < 5)

for (let i = 0; i < amount1; i++) {
    myArray1.push(parseInt(prompt('Введите число #' + (i + 1))));
}

document.write('<p>Ваш массив: ' + myArray1 + '</p>');

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

document.write('<p>Мы его отсортировали: ' + myArray1.sort(compareNumeric) + '</p>');

myArray1.splice(2,3);

document.write('<p>И удалили со 2 по 4 элементы, остались: ' + myArray1 + '</p>');