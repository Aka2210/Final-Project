import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();

    game.character = localStorage.getItem("Character");

    $(".MessageCharacter").css("display", "none");
    
    fetch("dialogue.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                game.Plot = data.ghost;
                $(".MessageScreen").css("display", "flex");
                $(".game").css("display", "none");
                OuterModule.plotDisplay(0, $(".MessageText"));

                $(".Check").eq(0).text("沒想到變成解謎了");
                $(".Check").eq(1).css("display", "none");
                $(".Check").eq(2).css("display", "none");

                $(".Check").on("click", () => {
                    MyModule.startTiming();

                    $(".MessageCharacter").css("display", "flex");
                    $(".MessageCharacter").attr("src", '../../asset/imgs/' + game.character +'.png');

                    if(game.character === "Alina"){
                        game.Plot = data.Alina;
                        OuterModule.plotDisplay(0, $(".MessageText"));

                        $(".Check").eq(0).text("希望我們能自救，這些詭異事件必須被公開。");
                        $(".Check").off();
                        MyModule.showPuzzle();
                    }
                    else if(game.character === "Brain"){
                        game.Plot = data.Brain;
                        OuterModule.plotDisplay(0, $(".MessageText"));

                        $(".Check").eq(0).text("希望不會難倒我們。");
                        $(".Check").off();
                        MyModule.showPuzzle();
                    }
                    else if(game.character === "kate"){
                        game.Plot = data.kate;
                        OuterModule.plotDisplay(0, $(".MessageText"));

                        $(".Check").eq(0).text("詭異事件與神秘地下室，只要我們能逃出去，也許就能解決這次的消失事件。");
                        $(".Check").off();
                        MyModule.showPuzzle();
                    }
                })
            })

    $(".A5").on("click", () => {
        if($(".A1").val() == 7 && $(".A2").val() == 1 && $(".A3").val() == 4 && $(".A4").val() == 2){
            fetch("dialogue.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    game.Plot = data.correct;
                    $(".MessageCharacter").css("display", "none");
                    $(".MessageScreen").css("display", "flex");
                    $(".Check").eq(0).text("太好了，我們真是聰明!");
                    $(".game").css("display", "none");
                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Check").eq(0).on("click", () => {
                        $(".Check").eq(0).off();
                        OuterModule.mazeRoom();
                        OuterModule.mazeRoomClickDetect("../level2/level2.html");
                        $(".worddoor_container").css("display", "flex");
                        $(".MessageScreen").css("display", "none");
                        $(".game").css("display", "none");
                    })
                })
        }
        else{
            fetch("dialogue.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    game.Plot = data.mistake;
                    $(".MessageCharacter").css("display", "none");
                    $(".MessageScreen").css("display", "flex");
                    $(".Check").eq(0).text("快!往回跑");
                    $(".game").css("display", "none");
                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Check").eq(0).on("click", () => {
                        $(".Check").eq(0).off();
                        OuterModule.diePlay($(".MessageScreen"));
                    })
                })
        }
    })
});