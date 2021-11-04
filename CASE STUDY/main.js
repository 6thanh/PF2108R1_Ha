let bar = new Bar();
let ball = new Ball(10);
let isPlay = false;
let speedBall = 0;
let speedInput = 0;
let interval;
let time = 0;
let countTime;

startGame.addEventListener('click', function () {
    startGame.innerText = 'START';
    playGame.innerHTML = "Chọn tốc độ bóng, <br> sau đó nhấn START để bắt đầu";
    speed.style.display = 'block';
});
startGame.addEventListener('click', function () {
    if (chooseSpeed()) {
        playGameStart()
    } else speed.value = '';
});

function chooseSpeed() {
    speedInput = speed.value;
    speedBall = parseFloat(speedInput);
    if ((speedBall != speedInput || speedBall < 50 ||
            speedBall > 100 || speedBall == null)) {
        speed.value = '';
    } else return true
};

function playGameStart() {
    startGame.style.display = 'none';
    speed.style.display = 'none';
    playGame.innerText = "";
    start();
};

function btnRestart() {
    startGame.innerText = 'TIẾP TỤC'
    startGame.style.display = 'block';
    playGame.innerText = "Nhấn TIẾP TỤC để chơi lại";
    startGame.addEventListener('click', function () {
        location.reload();
    })
};

function start() {
    bar.drawBar();
    ball.drawBall();
    audio.innerHTML = '<audio loop autoplay source src="audio/Game-Boom-online.mp3" type="audio/mp3"></audio>';

    play();

    function play() {
        isPlay = true;
        countTime = setInterval(displayScores, 1000);
        interval = setInterval(update, speedBall);
        audio.innerHTML = '<audio loop autoplay source src="audio/Game-Boom-online.mp3" type="audio/mp3"></audio>';
    };

    function update() {
        isPlay = checkPlay();
        if (isPlay) {
            ball.moveBall();
            ball.checkCollision();
            ball.drawBall();
        } else pause();
    };

    function displayScores() {
        time++;
        speedBall--;
        scores.innerHTML = time;
    };

    function pause() {
        isPlay = false;
        clearInterval(interval);
        clearInterval(countTime);
        audio.innerHTML = '';
    };

    function checkPlay() {
        if (ball.distanceX == 0 && ball.distanceX == 0) {
            setTimeout(endGame, 500);
            return false;
        } else return true;
    };

    function endGame() {
        myCanvas.innerHTML = audio.innerHTML = '<audio autoplay source src="audio/Mario.mp3" type="audio/mp3"></audio>';
        ctx.beginPath();
        ctx.fillStyle = "#FFDF91"
        ctx.fillRect(150, 80, 210, 220);
        ctx.fillStyle = "blue";
        ctx.font = '25px serif';
        ctx.fillText("KẾT THÚC!", widthCanvas / 2 - 60, heightCanvas / 2 - 120);
        ctx.fillStyle = "blue";
        ctx.font = '20px serif';
        ctx.fillText("Điểm của bạn là: " + time, widthCanvas / 2 - 80, heightCanvas / 2 - 80);
        ctx.fillText("Tốc độ quả bóng là: " + (speedBall + time * 2), widthCanvas / 2 - 85, heightCanvas / 2 - 50);
        ctx.closePath();
        ctx.fill();
        btnRestart();
    }

    window.addEventListener("keydown", function (keydown) {
        if (isPlay) {
            switch (keydown.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'w':
                case 'S':
                    pause();
                    break;
                case 'ArrowRight':
                case 'D':
                    if (bar.barX + bar.widthBar + bar.distanceBar <= widthCanvas) {
                        bar.moveRight();
                        bar.drawBar();
                    }
                    break;
                case 'ArrowLeft':
                case 'A':
                    if (bar.barX - bar.distanceBar >= 0) {
                        bar.moveLeft();
                        bar.drawBar();
                    }
                    break;
            }
        } else {
            switch (keydown.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'W':
                case 'S':
                    play();
                    break;
            }
        }
    });
}