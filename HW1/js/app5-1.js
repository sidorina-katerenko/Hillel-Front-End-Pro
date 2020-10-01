let bigBadNumber = parseInt(prompt('Enter a 5 digit number'));

let fifthDigit = bigBadNumber % 10;
bigBadNumber = (bigBadNumber - fifthDigit) / 10;
let fourthDigit = bigBadNumber % 10;
bigBadNumber = (bigBadNumber - fourthDigit) / 10;
let thirdDigit = bigBadNumber % 10;
bigBadNumber = (bigBadNumber - thirdDigit) / 10;
let secondDigit = bigBadNumber % 10;
bigBadNumber = (bigBadNumber - secondDigit) / 10;
let firstDigit = bigBadNumber % 10;

alert('Your number consists of the following digits: ' + firstDigit + ' ' + secondDigit + ' ' + thirdDigit + ' ' + fourthDigit + ' ' + fifthDigit);