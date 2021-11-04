let myCanvas = document.getElementById('myCanvas');
let widthCanvas = parseFloat(myCanvas.getAttribute('width'));
let heightCanvas = parseFloat(myCanvas.getAttribute('height'));
let ctx = myCanvas.getContext('2d');
let scores = document.getElementById('scores');
let startGame = document.getElementById('startGame');
let playGame = document.getElementById('playGame');
let audio = document.getElementById('audio');
let speed = document.getElementById('speed')

class Bar {
    constructor() {
        this.barX = widthCanvas / 2 - 50;
        this.barY = heightCanvas - 70;
        this.distanceBar = 10;
        this.widthBar = 100;
        this.heightBar = 10;
    }
    drawBar() {
        ctx.beginPath();
        ctx.fillStyle = "#FFDF91";
        ctx.fillRect(this.barX, this.barY, this.widthBar, this.heightBar);
    }
    moveRight() {
        ctx.clearRect(this.barX, this.barY, this.widthBar, this.heightBar);
        return this.barX += this.distanceBar;
    }
    moveLeft() {
        ctx.clearRect(this.barX, this.barY, this.widthBar, this.heightBar);
        return this.barX -= this.distanceBar;
    }
}

class Ball {
    constructor(distance) {
        this.distanceX = distance;
        this.distanceY = -distance;
        this.radius = 10;
        this.ballX = bar.barX + bar.widthBar / 2;
        this.ballY = bar.barY - this.radius;
    }
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.ballX, this.ballY, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#EAAC7F";
        ctx.closePath();
        ctx.fill();
    }
    moveBall() {
        ctx.beginPath();
        ctx.strokeStyle = "#493323";
        ctx.arc(this.ballX, this.ballY, this.radius, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fillStyle = "#493323";
        ctx.closePath();
        ctx.fill();
        this.ballX += this.distanceX;
        this.ballY += this.distanceY;
        this.ballTop = this.ballY - this.radius;
        this.ballRight = this.ballX + this.radius;
        this.ballBottom = this.ballY + this.radius;
        this.ballLeft = this.ballX - this.radius;
    }
    checkCollision() {
        if (this.ballLeft <= 0 || this.ballRight >= widthCanvas) {
            return this.distanceX = -this.distanceX;
        }
        if (this.ballTop <= 0) {
            return this.distanceY = -this.distanceY
        }
        if (this.ballBottom >= bar.barY) {
            if (this.ballX >= bar.barX &&
                this.ballX <= bar.barX + bar.widthBar) {
                return this.distanceY = -this.distanceY
            }
        }
        if (this.ballBottom >= heightCanvas) {
            this.distanceY = 0;
            this.distanceX = 0;
        }
    }
}