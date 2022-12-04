<?php
include('conexao.php');
function verificacaoDeLogin () {
    if(isset($_POST['email']) || isset($_POST['password'])) {
        if(strlen($_POST['email']) == 0) {
            echo "Tentativa de login sem email - tentativa inválida";
        } else if(strlen($_POST['password']) == 0){
            echo "Tentativa de login sem senha - tentativa inválida";
        } else {
            $email = $mysqli->real_escape_string($_POST['email']);
            $senha = $mysqli->real_escape_string($_POST['password']);

            $sql_codigo = "select userEmail, userPassword FROM usuario WHERE userEmail = '$email' AND usePassword = '$password'";
            $sqlQuery = $mysqli->query($sql_codigo) or die("erro no MySql: " . $mysqli->error);
            $quantidade = $sql_query->num_rows;
            if($quantidade == 1){
                $usuario = $sqlQuery ->fetch_assoc();
                if(!isset($_SESSION)){
                    session_start();
                }
                $_SESSION['id'] = $usuario['id'];
                header("Location: index.php");
            } else {
                echo "Falha no login, verifique email e senha"
            }
        }
    }
}
?>