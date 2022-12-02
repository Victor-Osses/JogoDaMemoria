<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" type="text/css" href="css/global.css">
    <link rel="stylesheet" type="text/css" href="css/cadastro.css">
    <link rel="stylesheet" href="css/menu.css">
</head>

<body>
    <header id="game-header">
        <nav class="d-flex align-items-center justify-content-between flex-wrap">
            <a href="#">
                <h1 class="memory-title">memory</h1>
            </a>
        </nav>
    </header>
    <div class="mensagenstopo">
        <h2 style="text-align: center;">Bem vindo ao Memory!<br>Para jogar, é necessário criar uma conta.</h2>
        <h4 style="text-align: center;">Preencha o formulário abaixo com suas informações pessoais.</h4>
    </div>

    <form action="#" method="GET" class="form d-flex flex-column justify-content-center align-items-center">
        <label for="username"></label>
        <input type="text" style="margin-right: 10px;" name="username" id="username" placeholder="Nome do usuário"
            required>

        <label for="realname"></label>
        <input type="text" placeholder="Nome" id="realname" name="name" required>

        <label for="birth"></label>
        <input type="date" id="birth" name="birth" required>

        <label for="cpf"></label>
        <input type="text" placeholder="CPF" id="cpf" name="cpf" required>

        <label for="phone"></label>
        <input type="tel" placeholder="Telefone" id="phone" name="telefone" required>

        <label for="email"></label>
        <input type="email" placeholder="E-mail" id="email" name="email" required>

        <label for="password"></label>
        <input type="password" placeholder="Senha" id="password" name="password" required>

        <label for="passwordconfirmation"></label>
        <input type="password" placeholder="Confirmar Senha" id="passwordconfirmation" name="password" required>

        <button type="submit" class="btn bg-primary" name="cadastrarUsuario">Cadastrar</button>

        <div class="botaovoltar">
            <a href="login.php">Já está cadastrado? Faça login!</a>
        </div>
    </form>
</body>

<!--
    créditos a:
    https://www.youtube.com/watch?v=angpMvzStvk
    https://www.youtube.com/watch?v=zWw0npNDkVM
    https://www.youtube.com/watch?v=3e66-ZPPqWg
    https://www.w3schools.com/css/css3_buttons.asp
-->

</html>