<?php

$CFG = array();
$DB = array();
$CFG['hostMysql'] = '127.0.0.1';
$CFG['userMysql'] = 'root';
$CFG['passMysql'] = '';
$CFG['db'] = 'memoryGame';

date_default_timezone_set('America/Sao_Paulo');
$DB['conn'] = mysqli_connect($CFG['hostMysql'], $CFG['userMysql'], $CFG['passMysql'], $CFG['db']);

if (!$DB['conn']) {
    http_response_code(500);
    echo json_encode(array("msg" => "Erro ao tentar se conectar com o banco de dados!"));
    die;
}

mysqli_set_charset($DB['conn'],'utf8mb4');
