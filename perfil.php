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
    <title>Perfil</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/perfil.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <script src="js/perfil-ajax.js"></script>
</head>

<body>
    <header id="game-header">
        <?php
            require_once("includes/menu.php");
        ?>
    </header>

    <section style="width: 80vw; margin: auto;">
        <h2>Dados pessoais</h2>
        <div class="user-info d-flex justify-content-center align-items-center">
            <img class="profile-img" src="img/profile.png" alt="">

            <div class="d-flex flex-column justify-content-between align-items-center">
                <form id="edit-form" class="d-flex justify-content-end">
                    <input id="toggle-edit" type="checkbox" name="edit">
                    <label for="toggle-edit">Editar</label>
                </form>

                <form id="user-info-form" class="form d-flex flex-column justify-content-between align-items-center"
                     method="post">
                    <div class="row d-flex">
                        <input id="user" type="text" name="user" placeholder="Nick de Usuário"
                            style="margin-right: 10px;" disabled>
                        <input id="full-name" type="text" name="full-name" placeholder="Nome" disabled>
                    </div>
                    <div class="row d-flex">
                        <input id="birthday" type="date" name="birthday" 
                            style="margin-right: 10px;" disabled>
                        <input id="cpf" type="text" name="cpf" pattern="\d{3}.\d{3}.\d{3}-\d{1,2}" placeholder="CPF"
                            disabled>
                    </div>
                    <div class="row d-flex">
                        <input id="phone" type="tel" name="phone" pattern="(\d{2,3}) ?9?\d{4}-?\d{4}"
                            placeholder="Telefone" style="margin-right: 10px;" disabled>
                        <input id="email" type="email" name="email" placeholder="Email" disabled>
                    </div>
                    <div class="row d-flex">
                        <input id="password" type="password" name="password" placeholder="Senha"
                            style="margin-right: 10px;" disabled>
                        <input id="password-repeat" type="password" name="password-repeat" placeholder="Confirmar Senha"
                            disabled>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-between align-items-center">
            <button id="update-btn" class="btn bg-primary" type="submit" form="user-info-form"
                disabled>Atualizar</button>
        </div>
    </section>

</html>
