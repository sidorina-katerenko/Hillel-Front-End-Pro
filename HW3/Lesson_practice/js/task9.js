document.write('<div><b>Задание 9:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

const num9 = parseInt(prompt('Введите натуральное число'));
let num9Even = 0;
let num9EvenSum = 0;

document.write('Делители числа ' + num9 + ': ')

for (i = 1; i <= num9; i++) {
    if (num9 % i !== 0) {
        continue;
    }

    document.write(i);

    if (i < num9) {
        document.write(', ');
    }
    
    if (i % 2 === 0) {
        num9Even++;
        num9EvenSum += i;
    }

}

document.write('<br>');
document.write('Количество четных делителей = ' + num9Even + ', их сумма = ' + num9EvenSum);

document.write('</div>');