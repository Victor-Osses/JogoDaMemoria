<?php
session_start();

if (isset($_SESSION['userId'])) {
    header("Location: index.php");
}

if (isset($_POST['email']) && isset($_POST['password'])) {
    require_once('php/config.php');
    require_once('php/functions.php');

    $out = array("success" => false);

    $email = sanitize($_POST['email']);
    $password = sanitize($_POST['password']);

    try {
        $sql = "SELECT userId, userNickName, userName FROM usuario WHERE userEmail = '$email' AND userPassword = '$password'";
        $result = $DB['conn']->query($sql);

        if (mysqli_num_rows($result) == 1) {
            $user = $result->fetch_assoc();
            $_SESSION['userId'] = $user['userId'];
            unset($user['userId']);
            if (!isset($_COOKIE["user"]))
                setcookie("user", json_encode($user), time() + 60 * 60 * 24 * 2);
            $out['success'] = true;
            header("Location: index.php");
        } else
            $out['errorMsg'] = "Email e/ou senha incorretos!";
    } catch (\Exception $e) {
        $out['errorMsg'] = "Erro desconhecido: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Memory</title>

    <!-- My Style -->
    <link rel="stylesheet" href="css/global.css">
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
    <form action="login.php" method="POST" class="form d-flex align-items-center justify-content-center flex-column">
        <h1>Login</h1>
        <h2 style="text-align: center; margin: 15px 0px;">
            <?php
                if (isset($out)) {
                    if ($out['success']) {
                        echo "Login bem sucedido!";
                    } else {
                        echo $out['errorMsg'];
                    }
                }
            ?>
        </h2>
        <input type="email" placeholder="E-mail" required name="email">
        <input type="password" placeholder="Senha" required name="password">
        <div class="botao">
            <button type="submit" name="loginUsuario" class="btn bg-primary">Submit</button>
        </div>
        <div class="d-flex flex-column" style="text-align: center;">
            <a href="esqueceu.php" style="margin: 10px 0 10px 0;">
                <p>Esqueceu a senha?</p>
            </a>
            <a href="cadastro.php">
                <p>Não possui uma conta? Cadastre-se!</p>
            </a>
        </div>
    </form>

</body>

</html>