<?php

require_once('php/config.php');

if(!$_SESSION) {
    session_start();
}

$out = array("success" => true);
$CUI = (int)$_SESSION['userId']; // Current User Id
$out['userData'] = array();

try {
    $sql = "SELECT * FROM usuario WHERE userId = '$CUI'";
    $result = $DB['conn']->query($sql);
    $out['userData'] = $result->fetch_assoc();
} catch (\Exception $e) {
    $out['success'] = false;
    $out['errorMsg'] = "Erro desconhecido: " . $e->getMessage();
}

