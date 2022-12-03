<?php 

require_once ("../config.php");

$content = file_get_contents("php://input");
$data = json_decode($content, true);
$gameGrid = (int)$data['gameGrid'];
$gameMode = (int)$data['gameMode'];
$gameDuration = (int)$data['gameDuration'];
$gameScore = (int)$data['gameScore'];
$gameResult = (int)$data['gameResult'];
$out = array("success" => true);
$out['data'] = array();

try {
    $sql = "INSERT INTO game (userId, gameGrid, gameMode, gameDuration, gameScore, gameResult, createTime) 
        values(1, '$gameGrid', '$gameMode', '$gameDuration', '$gameScore', '$gameResult', CURRENT_TIMESTAMP)";
    $result = $DB['conn']->query($sql);
} catch (\Exception $e) {
    $out['success'] = false;
    $out['errorMsg'] = $e->getMessage();
}

echo json_encode($out);