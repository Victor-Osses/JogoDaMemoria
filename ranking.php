<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" >
  <meta http-equiv="X-UA-Compatible" content="IE=edge" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0" >

  <!-- My Style -->
  <link rel="stylesheet" href="css/menu.css">
  <link rel="stylesheet" href="css/global.css">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" >
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin >
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" >

  <script src="js/ranking-ajax.js"></script>

  <title>Memory Game</title>
</head>

<body>
    <header id="game-header">
      <nav class="d-flex align-items-center justify-content-between flex-wrap">
          <a href="index.php">
              <h1 class="memory-title">memory</h1>
          </a>
          <ul class="items-list d-flex align-items-center">
              <li class="menu-item d-flex align-items-center">
                  <a href="perfil.php">
                      <img class="img-perfil" alt="Imagem de perfil de usuário"
                          src="img/perfil.png"></a>
              </li>
              <li class="menu-item"><a href="ranking.html" class="bg-primary">Ranking</a></li>
              <li class="menu-item"><a class="bg-secondary" style="color: #fff;" href="login.php">Logout</a></li>
          </ul>
      </nav>
  </header>

    <section style="text-align: center; margin-top: 50px;">
      <h2 class="nav_link1">RANKING</h2>
      <BR>
      <table id="ranking"></table>
    </section>

</body>

</html>
