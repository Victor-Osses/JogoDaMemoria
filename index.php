<?php
session_start();
if (!isset($_SESSION['userId'])) {
    header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- My Style -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/index.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    <!-- JS -->
    <script src="js/index.js"></script>

    <title>Memory Game</title>
</head>

<body>
    <header id="game-header">
        <?php
        require_once("includes/menu.php");
        ?>
    </header>
    <main id="game-main">
        <div class="game-container">
            <div class="game-header d-flex flex-wrap justify-content-between align-items-center">
                <div class="game-mode d-flex align-items-center">
                    <select id="game-mode-select" class="primary-color">
                        <option value="classic">Classic mode</option>
                        <option value="timer">Time mode</option>
                    </select>
                </div>

                <div class="d-flex">
                    <select style=" border-style: none" id="game-grid-select" class="bg-primary text-white" name="tamanho">
                        <option value="2">2x2</option>
                        <option value="4">4x4</option>
                        <option value="6">6x6</option>
                        <option value="8" selected>8x8</option>
                    </select>
                    <div class="timer-container bg-tertiary d-flex align-items-center justify-content-between">
                        <div class="icon-container time-icon-container d-flex align-items-center" style="margin-right: 4px;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1F3540" viewBox="0 0 48 48">
                                <path d="M16.85 5V.85h14.3V5Zm5.1 23.4h4.1V16.8h-4.1ZM24 46.25q-4 0-7.5-1.525T10.375 40.6Q7.75 38 6.25 34.5 4.75 31 4.75 27t1.5-7.5q1.5-3.5 4.125-6.125t6.125-4.15Q20 7.7 24 7.7q3.45 0 6.525 1.125T35.95 12l3-3 3 2.95-3 3q1.85 2.1 3.1 5.05 1.25 2.95 1.25 7 0 4-1.525 7.5t-4.15 6.1Q35 43.2 31.5 44.725T24 46.25Zm0-4.75q6.1 0 10.325-4.2T38.55 27q0-6.1-4.225-10.325T24 12.45q-6.1 0-10.325 4.225T9.45 27q0 6.1 4.225 10.3Q17.9 41.5 24 41.5Zm0-14.45Z" />
                            </svg>
                        </div>
                        <span id="timer-text">00:00</span>
                    </div>
                    <span id="game-score" class="d-flex align-items-center bg-secondary text-white">
                        0 / 32
                    </span>
                </div>

                <div class="d-flex">
                    <div class="icon-container d-flex align-items-center" style="margin-right: 10px;">
                        <img src="img/reset.svg" alt="" style="display: none;">
                        <button id="btn-play-reset" class="btn d-flex align-items-center justify-content-between">
                            <img src="img/play.svg" alt="" id="btn-play">
                        </button>
                    </div>

                    <button id="btn-cheating-mode" disabled class="btn d-flex align-items-center justify-content-between" style="margin-right: 10px;">
                        <img src="img/hacker.png" alt="Bot??o de Trapa??a">
                    </button>

                    <div class="icon-container d-flex align-items-center" style="margin-right: 10px;">
                        <button id="btn-pause" disabled class="btn d-flex align-items-center justify-content-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1F3540" viewBox="0 0 48 48">
                                <path d="M28.7 37V11h6.9v26Zm-16.3 0V11h6.95v26Z" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>
            <div class="game-body" id="board"></div>
            <div class="game-footer"></div>
        </div>
    </main>

    <div onclick="openSidebar()" class="btn btn-historic bg-secondary d-flex justify-content-center align-items-center p-0 position-relative">
        <img src="img/historico.png" alt="Bot??od de hist??rico de partidas">
    </div>

    <section id="player-history" class="bg-tertiary">
        <div class="sidebar-content">
            <div class="sidebar-header d-flex flex-column align-items-center">
                <button onclick="closeSidebar()" class="fs-1 w-100 text-end fw-bold mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M16 304 c-24 -24 -20 -34 36 -91 l52 -53 -53 -54 c-41 -42 -52 -58 -47 -74 14 -43 45 -38 102 19 l54 53 54 -53 c42 -41 58 -52 74 -47 43 14 38 45 -19 102 l-53 54 53 54 c57 57 62 88 19 102 -16 5 -32 -6 -74 -47 l-54 -53 -53 52 c-57 56 -67 60 -91 36z" />
                        </g>
                    </svg>
                </button>
                <h3 class="primary-color">Hist??rico de Partidas</h3>
            </div>

            <div class="sidebar-body">
                <ul id="game-list">
                </ul>
            </div>
        </div>
    </section>

    <script src="js/ranking.js"></script>
    <script src="js/index-ajax.js"></script>
</body>

</html>