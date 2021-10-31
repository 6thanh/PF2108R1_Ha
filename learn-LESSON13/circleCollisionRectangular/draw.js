class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}

class Rect {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function createRect() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let width = Math.floor(Math.random() * window.innerWidth);
    let height = Math.floor(Math.random() * window.innerHeight);
    let color = getColor()
    let rect = new Rect(x, y, width, height, color)
    drawRect(rect.x, rect.y, rect.width,rect.height, color)
    return rect;
}

function drawRect(x, y, width, height, color) {
    let ctx = document.getElementById("myCanvas").getContext('2d');
    ctx.beginPath();    
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height)
}

function getColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}

function createCircle() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let radius = Math.floor(Math.random() * 80);
    let color = getColor()
    let circle = new Circle(x, y, radius, color)
    drawCircle(circle.x, circle.y, circle.radius, color)
    return circle;

}

function drawCircle(x, y, radius, color) {
    let ctx = document.getElementById("myCanvas").getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}