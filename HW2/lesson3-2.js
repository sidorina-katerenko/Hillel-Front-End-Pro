alert('Задание 2');
const distanceOne = parseInt(prompt('Первое расстояние'));
const distanceTwo = parseInt(prompt('Второе расстояние'));

if (distanceOne * 1000 / 0.305 < distanceTwo) {
    alert('Первое расстояние меньше второго');
} else if (distanceOne * 1000 / 0.305 > distanceTwo) {
    alert('Второе расстояние меньше первого');
} else {
    alert('Расстояния равны');
}