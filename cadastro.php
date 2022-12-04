<?php
//créditos a https://www.youtube.com/watch?v=QOeDE7nPDq0&list=PLSHNk_yA5fNjoIRNHV-3FprsN3NWPcnnK&index=3
if(isset($_POST['submit'])){
    
    include_once('settings.php');

    $nomeUsuario = $_POST['userName'];
    $nomeReal= $_POST['userRealname'];
    $nascimento = $_POST['userBirth'];
    $cpf = $_POST['userCpf'];
    $telefone = $_POST['userPhone'];
    $email = $_POST['userEmail'];
    $senha = $_POST['userPassword'];

    $sql = mysqli_query($conexao, "INSERT INTO usuario(userName, userRealname, userBirth, userCpf, userPhone, userEmail, userPassword) 
    VALUES('$nomeUsuario', '$nomeReal', '$nascimento', '$cpf', '$telefone', '$email', '$senha')");

}

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
        <h4 style="text-align: center;">Preencha o formulário abaixo com suas informações pessoais.</h4>
    </div>

    <form action="cadastro.php" method="POST" class="form d-flex flex-column justify-content-center align-items-center">
        <label for="username"></label>
        <input type="text" style="margin-right: 10px;" name="userName" id="username" placeholder="Nome do usuário"
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

        <input type="submit" class="btn bg-primary" name="submit">

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

<script type="text/javascript">

function verificarSenha() {
  let senha = document.getElementById("userPassword").value;
  let confirmacaosenha = document.getElementById("password2").value;

  if (senha != confirmacaosenha) {
    alert("As senhas não são iguais");
  }
  
}
    </script>