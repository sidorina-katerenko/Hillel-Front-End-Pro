document.write('<div><b>Задание 10:</b></div>');
document.write('<div style="display: flex; flex-wrap: wrap;">');

for (let i = 1; i <= 10; i++) {
    document.write('<span style="width: 20%; margin-bottom: 20px;">');

    for (let j = 1; j <= 10; j++) {
        document.write(i + ' * ' + j + ' = ' + (i * j) + '<br>');
    }

    document.write('</span>');
}

document.write('</div>');