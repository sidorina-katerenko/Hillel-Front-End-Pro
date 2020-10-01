document.write('<div><b>Задание 3:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

const number3 = parseInt(prompt('Введите целое число'));

document.write('Числа, квадрат которых не превышает ' + number3 + ': ')

for (let i = 1; i <= 100; i++) {
    if ((i ** 2) > number3) {
        break;
    }

    document.write(i + ' ');
}

document.write('</div>');
