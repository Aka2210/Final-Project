<!DOCTYPE html>

<html>
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <head>
        <link rel="stylesheet" href ="./style/game.css">
        <link rel="stylesheet" href ="./style/loginScreen.css">
        <audio id="KeyboardSound" src="asset/sounds/KeyboardSound.mp3"></audio>
        <audio id="backgroundMusic" src="asset/sounds/backgroundMusic.mp3"></audio>
        <title>Final-Project</title>
        <meta charset="utf-8">
    </head>

    <body>
        <div class="loginScreen">
            <div class = "loginContainer">
                <form action="login.php" method="post" class="form" >
                    帳號:<input type="email" name="playerAccount"  class="email" value = "">
                    密碼:<input type="password" name="playerPassword" class="password" value = "" autocomplete="off">
                    <div class = "mistake"></div>
                    <input type = "submit" value="登入" class="submit">
                </form>
                <a href="./signup/signup.php" class="signup">註冊</a>
            </div>
        </div>
    </body>

    <?php
        session_start();

        if(isset($_SESSION["playerAccount"]) && isset($_SESSION["playerPassword"])){
            $_SESSION["playerAccount"] = isset($_POST["playerAccount"]) ? $_POST["playerAccount"] : "";
            $_SESSION["playerPassword"] = isset($_POST["playerPassword"]) ? $_POST["playerPassword"] : "";
            header('location: ./loginJudge.php');
        }

        else {
            if(isset($_SESSION["firstVisit"])){
                echo
                        '<script type="text/javascript">
                            $(document).ready(function() {
                                $(".mistake").append("<h3 style=color:red;>帳號或密碼錯誤</h3>");
                            });
                        </script>';
            }
            else{
                $_SESSION["firstVisit"] = true;
            }
            $_SESSION["playerAccount"] = isset($_POST["playerAccount"]) ? $_POST["playerAccount"] : "";
            $_SESSION["playerPassword"] = isset($_POST["playerPassword"]) ? $_POST["playerPassword"] : "";
        }
    ?>

    <script type="module" src = "src/Game.js"></script>
    <script type="module" src = "src/function.js"></script>
    <script src = "src/script.js" type = "module"></script>
</html>