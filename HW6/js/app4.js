function createTwoDimensionalArray() {
    const length = parseInt(prompt('Введите длину двумерного массива'));
    let ourAwesomeArray = [];
    let lengthInternal;
    let itemInternal;

    for (let i = 0; i < length; i++) {
        ourAwesomeArray.push([]);
        lengthInternal = parseInt(prompt('Введите длину внутреннего массива №' + (i + 1)));

        for (let j = 0; j < lengthInternal; j++) {
            itemInternal = prompt('Введите элемент ' + (i + 1) + '-го массива №' + (j + 1));
            ourAwesomeArray[i].push(itemInternal);
        }
    }

    return ourAwesomeArray;
}

const result = createTwoDimensionalArray();

console.log(result);