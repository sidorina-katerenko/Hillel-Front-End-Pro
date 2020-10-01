const imagesList = ['beard.jpg', 'loneliness.jpg', 'manual.jpg', 'omnomnom.jpg', 'programmer.jpg'];
const wrapper = document.getElementById('wrapper');
let imageIndex = 0;

let sliderImage = document.createElement('img');
sliderImage.src = `./img/${imagesList[imageIndex]}`
sliderImage.setAttribute('height', '400px');
wrapper.appendChild(sliderImage);

const prevButton = createSliderButton('slider-button-prev', '<');

const nextButton = createSliderButton('slider-button-next', '>');

wrapper.appendChild(prevButton);
wrapper.appendChild(nextButton);

let isIntervalRunning = false;
let myInterval;

sliderInterval();

nextButton.addEventListener('click', function() {
    sliderInterval();
    goToNextSlide();
    sliderInterval();
})

prevButton.addEventListener('click', function() {
    sliderInterval();
    goToPrevSlide();
    sliderInterval();
})

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'ArrowRight':
            sliderInterval();
            goToNextSlide();
            sliderInterval();
            break;
        case 'ArrowLeft':
            sliderInterval();
            goToPrevSlide();
            sliderInterval();
            break;
    }
})