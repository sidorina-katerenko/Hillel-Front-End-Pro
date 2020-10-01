document.write('<div><b>Задание 6:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

let sum6 = 0;

for (let i = 1; i <= 500; i++) {
    sum6 += i;
}

document.write('Среднее арифметическое чисел от 1 до 500 равно ' + (sum6 / 500));

document.write('</div>');