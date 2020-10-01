'use strict';

function createImage(index, dataId) {
    const image = document.createElement('img');
    image.setAttribute('src', './img/' + digitNumbers[index] + '.png');
    image.setAttribute('data-id', dataId);

    return image;
}

function countSecondNumbers(number) {
    if (number < 9) {
        number++;
    } else {
        number = 0;
    }

    return number;
}

function countFirstNumbers(number) {
    if (number < 5) {
        number++;
    } else {
        number = 0;
    }

    return number;
}

function updateSeconds() {
    const image = document.querySelector('[data-id="second2"]');
    const image2 = document.querySelector('[data-id="second1"]');

    second2 = countSecondNumbers(second2);

    if (second2 === 0) {
        second1 = countFirstNumbers(second1);
        image2.setAttribute('src', './img/' + digitNumbers[second1] + '.png');
    }

    image.setAttribute('src', './img/' + digitNumbers[second2] + '.png');

    if (second1 === 0 && second2 === 0) {
        updateMinutes();
    }
}

function updateMinutes() {
    const image = document.querySelector('[data-id="minute2"]');
    const image2 = document.querySelector('[data-id="minute1"]');

    minute2 = countSecondNumbers(minute2);

    if (minute2 === 0) {
        minute1 = countFirstNumbers(minute1);
        image2.setAttribute('src', './img/' + digitNumbers[minute1] + '.png');
    }

    image.setAttribute('src', './img/' + digitNumbers[minute2] + '.png');
    
    if (minute1 === 0 && minute2 === 0) {
        updateHours();
    }
}

function updateHours() {
    const image = document.querySelector('[data-id="hour2"]');
    const image2 = document.querySelector('[data-id="hour1"]');

    if (hour1 < 2) {
        if (hour2 < 9) {
            hour2++;
        } else {
            hour2 = 0;
            hour1++;
            image2.setAttribute('src', './img/' + digitNumbers[hour1] + '.png');
        }
    } else {
        if (hour2 < 3) {
            hour2++;
        } else {
            hour2 = 0;
            hour1 = 0;
            image2.setAttribute('src', './img/' + digitNumbers[hour1] + '.png');
        }
    }

    image.setAttribute('src', './img/' + digitNumbers[hour2] + '.png');
}