<?php

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