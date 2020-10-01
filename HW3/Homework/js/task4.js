document.write('<div><b>Задание 4:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

const number4 = parseInt(prompt('Введите целое число больше 1'));
let isSimple = true;

for (let i = 2; i < number4; i++) {
    if (number4 % i === 0) {
        isSimple = false;
        break;
    }
}

document.write('Число ' + number4 + (isSimple ? ' ' : ' не ') + 'является простым');

document.write('</div>');