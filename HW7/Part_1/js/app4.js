function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imageUrl = './img/' + getRandomInt(1, 9) + '.jpg';

document.getElementById('taskFourImage').setAttribute('src', imageUrl);