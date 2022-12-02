<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- My Style -->
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" type="text/css" href="css/global.css">
    <link rel="stylesheet" type="text/css" href="css/cadastro.css">

    <title>Recupere sua senha</title>
</head>

<body class="corpo">
    <header id="game-header">
        <nav class="d-flex align-items-center justify-content-between flex-wrap">
            <a href="#">
                <h1 class="memory-title">memory</h1>
            </a>
        </nav>
    </header>
    <form action="#" method="GET" class="form d-flex align-items-center justify-content-center flex-column">
        <h1>Informe seu email</h1>
        <input type="email" placeholder="Email" name="email" style="margin-top: 10px;">
        <div class="botao">
            <button type="submit" name="esqueceuSenha" class="btn bg-primary">Atualizar senha</button>
        </div>
        <div class="d-flex flex-column" style="text-align: center; margin-top: 10px;">
            <a href="login.php">
                <p>Voltar a tela de login</p>
            </a>
        </div>
    </form>

</body>

</html>