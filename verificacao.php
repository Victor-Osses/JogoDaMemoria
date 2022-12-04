<?php

if(!isset($_SESSION)){
    session_start();
}
if(!isset($_SESSION['id'])){
    die("Voccê não tem acesso a está página, logue para jogar");
}


/*function verificacao($path){
    if(!$SESSION['id']) {
        header('Location: '.path);
        exit;
    }
}*/
?>