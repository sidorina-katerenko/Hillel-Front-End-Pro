function createSliderButton(className, innerText) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = `slider-button ${className}`;
    button.innerText = innerText;

    return button;
}

function goToNextSlide() {
    sliderInterval();

    if (imageIndex < (imagesList.length - 1)) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }

    sliderImage.src = `./img/${imagesList[imageIndex]}`;

    sliderInterval();
}

function goToPrevSlide() {
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = imagesList.length - 1;
    }

    sliderImage.src = `./img/${imagesList[imageIndex]}`;
}

function sliderInterval() {
    if (isIntervalRunning) {
        clearInterval(myInterval);
        isIntervalRunning = false;
    } else {
        myInterval = setInterval(goToNextSlide, 3000);
        isIntervalRunning = true;
    }
}