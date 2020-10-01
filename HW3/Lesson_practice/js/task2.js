document.write('<div><b>Задание 2:</b></div>');
document.write('<div style="margin-bottom: 20px;">');
document.write('Квадраты чисел от 10 до 20: ');

for (let i = 10; i <= 20; i++) {
    document.write(i ** 2 + ' ');
}

document.write('</div>');