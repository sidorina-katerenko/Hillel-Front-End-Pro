document.write('<div><b>Задание 5:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

const number5 = parseInt(prompt('Введите число'));
let powerOfThree = false;

for (let i = 1; (3 ** i) <= number5; i++) {
    if ((3 ** i) === number5) {
        powerOfThree = true;
        break;
    }
}

document.write('Число ' + number5 + (powerOfThree ? ' ' : ' не ') + 'является степенью тройки');

document.write('</div>');