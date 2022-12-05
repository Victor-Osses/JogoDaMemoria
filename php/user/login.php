<?php

if (isset($_POST['email']) && isset($_POST['password'])) {
    require_once('php/config.php');
    require_once('php/functions.php');

    $out = array("success" => false);

    $email = sanitize($_POST['email']);
    $password = hash("sha256", sanitize($_POST['password']) . "memorygame");

    try {
        $sql = "SELECT userId, userNickName, userName FROM usuario WHERE userEmail = '$email' AND userPassword = '$password'";
        $result = $DB['conn']->query($sql);

        if (mysqli_num_rows($result) == 1) {
            $user = $result->fetch_assoc();
            $_SESSION['userId'] = $user['userId'];
            $out['success'] = true;
            header("Location: index.php");
        } else
            $out['errorMsg'] = "Email e/ou senha incorretos!";
    } catch (\Exception $e) {
        $out['errorMsg'] = "Erro desconhecido: " . $e->getMessage();
    }
}

?>