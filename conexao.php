<?php

$database = "memoryGame";
$host = 'localhost';
 $mysqli = new mysqli($host, $database);

if($mysqli->error){
    die("Falha na conexão com Banco de Dados". $mysqli->error);
}
?>