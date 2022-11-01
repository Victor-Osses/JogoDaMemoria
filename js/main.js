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
                    <button class="btn piece bg-secondary secondary-color">${game.pairOfPieces[counter]}</button>
                </div>`;
                counter++;
            }
            row += `</div>`;
        }
        gameBoard.innerHTML += row;
    }

}

function getPieces(game) {
    const gridSize = game.gameGrid;
    const arr1 = Array.from({ length: gridSize * gridSize / 2 }, (el, index) => (el = index));
    const arr2 = Array.from({ length: gridSize * gridSize / 2 }, (el, index) => (el = index));
    game.pairOfPieces = shuffleArray(arr1.concat(arr2));
}

function shuffleArray(arr) {
    let counter = 0;
    let pairOfPieces = Array.from({ length: Math.max.apply(null, arr) + 1 });

    pairOfPieces.forEach((v, i, arr) => {
        arr [i]= new Array();
    })

    console.log(pairOfPieces)
    
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        pairOfPieces[arr[i]].push(i); 
        
        counter++;
    }

    console.log(pairOfPieces);
    return arr;
}
    

function callTimer(game) {
    //se o modo de jogo for normal
    if (game.gameMode == "classic"){
        setInterval(updateTimer, 1000);
    }
    
    else{
        setInterval(countdown, 1000);
    }

    //fazer um loop a cada 1s para incrementar o contador do jogo;
    //dependendo do modo de jogo, verificar se contador < limite de tempo
}

function updateTimer(game){
    console.log(game.temporizadorSeg);
    game.temporizadorSeg +=1; //game.temporizadorSeg+1;
    if(game.temporizadorSeg == 60){
        game.temporizadorMin = game.temporizadorMin+1;
        game.temporizadorSeg = 0;
    }

    document.getElementById('timer-text').innerText=game.temporizadorMin+':'+game.temporizadorSeg;

}

function countdown(game){
if(game.temporizadorSeg != 0){
game.temporizadorSeg = game.temporizadorSeg-1;
}
else if(game.temporizadorSeg == 0){
    game.temporizadorMin = game.temporizadorMin-1;
    game.temporizadorSeg = 59;

    if(game.temporizadorMin == 0){
        alert("Você perdeu");
    }

}

document.getElementById('timer-text').innerText=game.temporizadorMin+':'+game.temporizadorSeg;

}


