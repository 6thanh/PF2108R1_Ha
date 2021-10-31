class Rect {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function colorRect() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}

function createRect() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let width = Math.floor(Math.random() * window.innerWidth);
    let height = Math.floor(Math.random() * window.innerHeight);
    let color = colorRect()
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