<?php

if(isset($_POST['submit'])){
    require_once('php/config.php');
    require_once('php/functions.php');

    $nickName = sanitize($_POST['nickname']);
    $nomeUsuario = sanitize($_POST['userRealname']);
    $nascimento = sanitize($_POST['userBirth']);
    $cpf = (int)$_POST['userCpf'];
    $telefone =(int)$_POST['userPhone'];
    $email = sanitize($_POST['userEmail']);
    $senha = sanitize($_POST['userPassword']);
    $out = array("success" => false);

    try {
        $sql = "SELECT userId FROM usuario WHERE userNickName = '$nickName'";
        $result = $DB['conn']->query($sql);
        if(mysqli_num_rows($result) == 0) {
            $sql = "SELECT userId FROM usuario WHERE userCpf = '$cpf'";
            $result = $DB['conn']->query($sql);
            if(mysqli_num_rows($result) == 0) {
                $sql = "INSERT INTO usuario (userNickName, userBirthday, userCpf, userPhone, userEmail, userPassword, userName) VALUES ('$nickName', '$nascimento', '$cpf', '$telefone', '$email', '$senha', '$nomeUsuario')";
                $result = $DB['conn']->query($sql);
                $out['success'] = true;
            } else {
                $out['errorMsg'] = "CPF indisponível!";
            }
        } else {
            $out['errorMsg'] = "Nickname indisponível!";
        }
    }
    catch (Exception $e) {
        $out['errorMsg'] = "Erro desconhecido: " . $e->getMessage();
    }
}

?>