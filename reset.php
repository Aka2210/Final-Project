<?php
    session_start();
    $_SESSION["firstVisit"] = null;
    header('location: ./index.php');
?>