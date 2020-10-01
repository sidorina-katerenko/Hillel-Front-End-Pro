document.write('<div><b>Задание 1:</b></div>');
document.write('<div style="margin-bottom: 20px;">');
document.write('Числа от 10 до 20: ');

for (let i = 10; i <= 20; i++) {
    document.write(i);

    if (i < 20) {
        document.write(', ');
    }
}

document.write('</div>');