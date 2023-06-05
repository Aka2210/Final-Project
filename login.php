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
        header('location: ./index.html');
    }
?>