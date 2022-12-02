<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recupere sua senha</title>
    <link rel="stylesheet" type="text/css" href="css/global.css" >
    <link rel="stylesheet" type="text/css" href="css/cadastro.css" >
    <link rel="stylesheet" href="css/menu.css">

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
        <h1>Escreva sua nova senha</h1>
        <input type="password" placeholder="Nova senha" name="newpassword">
        <input type="password" placeholder="Confirme sua nova senha" name="confirmnewpassword">
        <div class="botao">
            <button type="submit" name="loginUsuario" class="btn bg-primary">Atualizar senha</button>
        </div>
        <div class="d-flex flex-column" style="text-align: center;">
            <a href="login.php">
                <p>Voltar a tela de login</p>
            </a>
        </div>
    </form>

</body>



</html>