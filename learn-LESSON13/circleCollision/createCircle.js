class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}

function colorCircle() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}

function createCircle() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let radius = Math.floor(Math.random() * 80);
    let color = colorCircle()
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