<?php

require_once ("../config.php");

$out = array("success" => true);
$out['data'] = array();
$CUI = 1;
try {
    $sql = "SELECT gameResult, gameMode, gameGrid, gameScore, gameDuration, createTime from game WHERE userId = '{$CUI}' order by createTime desc";
    $result = $DB['conn']->query($sql);
    while($row = $result->fetch_assoc()) {
        $timestamp = strtotime($row['createTime']);
        $row['createTime'] = date("d/m/Y - H:i:s", $timestamp);
        $out['data'][] = $row;
    }
} catch (\Exception $e) {
    $out['success'] = false;
    $out['errorMsg'] = $e->getMessage();
}

echo json_encode($out);