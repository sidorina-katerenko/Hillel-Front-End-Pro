'use strict';

const date = new Date();
const digitNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

let second2 = seconds%10;
document.getElementById('second2').appendChild(createImage(second2, 'second2'));

let second1 = (seconds - seconds%10) / 10;
document.getElementById('second1').appendChild(createImage(second1, 'second1'));

let minute2 = minutes%10;
document.getElementById('minute2').appendChild(createImage(minute2, 'minute2'));

let minute1 = (minutes - minutes%10) / 10;
document.getElementById('minute1').appendChild(createImage(minute1, 'minute1'));

let hour2 = hours%10;
document.getElementById('hour2').appendChild(createImage(hour2, 'hour2'));

let hour1 = (hours - hours%10) / 10;
document.getElementById('hour1').appendChild(createImage(hour1, 'hour1'));

setInterval(updateSeconds, 1000);
