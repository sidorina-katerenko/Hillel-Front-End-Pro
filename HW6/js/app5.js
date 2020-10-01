function getNumbersToDelete() {
    let charsRemoved = [];
    const numOfChars = parseInt(prompt('Сколько символов хотите удалить?'));
    let charEntered;

    for (let i = 0; i < numOfChars; i++) {
        charEntered = prompt('Введите удаляемый символ №' + (i + 1));
        charsRemoved.push(charEntered);
    }

    return charsRemoved;
}

function deleteSymbols(message, symbols) {
    let ourMessageArray = message.split('');

    for (let i = 0; i < ourMessageArray.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            if (symbols[j] === ourMessageArray[i]) {
                ourMessageArray.splice(i, 1);
                i--;
            }
        }
    }

    return ourMessageArray.join('');
}

const yourPhrase = prompt('Имеете что сказать?');
const yourSymbols = getNumbersToDelete();
const result = deleteSymbols(yourPhrase, yourSymbols);

console.log(result);