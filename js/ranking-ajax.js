window.addEventListener('DOMContentLoaded', createRanking);

async function createRanking() {
    const rankingData = await getRankingData();
    const ranking = document.getElementById('ranking');

    const headerRow = document.createElement('tr');
    for (let header of ['#', 'Nickname', 'Grid Size', 'Duration', 'Score']) {
        const th = document.createElement('th');
        th.innerText = header;
        headerRow.appendChild(th);
    }
    ranking.appendChild(headerRow);

    let count = 1;
    for (let data of rankingData) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = count;
        tr.appendChild(td);
        for (let field of ['userNickName', 'gameGrid', 'gameDuration', 'gameScore']) {
                const td = document.createElement('td');
                if(field === 'gameDuration') {
                    let minutes = `${Math.floor(parseInt(data[field]) / 60)}`;
                    minutes = minutes.padStart(2, '0');

                    let seconds = `${parseInt(data[field]) - (minutes * 60)}`;
                    seconds = seconds.padStart(2, '0');

                    td.innerText = minutes + ':' + seconds + 's';
                } else {
                    td.innerText = data[field];
                }
            
                tr.appendChild(td);
        }
        ranking.appendChild(tr);
        count++;
    }
}

async function getRankingData() {
    return await fetch('php/user/getRankings.php', {
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
            return;
        }
        return res['data'];
    });
}
