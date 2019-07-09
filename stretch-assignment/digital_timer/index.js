const tens = document.getElementById('secondTens');
const ones = document.getElementById('secondOnes');
const hundredMs = document.getElementById('msHundreds');
const tenMs = document.getElementById('msTens');

const button = document.createElement('button');
    button.textContent = 'Begin';
    body[-1].appendChild(button);

let timerMax = 10

let interval = setInterval(function() {
    let start = 0;
    let distance = timerMax-start;

    let seconds = Math.floor(distance / (1000 * 10));
    let ms = Math.floor(distance % (1000 * 10)) / 
    document.getElementById('digits').textContent = 
}, 10);

