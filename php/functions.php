<?php

require_once ('config.php');

function sanitize($str, $type = "default") {
    global $DB;
    switch($type) {
        case 'default': {
            $str = @htmlspecialchars($str);
            $str = @mysqli_escape_string($DB['conn'], $str);
            break;
        }
    }
    return $str;
}