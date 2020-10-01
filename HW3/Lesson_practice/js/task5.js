document.write('<div><b>Задание 5:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

let product = 1;

for (let i = 15; i <= 35; i++) {
    product *= i;
}

document.write('Произведение всех чисел от 15 до 35 равно ' + product);

document.write('</div>');