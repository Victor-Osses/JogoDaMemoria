window.addEventListener('DOMContentLoaded', () => {
    //initGame();
})

function initGame() {
    //criar objeto do jogo
    let game = {
        modoDeJogo: "classico ou por tempo",
        tamanhoDoTabuleiro: 0,
        temporizador: 0,
        placar: 0,
        pecasDoTabulerio: [],
        tabuleiro: [],
        botaoTrapaca: false,
        botaoPausa: false,
    }

    //pegar select de modo de jogo
    //pegar select de tamanho do tabulheiro
    //pegar o botão de trapaça, de pausa e de reset
    //criar evento que "escuta" o modo de jogo, o tamanho do tabuleiro, o botão de trapaça, de pausa e de reset
    //Depois que tivermos o modo de jogo e o tamanho do tabuleiro - construir tabuleiro
}

function buildBoard(modoDeJogo, tamanhoDoTabuleiro, game) {
    //Pegar o tabuleiro
   game.tabuleiro = randomNumbers(game); 
    //Determinar número de pares de peças = (tamanhoDoTabuleiro * tamanhoDoTabuleiro / 2)
    //Gerar pares de números aleatórios (dentro do limite do tabuleiro) que não se repetem e inserir aleatoriamente dentro de um vetor de peças
   

    for(let linhas =0; linhas < tamanhoDoTabuleiro; linhas++ ) {
        //criar uma linha do tabuleiro
        for(let colunas =0; colunas < tamanhoDoTabuleiro; colunas++ ) {
            let numeroAleatorio =  game.tabuleiro[posicaoAleatoriaDoVetor];
            linha +=  `<div class="piece-container d-flex justify-content-center align-items-center">
                <button class="btn piece bg-secondary secondary-color" onclick="showPiece()">${numeroAleatorio}</button>
            </div>`
        
        }
        //adicionar linha no tabuleiro 
        tabuleiro += linha;
    }
}

function randomNumbers(game) {
    //Determinar número de pares de peças = (tamanhoDoTabuleiro * tamanhoDoTabuleiro / 2)
    //Gerar pares de números aleatórios (dentro do limite do tabuleiro) que não se repetem e inserir aleatoriamente dentro de um vetor de peças
}

function showPiece(game) {
    //exibir a peça do tabuleiro que foi clicada
    //alterar no objeto de jogo quais peças estão sendo comparadas no momento
    //se houverem duas peças sendo comporadas, verificar se elas tem o mesmo número verifyNumbers();
}

function verifyNumbers(game) {
    //pegar o texto das peças e comparar e ver se são iguais
    //chamar função que altera o estado do jogo - updateGame()
}

function updateTimer(game) {
    //fazer um loop a cada 1s para incrementar o contador do jogo;
    //dependendo do modo de jogo, verificar se contador < limite de tempo;
}

function updateGame(game) {
    //atualizar o estado do jogo
    //pares encontrados mudar de cor
    //pares não encontrados voltarem ao estado inicial
    //pares encontrados - incrementar textod de acertos 
}

function cheat(game) {
    //Exibir peças do tabuleiro 
    //parar contador do jogo
}

function pauseGame(game) {
    //parar contador
    //exibir tela de pause
}

function resetGame(game) {
    //zerar contador
    //esconder tabuleiro
}

function resultGame(game) {
    //exibir o resultadoDoJogo
}