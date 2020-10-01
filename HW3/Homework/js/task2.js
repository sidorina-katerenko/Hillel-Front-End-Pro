document.write('<div><b>Задание 2:</b></div>');
document.write('<div style="margin-bottom: 20px;">');
document.write('Если $1 = 27 гривен, то:<br>');

const dollar = 27;

for (let i = 10; i <= 100; i += 10) {
    document.write(i + ' долларов = ' + (i * 27) + ' гривен' + '<br>');
}

document.write('</div>');