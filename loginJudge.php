<?php
    session_start();

    $email = $_SESSION["playerAccount"];
    $password = $_SESSION["playerPassword"];

    $emailPattern = "/.+[@]gmail.com/";

    if($email !== "" && $password !== "" && preg_match($emailPattern, $email)){
        $mysqli = new mysqli('localhost', 'root', '', 'playerAccounts');
        $mysqli->set_charset('utf8mb4');

        $query = "SELECT Account FROM accounts WHERE Account = '$email' AND Password = '$password'";

        $queryResult = $mysqli->query($query);

        $actor = $queryResult->fetch_assoc();

        if($actor !== null){
            header('location: ./gameContent/initScreen/init.html');
        }
        else{
            $_SESSION["playerAccount"] = null;
            $_SESSION["playerPassword"] = null;
            header('location: ./index.html');
        }
    }
    else{
        $_SESSION["playerAccount"] = null;
        $_SESSION["playerPassword"] = null;
        header('location: ./index.html');
    }
?>