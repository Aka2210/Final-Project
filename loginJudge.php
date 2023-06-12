<?php
    session_start();

    $email = $_SESSION["playerAccount"];
    $password = $_SESSION["playerPassword"];

    $emailPattern = "/.+[@]gmail.com/";

    if($email !== "" && $password !== "" && preg_match($emailPattern, $email)){
        $mysqli = new mysqli('localhost', 'root', '', 'playerAccounts');
        $mysqli->set_charset('utf8mb4');

        $query = "SELECT Password FROM accounts WHERE Account = '$email'";

        $queryResult = $mysqli->query($query);

        $row = $queryResult->fetch_assoc();
        $hashedPassword = $row['Password'];

        if(password_verify($password, $hashedPassword)){
            header('location: ./gameContent/initScreen/init.html');
        }
        else{
            $_SESSION["playerAccount"] = null;
            $_SESSION["playerPassword"] = null;
            header('location: ./login.php');
        }
    }
    else{
        $_SESSION["playerAccount"] = null;
        $_SESSION["playerPassword"] = null;
        header('location: ./login.php');
    }
?>