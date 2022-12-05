<?php
session_start();

require_once("../config.php");
require_once("../functions.php");

function processInput()
{
    $in = json_decode(file_get_contents("php://input"));
    foreach ($in as &$value) {
        $value = sanitize($value);
    }
    unset($value);

    $in->password = hash("sha256", $in->password . "memorygame");
    return $in;
}

$INPUT = processInput();

$USERID = $_SESSION['userId'];

$out = array("success" => false);

try {
    $n = $INPUT->{'full-name'};
    $sql = "SELECT userId from usuario WHERE userNickName = '{$INPUT->{'user'}}'";
    $result = $DB["conn"]->query($sql);
    if(mysqli_num_rows($result) == 0) {
        $sql = "UPDATE usuario
        SET userEmail = '{$INPUT->email}', userCpf = '{$INPUT->cpf}', userPassword = '{$INPUT->password}',
            userName = '{$INPUT->{'full-name'}}', userNickName = '{$INPUT->{'user'}}', userBirthday = '{$INPUT->birthday}', userPhone = '{$INPUT->phone}'
        WHERE userId = '$USERID'";
        $DB["conn"]->query($sql);
        $out["success"] = true;
    } else {
        $out["success"] = false;
        $out["errorMsg"] = "Nickname indisponível!";
    }
} catch (\Exception $e) {
    $out["success"] = false;
    $out["errorMsg"] = "Erro desconhecido: " . $e->getMessage();
}

echo json_encode($out);
