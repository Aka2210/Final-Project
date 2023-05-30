<!DOCTYPE html>

<html>
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <head>
        <link rel="stylesheet" href ="style/game.css">
        <link rel="stylesheet" href ="style/loginScreen.css">
        <audio id="KeyboardSound" src="asset/sounds/KeyboardSound.mp3"></audio>
        <audio id="backgroundMusic" src="asset/sounds/backgroundMusic.mp3"></audio>
        <title>Final-Project</title>
        <meta charset="utf-8">
    </head>

    <body>
        <div class="loginScreen">
            <form action="index.php" method="post" class="form" >
                <input type="text" name="playerAccount"  class="email" value = "">
                <input type="text" name="playerPassword" class="password" value = "">
                <input type = "submit" value="登入" class="submit">
            </form>
            <a href="./signup.php">註冊</a>
        </div>

        <?php
            session_start();

            $email = $_SESSION["playerAccount"];
            $password = $_SESSION["playerPassword"];
            
            if($email !== "" && $password !== ""){
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
                    header('location: ./index.php');
                }
            }
        ?>
    </body>

    <script type="module" src = "src/Game.js"></script>
    <script type="module" src = "src/function.js"></script>
    <script src = "src/script.js" type = "module"></script>
</html>