window.addEventListener('DOMContentLoaded', () => {
    initGame();
    getHistoryGames();
})

const game = {
    gameMode: null,
    gameGrid: null,
    pause: false,
    timer: null,
    initialTime: 0,
    temporizadorMin: 0,
    temporizadorSeg: 0,
    result: 0,
    score: 0
}

function initGame() {
    const gameMode = document.querySelector("#game-mode-select");
    const gameGrid = document.querySelector("#game-grid-select");
    const btnCheating = document.querySelector("#btn-cheating-mode");
    const btnPause = document.querySelector("#btn-pause");
    const btnPlayReset = document.querySelector("#btn-play-reset");

    game.gameMode = gameMode.value;
    game.gameGrid = gameGrid.value;

    btnPlayReset.addEventListener('click', () => {
        if (btnPlayReset.querySelector('img#btn-play')) {
            playGame(game);
            gameGrid.disabled = true;
            gameMode.disabled = true;
            btnPause.disabled = false;
            btnCheating.disabled = false;
        } else {
            resetGame(game);
            gameGrid.disabled = false;
            gameMode.disabled = false;
            btnPause.disabled = true;
            btnCheating.disabled = true;
        }
    })

    setGameGridAndScore(game);

    gameMode.addEventListener('change', (e) => {
        game.gameMode = e.target.value;
    })

    gameGrid.addEventListener('change', () => {
        setGameGridAndScore(game);
    })

    btnCheating.addEventListener('click', () => {
        toggleCheating(game);
    })

    btnPause.addEventListener('click', () => {
        pauseGame(game);
    })
}

function playGame() {
    callTimer(game);
    document.querySelector("#btn-play-reset").innerHTML = `<img src="img/reset.svg" class="reset-icon" id="btn-reset">`;
    const pieces = document.querySelectorAll(".piece");
    for (let piece of pieces) {
        piece.disabled = false;
    }
}

function pauseGame() {
    game.pause = !game.pause;

    if(!game.pause) {
        unpauseGame(game);
    }
    else {
        let pieces = document.querySelectorAll(".piece");
        for (let piece of pieces){
            piece.disabled = true;
        }
        document.querySelector("#btn-pause").classList.add("paused");
    }
}

function unpauseGame() {
    game.pause = false;
    let pieces = document.querySelectorAll(".piece");

    for (let piece of pieces){
        piece.disabled = false;
    }

    document.querySelector("#btn-pause").classList.remove("paused");
}

function setGameGridAndScore() {
    game.gameGrid = document.querySelector("#game-grid-select").value;
    document.querySelector("#game-score").innerHTML = "0 / " + game.gameGrid * game.gameGrid / 2;
    buildBoard(game);
}

function buildBoard() {
    if (game.gameMode !== undefined && game.gameGrid !== undefined) {
        const gameBoard = document.querySelector('#board');
        getPieces(game);
        gameBoard.innerHTML = '';
        let row = '';
        let counter = 0;

        for (let i = 0; i < game.gameGrid; i++) {
            row += `<div class="row d-flex justify-content-center align-items-center">`;
            for (let j = 0; j < game.gameGrid; j++) {
                row += `
                <div class="piece-container d-flex justify-content-center align-items-center">
                    <button disabled onclick="showPiece(this)" class="btn piece bg-secondary secondary-color">${game.pairOfPieces[counter]}</button>
                </div>`;
                counter++;
            }
            row += `</div>`;
        }
        gameBoard.innerHTML += row;
    }
}

function showPiece(button) {
    pieces = document.querySelectorAll(".piece.showPiece");
    if(pieces.length < 2) {
        button.classList.add("showPiece");
        if(button.classList.contains("showPiece2")) {
            button.classList.add("active2")
        };
        pieces = document.querySelectorAll(".piece.showPiece");
        if (pieces.length == 2) {
            game.score += 1;
            comparePieces(pieces);
        }
    }
}

function comparePieces(pieces) {
    if (pieces[0].innerText == pieces[1].innerText) {
        pieces[0].classList.add("active");
        pieces[1].classList.add("active");
        updateScore();
    }
    setTimeout(() => {
        pieces[0].classList.remove("showPiece");
        pieces[1].classList.remove("showPiece");
    }, 1000);

    setTimeout(()=>{
        pieces[0].classList.remove("active2");
        pieces[1].classList.remove("active2");
        verifyGame();
    }, 200);
}

function updateScore() {
    const score = document.querySelector("#game-score");
    const scoreValue = (score.innerHTML).split("/");
    score.textContent = parseInt(scoreValue[0]) + 1 + " /" + scoreValue[1];
}

