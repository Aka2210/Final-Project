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
            <form action="signup.php" method="post" class="form" >
                <input type="text" name="playerAccountSignup"  class="emailSignup" value = "">
                <input type="text" name="playerPasswordSignup" class="passwordSignup" value = "" autocomplete="off">
                <input type = "submit" value="註冊" class="submit">
            </form>
            <div class = "mistake"></div>
            <a href="./index.php">前往登入</a>
        </div>

        <?php
            $mysqli = new mysqli('localhost', 'root', '', 'playerAccounts');
            $mysqli->set_charset('utf8mb4');

            $emailPattern = "/.+[@]gmail.com/";
            if(isset($_POST["playerAccountSignup"]) && isset($_POST["playerPasswordSignup"])){
                if(preg_match($emailPattern, $_POST["playerAccountSignup"])){
                    $query = "INSERT INTO `Accounts` (`Account`, `Password`) VALUES ('$_POST[playerAccountSignup]', '$_POST[playerPasswordSignup]')";

                    if ($mysqli->query($query) === TRUE) {
                        echo
                            '<script type="text/javascript">
                                $(document).ready(function() {
                                    $(".mistake").append("<h3 style=color:green;>成功創建帳號</h3>");
                                });
                            </script>';
                    } else {
                        echo
                            '<script type="text/javascript">
                                $(document).ready(function() {
                                    $(".mistake").append("<h3 style=color:red;>帳號創建失敗，此Email已被使用</h3>");
                                });
                            </script>';
                    }
                }
                else{
                    echo
                                '<script type="text/javascript">
                                    $(document).ready(function() {
                                        $(".mistake").append("<h3 style=color:red;>Email格式錯誤(請使用:example@gmail.com)</h3>");
                                    });
                                </script>';
                }
            }
        ?>
    </body>

    <script type="module" src = "src/Game.js"></script>
    <script type="module" src = "src/function.js"></script>
    <script src = "src/script.js" type = "module"></script>
</html>