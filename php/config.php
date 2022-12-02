<?php

$CFG = array();
$DB = array();

$CFG['hostMysql'] = 'localhost';
$CFG['userMysql'] = 'root';
$CFG['passMysql'] = '';
$CFG['db'] = 'memorygame';

//Define o fusorário, todas as funções de data e hora vão estar com o fusorário ajustado
date_default_timezone_set('America/Sao_Paulo');
$DB['conn'] = mysqli_connect($CFG['hostMysql'], $CFG['userMysql'], $CFG['passMysql'], $CFG['db']);

if (!$DB['conn']) {
    http_response_code(500);
    echo json_encode(array("msg" => "Erro ao tentar se conectar com o banco de dados!"));
    die;
}

mysqli_set_charset($DB['conn'],'utf8mb4');
