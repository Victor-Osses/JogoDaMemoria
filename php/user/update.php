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

    //$in->password = hash("sha256", $in->password);
    return $in;
}

$INPUT = processInput();

$USERID = $_SESSION['userId'];

$out = array("success" => true);

try {
    $n = $INPUT->{'full-name'};
    $sql = "UPDATE usuario
            SET userEmail = '{$INPUT->email}', userCpf = {$INPUT->cpf}, userPassword = '{$INPUT->password}',
                userName = '{$INPUT->{'full-name'}}', userBirthday = {$INPUT->birthday}, userPhone = {$INPUT->phone}
            WHERE userId = $USERID;";
    $DB["conn"]->query($sql);
} catch (\Exception $e) {
    $out["success"] = false;
    $out["errorMsg"] = $e->getMessage();
}

echo json_encode($out);
