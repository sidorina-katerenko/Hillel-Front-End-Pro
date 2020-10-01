const imagesList = ['beard.jpg', 'loneliness.jpg', 'manual.jpg', 'omnomnom.jpg', 'programmer.jpg'];
const wrapper = document.getElementById('wrapper');
let imageIndex = 0;

function createSliderButton(className, innerText) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('slider-button');
    button.classList.add(className);
    button.innerText = innerText;

    return button;
}

function goToNextSlide() {
    if (imageIndex === 0) {
        prevButton.disabled = false;
    }

    if (imageIndex < (imagesList.length - 1)) {
        imageIndex++;
        sliderImage.setAttribute('src', ('./img/' + imagesList[imageIndex]));
    }

    if (imageIndex === (imagesList.length - 1)) {
        nextButton.disabled = true;
    }
}

function goToPrevSlide() {
    if (imageIndex === (imagesList.length - 1)) {
        nextButton.disabled = false;
    }

    if (imageIndex > 0) {
        imageIndex--;
        sliderImage.setAttribute('src', ('./img/' + imagesList[imageIndex]));
    }

    if (imageIndex === 0) {
        prevButton.disabled = true;
    }
}

let sliderImage = document.createElement('img');
sliderImage.setAttribute('src', ('./img/' + imagesList[imageIndex]));
sliderImage.setAttribute('height', '400px');
wrapper.appendChild(sliderImage);

const prevButton = createSliderButton('slider-button-prev', '<');
prevButton.disabled = true;

const nextButton = createSliderButton('slider-button-next', '>');

wrapper.appendChild(prevButton);
wrapper.appendChild(nextButton);

nextButton.addEventListener('click', function() {
    goToNextSlide();
})

prevButton.addEventListener('click', function() {
    goToPrevSlide();
})

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'ArrowRight':
            goToNextSlide();
            break;
        case 'ArrowLeft':
            goToPrevSlide();
            break;
    }
})