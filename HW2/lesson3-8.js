alert('Задание 8');
let number8 = parseInt(prompt('Введите шестизначное число'));

const sixthDigit8 = number8 % 10;
number8 = parseInt(number8 / 10);
const fifthDigit8 = number8 % 10;
number8 = parseInt(number8 / 10);
const fourthDigit8 = number8 % 10;
number8 = parseInt(number8 / 10);
const thirdDigit8 = number8 % 10;
number8 = parseInt(number8 / 10);
const secondDigit8 = number8 % 10;
number8 = parseInt(number8 / 10);
const firstDigit8 = number8 % 10;

if ((sixthDigit8 === firstDigit8) && (fifthDigit8 === secondDigit8) && (fourthDigit8 === thirdDigit8)) {
    alert('Это число - зеркальное');
} else {
    alert('Это число - не зеркальное');
}
