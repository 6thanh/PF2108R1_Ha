let tank = document.getElementById('tank');
let boom = document.getElementById('boom');
let topBtn = document.getElementById('topBtn');
let bottomBtn = document.getElementById('bottomBtn');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
var x = y = 0;

let xBoom = Math.floor(Math.random() * 10);
xBoom = xBoom * 19;
let yBoom = Math.floor(Math.random() * 10);
yBoom = yBoom * 19;

boom.style.top = yBoom + 'px';
boom.style.left = xBoom + 'px';

topBtn.addEventListener('click', function () {
    if (y > 0) {
        y -= 19;
        tank.style.top = y + 'px';
    }
    if (tank.style.top===boom.style.top &&
        tank.style.left===boom.style.left) {
        tank.style.background = "url('explosion.png')";
        boom.style.background = "none";
    }
});
bottomBtn.addEventListener('click', function () {
    if (y < 170) {
        y += 19;
        tank.style.top = y + 'px';
    }
    if (tank.style.top===boom.style.top &&
        tank.style.left===boom.style.left) {
        tank.style.background = "url('explosion.png')";
        boom.style.background = "none";
    }
});
leftBtn.addEventListener('click', function () {
    if (x > 0) {
        x -= 19;
        tank.style.left = x + 'px';
    }
    if (tank.style.top===boom.style.top &&
        tank.style.left===boom.style.left) {
        tank.style.background = "url('explosion.png')";
        boom.style.background = "none";
    }
});
rightBtn.addEventListener('click', function () {
    if (x < 170) {
        x += 19;
        tank.style.left = x + 'px';
    }
    if (tank.style.top===boom.style.top &&
        tank.style.left===boom.style.left) {
        tank.style.background = "url('explosion.png')";
        boom.style.background = "none";
    }
});