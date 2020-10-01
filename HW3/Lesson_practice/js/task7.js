document.write('<div><b>Задание 7:</b></div>');
document.write('<div style="margin-bottom: 20px;">');

let sumOfEven = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 !== 0) {
      continue;
  }
  sumOfEven += i;
}

document.write('Сумма четных чисел от 30 до 80 равна ' + sumOfEven);

document.write('</div>');