window.addEventListener('DOMContentLoaded', createRanking);

async function createRanking() {
    const rankingData = await getRankingData();
    const ranking = document.getElementById('ranking');

    const headerRow = document.createElement('tr');
    for (let header of ['Name', 'Grid Size', 'Duration', 'Score']) {
        const th = document.createElement('th');
        th.innerText = header;
        headerRow.appendChild(th);
    }
    ranking.appendChild(headerRow);

    for (let data of rankingData) {
        const tr = document.createElement('tr');
        for (let field of ['userName', 'gameGrid', 'gameDuration', 'gameScore']) {
            const td = document.createElement('td');
            td.innerText = data[field];
            tr.appendChild(td);
        }
        ranking.appendChild(tr);
    }
}

async function getRankingData() {
    return await fetch('/php/user/getRankings.php', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
        },
        'body': JSON.stringify({ gameMode: 'classic' })
    })
    .then((data) => data.json())
    .then((res) => {
        if (!res['success']) {
            alert('Falha ao acessar ranking: ' + res['errorMsg']);
        }
        return res['data'];
    });
}
