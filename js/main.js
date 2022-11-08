window.addEventListener('DOMContentLoaded', () => {
    initGame();
})

function initGame() {
    const gameMode = document.querySelector("#game-mode-select");
    const gameGrid = document.querySelector("#game-grid-select");
    const btnCheating = document.querySelector("#btn-cheating-mode");
    const btnPause = document.querySelector("#btn-pause");
    const btnPlayReset = document.querySelector("#btn-play-reset");

    const game = {
        gameMode: gameMode.value,
        gameGrid: gameGrid.value,
        pairOfPieces: [],
        cheatingEnabled: false,
        pause: false,
        timer: null,
        temporizadorMin: 0,
        temporizadorSeg: 0,
    }
    
    document.querySelector('#btn-play-reset').addEventListener('click', (e) => {
        const button = e.target;
        if(button.querySelector('svg#btn-play')) {
            gameGrid.disabled = true;
            gameMode.disabled = true;
            button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="reset-icon" fill="#1F3540" id="btn-reset" viewBox="0 0 48 48"><path d="M24 45.5q-4 0-7.525-1.5-3.525-1.5-6.15-4.125Q7.7 37.25 6.2 33.75T4.7 26.2h4.7q0 6.1 4.25 10.325T24 40.75q6.05 0 10.3-4.25 4.25-4.25 4.25-10.3 0-6.1-4.125-10.325T24.2 11.65h-1.15L26.4 15l-2.5 2.5-8.3-8.35 8.3-8.3 2.5 2.5-3.6 3.55h1.15q4.05 0 7.575 1.5 3.525 1.5 6.15 4.125Q40.3 15.15 41.8 18.65t1.5 7.55q0 4-1.5 7.525-1.5 3.525-4.125 6.15Q35.05 42.5 31.55 44T24 45.5Z" /></svg>`;
            callTimer(game);
            buildBoard(game);

        } else if(button.querySelector('svg#btn-reset')) {
            button.onclick = () => {
                resetGame(game);
            };
            button.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" id="btn-play" fill="#1F3540" viewBox="0 0 512.000000 512.000000" >
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M620 5110 c-71 -15 -151 -60 -206 -115 -86 -85 -137 -210 -154 -375 -13 -129 -13 -3991 0 -4120 17 -165 68 -290 154 -375 149 -149 373 -163 619 -39 76 37 3457 1975 3546 2031 31 20 90 70 131 112 159 161 196 340 107 521 -37 76 -152 198 -238 253 -89 56 -3470 1994 -3546 2031 -37 19 -97 44 -133 56 -74 24 -214 34 -280 20z"/>
                </g>
            </svg>`
        }
    })
    
    setGameScore(game);

    gameMode.addEventListener('change', (e) => {
        game.gameMode = e.target.value;
    })

    gameGrid.addEventListener('change', (e) => {
        setGameScore(game);
    })

    btnCheating.addEventListener('click', (e) => {
        toggleCheating(game);
    })

    btnPause.addEventListener('click', (e) => {
        game.pause = !game.pause;
        let x = document.querySelectorAll(".piece");
        for (let a of x){
            a.disabled = game.pause;
        }
    })

    btnPlayReset.addEventListener('click', (e) => {})
}

function setGameScore(game) {
    game.gameGrid = document.querySelector("#game-grid-select").value;
    document.querySelector("#game-score").innerHTML = "0 / " + game.gameGrid * game.gameGrid / 2;
    buildBoard(game);
}

function buildBoard(game) {
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
                    <button onclick="showPiece(this)" class="btn piece bg-secondary secondary-color">${game.pairOfPieces[counter]}</button>
                </div>`;
                counter++;
            }
            row += `</div>`;
        }
        gameBoard.innerHTML += row;
    }
}

function showPiece(button) {
    let pieces = document.querySelectorAll(".piece.showPiece");
    if (pieces.length < 2) {
        button.classList.add("showPiece");
        pieces = document.querySelectorAll(".piece.showPiece");
        if (pieces.length == 2) {
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
        verifyGame();
    },200);
}

function updateScore() {
    const score = document.querySelector("#game-score");
    const scoreValue = (score.innerHTML).split("/");
    score.innerHTML = parseInt(scoreValue[0]) + 1 + " /" + scoreValue[1];
}

function verifyGame(){
    let pieces = document.querySelectorAll(".piece");
    let activePieces = document.querySelectorAll(".piece.active");

    if(pieces.length == activePieces.length){
        alert("Você venceu!");
    }
}

function getPieces(game) {
    const gridSize = game.gameGrid;
    const arr1 = Array.from({ length: gridSize * gridSize / 2 }, (el, index) => (index));
    const arr2 = Array.from({ length: gridSize * gridSize / 2 }, (el, index) => (index));
    game.pairOfPieces = shuffleArray(arr1.concat(arr2));
}

function shuffleArray(arr) {
    let counter = 0;
    let pairOfPieces = Array.from({ length: arr.length / 2 });

    pairOfPieces.forEach((v, i, arr) => {
        arr[i] = new Array();
    })

    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        pairOfPieces[arr[i]].push(i);

        counter++;
    }

    return arr;
}

async function callTimer(game) {
    if (game.gameMode == "classic") {
        game.timer = setInterval(() => {
            updateTimer(game);
        }, 1000);
    }
    else {
        setTimer(game);
        game.timer = setInterval(() => {
            countdown(game);
        }, 1000);
    }
}

function setTimer(game) {
    const gameGrid = ''+game.gameGrid;
    switch(gameGrid) {
        case "2": {
            console.log(game.temporizadorMin);
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
            alert("Você está tentando burlar o jogo!");
            break;
        }
    }
    
    document.getElementById('timer-text').innerText = "0" + game.temporizadorMin + ':00';
}

function updateTimer(game) {
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

    //créditos a: https://www.youtube.com/watch?v=msyTjg3t4Z8
}

function countdown(game) {
    if(!game.pause){
        if (game.temporizadorSeg !== 0) {
            game.temporizadorSeg = game.temporizadorSeg - 1;
        }
        else if (game.temporizadorSeg === 0) {
            game.temporizadorMin = game.temporizadorMin - 1;
            game.temporizadorSeg = 59;

            if (game.temporizadorMin === 0) {
                alert("Você perdeu");
            }
        }

        document.getElementById('timer-text').innerText = "0" + Math.abs(game.temporizadorMin) + ':' + game.temporizadorSeg;
    }
}

function resetGame(game) {
    game.temporizadorMin = 0;
    game.temporizadorSeg = 0;
    console.log(game.timer);
    clearInterval(game.timer);
    console.log(game.timer);
    document.getElementById('timer-text').innerText = '00:00';
    buildBoard(game);
}

function toggleCheating(game){
    const btn = document.getElementById('btn-cheating-mode');
    btn.classList.toggle('btn-pressed');
    
    const pieces = document.querySelectorAll(".piece");
    for (let piece of pieces) {
        piece.classList.toggle("showPiece");
    }

    game.cheatingEnabled = !game.cheatingEnabled;
}