function verifyGame(){
    let pieces = document.querySelectorAll(".piece");
    let activePieces = document.querySelectorAll(".piece.active");

    if(pieces.length == activePieces.length){
        alert("Voc?? venceu!");
        game.result = 1;
        registerGame(game);
    }
}

function getPieces(game) {
    const gridSize = game.gameGrid;
    const arr1 = Array.from({ length: gridSize * gridSize / 2 }, (el, index) => (index));
    const arr2 = Array.from({ length: gridSize * gridSize / 2 }, (el, index) => (index));
    game.pairOfPieces = shuffleArray(arr1.concat(arr2));
}

function shuffleArray(arr) {
    let pairOfPieces = Array.from({ length: arr.length / 2 });

    pairOfPieces.forEach((v, i, arr) => {
        arr[i] = new Array();
    })

    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

async function callTimer() {
    if (game.gameMode == "classic") {
        game.timer = setInterval(() => {
            classicTimer(game);
        }, 1000);
    }
    else {
        setTimer();
        game.timer = setInterval(() => {
            countdownTimer();
        }, 1000);
    }
}

function setTimer() {
    const gameGrid = '' + game.gameGrid;
    switch(gameGrid) {
        case "2": {
            game.temporizadorMin = 1;
            break;
        }
        case "4": {
            game.temporizadorMin = 4;
            break;
        }
        case "6": {
            game.temporizadorMin = 6;
            break;
        }
        case "8": {
            game.temporizadorMin = 8;
            break;
        }
        default: {
            alert("Voc?? est?? tentando burlar o jogo! Resetando o jogo...");
            resetGame(game);
            break;
        }
    }
    game.initialTime = game.temporizadorMin * 60;
    document.getElementById('timer-text').innerText = "0" + game.temporizadorMin + ':00';
}

function classicTimer() {
    if(!game.pause) {
        game.temporizadorSeg += 1;

        if (game.temporizadorSeg == 60) {
            game.temporizadorMin = game.temporizadorMin + 1;
            game.temporizadorSeg = 0;
        }

        let seconds = game.temporizadorSeg;
        let minutes = game.temporizadorMin;

        if(game.temporizadorSeg < 10) {
            seconds = '0' + game.temporizadorSeg;
        }

        if(game.temporizadorMin < 10) {
            minutes = '0' + game.temporizadorMin;
        }

        document.getElementById('timer-text').innerText = minutes + ':' + seconds
    }

    //cr??ditos a: https://www.youtube.com/watch?v=msyTjg3t4Z8
}

function countdownTimer() {
    if(!game.pause){
        if (game.temporizadorSeg !== 0) {
            game.temporizadorSeg = game.temporizadorSeg - 1;
        }
        else if (game.temporizadorSeg === 0) {
            if (game.temporizadorMin === 0) {
                alert("Voc?? perdeu");
                registerGame(game);
                return;
            }
            else {
                game.temporizadorMin = game.temporizadorMin - 1;
                game.temporizadorSeg = 59;
            }
        }

        document.getElementById('timer-text').innerText = "0" + Math.abs(game.temporizadorMin) + ':' + game.temporizadorSeg;
    }
}

function resetGame() {
    clearInterval(game.timer);
    game.temporizadorMin = 0;
    game.temporizadorSeg = 0;
    game.initialTime = 0;
    game.result = 0;
    game.score = 0;
    document.querySelector("#btn-cheating-mode").classList.remove('btn-pressed');
    document.querySelector("#btn-cheating-mode").disabled = true;
    document.querySelector("#btn-pause").classList.remove('paused');
    document.getElementById('timer-text').innerText = '00:00';
    document.querySelector("#btn-play-reset").innerHTML = `<img src="img/play.svg" id="btn-play">`
    document.querySelector("#game-mode-select").disabled = false;
    document.querySelector("#game-grid-select").disabled = false;
    document.querySelector("#btn-pause").disabled = true;
    const pieces = document.querySelectorAll(".piece");
    for (let piece of pieces) {
        piece.disabled = true;
    }
    unpauseGame();
    buildBoard();
    setGameGridAndScore();
}

function toggleCheating(){
    const btn = document.getElementById('btn-cheating-mode');
    btn.classList.toggle('btn-pressed');

    const pieces = document.querySelectorAll(".piece");
    for (let piece of pieces) {
        if(!piece.classList.contains("showPiece2")) {
            piece.classList.add("showPiece2");
        } else {
            if(!btn.classList.contains("btn-pressed")) {
                piece.classList.remove("showPiece2");
            }
        }
    }
}
