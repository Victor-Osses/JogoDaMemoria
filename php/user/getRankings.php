<?php

require_once("../config.php");
require_once("../functions.php");

$INPUT = json_decode(file_get_contents('php://input'));

$gameMode = $INPUT->gameMode ? sanitize($INPUT->gameMode) : "classic";
$gameMode = $gameMode == "classic" ? 0 : 1;
$gameMode = (int)$INPUT->gameMode;

$out = array("success" => true);
$out["data"] = array();

try {
    $sql = "SELECT game.userId, userNickName, gameGrid, gameDuration, gameScore FROM game
            INNER JOIN usuario ON usuario.userId=game.userId
            WHERE gameResult=1
            ORDER BY gameGrid desc, gameDuration asc, gameScore desc";

    $result = $DB["conn"]->query($sql);
    while ($row = $result->fetch_assoc()) {
        array_push($out["data"], $row);
    }

} catch (\Exception $e) {
    $out["success"] = false;
    $out['errorMsg'] = $e->getMessage();
}

echo json_encode($out);
