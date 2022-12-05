async function registerGame() {
    let data = JSON.stringify({
        gameGrid: game.gameGrid,
        gameMode: game.gameMode === "classic" ? 0 : 1,
        gameDuration: Math.abs(game.initialTime - (game.temporizadorMin * 60 + game.temporizadorSeg)),
        gameScore: game.score,
        gameResult: game.result
    });

    resetGame();

    await fetch('php/game/create.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: data
    }).then((data) => data.json())
    .then((response) => {
        if(!response['success']) {
            alert('Ops, tivemos o seguinte erro: ' + response['errorMsg']);
        }
    })
    getHistoryGames();
}

async function getHistoryGames() {
    newGame = fetch('php/game/getByUser.php', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((data) => data.json())
    .then((response) => {
        if(!response['success']) {
            alert('Ops, tivemos o seguinte erro: ' + response['errorMsg']);
        }
        buildHistoryricOfGames(response['data']);
    })
}

function buildHistoryricOfGames(userGames) {
    let historyic = document.getElementById('game-list');
    historyic.innerHTML = '';
    let html = '';
    userGames.map((game) => {
        html += `
        <li class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            <h4>${game.createTime}</h4>
            <span class="badge game-result ${game.gameResult  === "0" ? "bg-secondary" : "bg-primary"}">${game.gameResult  === "0" ? "Lost" : "Won"}</span>
        </div>
        <div class="card-body d-flex justify-content-between">
            <span>${game.gameGrid}x${game.gameGrid}</span>
            <span>${game.gameMode === "0" ? "Classic Mode" : "Timer Mode"}</span>
            <span>Time: ${game.gameDuration}s</span>
        </div>
    </li>`
    })

    historyic.innerHTML = html;
}
