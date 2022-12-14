<?php
require_once("php/user/create.php");
?>

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
        <h3 style="text-align: center; margin: 15px 0px">Preencha o formulário abaixo com suas informações pessoais.</h3>
        <h3 style="text-align: center; color: orange;">
            <?php 
                if(isset($out)) {
                    if($out['success']) {
                        echo "Cadastro bem sucedido!";
                    } else {
                        echo $out['errorMsg'];
                    }
                }
            ?>
        </h3>
    </div>

    <form action="cadastro.php" method="POST" class="form d-flex flex-column justify-content-center align-items-center">
        <label for="nickname"></label>
        <input type="text" style="margin-right: 10px;" name="nickname" id="nickname" placeholder="Nickname"
            required>

        <label for="realname"></label>
        <input type="text" placeholder="Nome" id="realname" name="userRealname" required>

        <label for="birth"></label>
        <input type="date" id="birth" name="userBirth" required>

        <label for="cpf"></label>
        <input type="text" placeholder="CPF" id="cpf" name="userCpf" required>

        <label for="phone"></label>
        <input type="tel" placeholder="Telefone" id="phone" name="userPhone" required>

        <label for="email"></label>
        <input type="email" placeholder="E-mail" id="email" name="userEmail" required>

        <label for="password"></label>
        <input type="password" placeholder="Senha" id="password" name="userPassword" required>

        <label for="passwordconfirmation"></label>
        <input type="password" placeholder="Confirmar Senha" id="passwordconfirmation" name="password2" required>

        <button type="submit" id="btnRegisterUser" class="btn bg-primary" name="submit" style="font-size: 18px">Cadastrar</button>

        <div class="botaovoltar">
            <a href="login.php">Já está cadastrado? Faça login!</a>
        </div>
    </form>

    <script src="js/cadastro.js"></script>
</body>

<!--
    créditos a:
    https://www.youtube.com/watch?v=angpMvzStvk
    https://www.youtube.com/watch?v=zWw0npNDkVM
    https://www.youtube.com/watch?v=3e66-ZPPqWg
    https://www.w3schools.com/css/css3_buttons.asp
-->
</html>
