document.write('<p style="font-weight: 700;">Задание 2</p>');

let myArray2 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumOfPositive = 0;
let amountOfPositive = 0;
let amountOfNegative = 0;
let minElement = 0;
let minElementId;
let maxElement = 0;
let maxElementId;
let amountOfEven = 0;
let sumOfEven = 0;
let amountOfOdd = 0;
let sumOfOdd = 0;
let productOfPositive = 1;

document.write('<p>Исходный массив: ' + myArray2.join(', ') + '</p>');

for (let i = 0; i < myArray2.length; i++) {
    if (myArray2[i] > 0) {
        amountOfPositive++;
        sumOfPositive += myArray2[i];
        productOfPositive *= myArray2[i];

        if (myArray2[i] % 2 === 0) {
            amountOfEven++;
            sumOfEven += myArray2[i];
        } else {
            amountOfOdd++;
            sumOfOdd += myArray2[i];
        }
        
    } else if (myArray2[i] < 0) {
        amountOfNegative++;
    }

    if (myArray2[i] < minElement) {
        minElement = myArray2[i];
        minElementId = i;
    }

    if (myArray2[i] > maxElement) {
        myArray2[maxElementId] = 0;
        maxElement = myArray2[i];
        maxElementId = i;
    } else {
        myArray2[i] = 0;
    }
}

document.write('<p>Сумма положительных элементов: ' + sumOfPositive + ', их количество: ' + amountOfPositive + '</p>');
document.write('<p>Минимальный элемент массива: ' + minElement + ', его порядковый номер: ' + minElementId + '</p>');
document.write('<p>Максимальный элемент массива: ' + maxElement + ', его порядковый номер: ' + maxElementId + '</p>');
document.write('<p>Количество отрицательных элементов: ' + amountOfNegative + '</p>');
document.write('<p>Количество нечетных положительных элементов: ' + amountOfOdd + '</p>');
document.write('<p>Количество четных положительных элементов: ' + amountOfEven + '</p>');
document.write('<p>Сумма четных положительных элементов: ' + sumOfEven + '</p>');
document.write('<p>Сумма нечетных положительных элементов: ' + sumOfOdd + '</p>');
document.write('<p>Произведение положительных элементов: ' + productOfPositive + '</p>');
document.write('<p>Массив, где все элементы, кроме наибольшего - нули: ' + myArray2 + '</p>');
