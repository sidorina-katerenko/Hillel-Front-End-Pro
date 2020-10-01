const myArray2 = [34, 'sjcbs', false, 73, '73', 23, 355, 'sandaliki', [1, 2, 3], 92];

function calculateAverageNumber(array) {
    let numbersAmount = 0;
    let numbersSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numbersAmount++;
            numbersSum += array[i];
        }
    }

    return (numbersSum / numbersAmount);
}

console.log('The average of numbers in the array equals ' + calculateAverageNumber(myArray2));