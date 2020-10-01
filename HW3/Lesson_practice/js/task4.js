document.write('<div><b>Задание 4:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

document.write('Сумма всех чисел от 1 до 15 равна ' + sum);

document.write('</div>');