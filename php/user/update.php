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
    $sql = "SELECT userId FROM usuario WHERE userId = '$USERID' and userPassword = '{$INPUT->password}'";
    $result = $DB["conn"]->query($sql);
    if (mysqli_num_rows($result) == 1 ) {
        $sql = "SELECT userId from usuario WHERE userEmail = '{$INPUT->email}' and userId != '$USERID'";
        $result = $DB["conn"]->query($sql);
        if (mysqli_num_rows($result) == 0) {
            $sql = "UPDATE usuario
        SET userEmail = '{$INPUT->email}', userPassword = '{$INPUT->password}',
            userName = '{$INPUT->{'full-name'}}', userPhone = '{$INPUT->phone}'
        WHERE userId = '$USERID'";
            $DB["conn"]->query($sql);
            $out["success"] = true;
        } else {
            $out["errorMsg"] = "Email indisponível (e-mail é unique)!";
        }
    } else {
        $out["errorMsg"] = "Senha incorreta!";
    }
} catch (\Exception $e) {
    $out["errorMsg"] = "Erro desconhecido: " . $e->getMessage();
}

echo json_encode($out);
