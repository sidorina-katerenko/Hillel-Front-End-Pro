document.write('<div><b>Задание 8:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

for (let i = 100; i <= 200; i++) {
  if (i % 3 !== 0) {
      continue;
  }
  document.write(i + ' ');
}

document.write('</div>');