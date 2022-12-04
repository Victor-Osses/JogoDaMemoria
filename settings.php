<?php
//retirado dos slides da unidade 17 e créditos a https://www.w3schools.com/php/php_mysql_connect.asp
//criando conexao com o banco de dados
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'memory';
$conexao =  new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

function sair(){
    session_start();
    session_unset();
    session_destroy();
    header("location: login.php");
}


?>