window.addEventListener('DOMContentLoaded', () => {
    initGame();
})

function initGame() {
    const gameMode = document.querySelector("#game-mode-select");
    const gameGrid = document.querySelector("#game-grid-select");
    const btnCheating = document.querySelector("#btn-cheating-mode");
    const btnPause = document.querySelector("#btn-pause");
    const btnReset = document.querySelector("#btn-reset");

    const game = {
        gameMode: gameMode.value,
        gameGrid: gameGrid.value,
        pairOfPieces: [],
        btnCheating: false,
        btnPause: false,
        temporizadorMin: 0,
        temporizadorSeg: 0,
        score: 0,
    }

    callTimer(game);

    gameMode.addEventListener('change', (e) => {
        game.gameMode = e.target.value;
    })

    gameGrid.addEventListener('change', (e) => {
        game.gameGrid = e.target.value;
        buildBoard(game);
    })

    btnCheating.addEventListener('click', (e) => {

    })

    btnPause.addEventListener('click', (e) => {
        game.btnPause = !game.btnPause;
        //pausar e despausar contador
    })

    btnReset.addEventListener('click', (e) => {

    })

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
    }
    setTimeout(() => {
        pieces[0].classList.remove("showPiece");
        pieces[1].classList.remove("showPiece");
    }, 1000);

    setTimeout(()=>{
        verifyGame();
    },500);
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


function callTimer(game) {
    if (game.gameMode == "classic") {
        setInterval(() => {
            updateTimer(game);
        }, 1000);
    }

    else {
        setInterval(() => {
            countdown(game);
        }, 1000);
    }
}

function updateTimer(game) {
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

function countdown(game) {
    if (game.temporizadorSeg != 0) {
        game.temporizadorSeg = game.temporizadorSeg - 1;
    }
    else if (game.temporizadorSeg == 0) {
        game.temporizadorMin = game.temporizadorMin - 1;
        game.temporizadorSeg = 59;

        if (game.temporizadorMin == 0) {
            alert("Você perdeu");
        }
    }

    document.getElementById('timer-text').innerText = Math.abs(game.temporizadorMin) + ':' + game.temporizadorSeg;
}


