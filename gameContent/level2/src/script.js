import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();

    let Drink = localStorage.getItem("DRINK");

    game.character = localStorage.getItem("Character");
    $(".MessageCharacter").attr("src", '../../asset/imgs/' + game.character +'.png');

    if(Drink){
        setTimeout(() => {
            OuterModule.drinkDie("dialogue.json");
        }, 100000)
    }

    fetch("dialogue.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            $(".MessageScreen").css("display", "flex");
            if(game.character === "Alina"){
                game.Plot = data.Alina;
            }
            else if(game.character === "Brain"){
                game.Plot = data.Brain;
            }
            else if(game.character === "kate"){
                game.Plot = data.kate;
            }

            OuterModule.plotDisplay(0, $(".MessageText"));

            $(".Check").eq(0).css("display", "flex");
            $(".Check").eq(1).css("display", "none");
            $(".Check").eq(2).css("display", "none");
            $(".Check").eq(3).css("display", "none");

            $(".Check").text(0).text("我們過去看看吧。");

            $(".Check").eq(0).on("click", () => {
                $(".Check").eq(0).off();

                if(game.character === "Brain"){
                    OuterModule.plotDisplay(1, $(".MessageText"));

                    $(".Check").text(0).text("(果然有甚麼故事啊，是家中火災嗎?)");

                    $(".Check").eq(0).on("click", () => {
                        $(".Check").eq(0).off();
                        $(".MessageScreen").css("display", "none");
                    })
                }   
                else{
                    $(".MessageScreen").css("display", "none");
                }
            })
        })

    $(".Q2").on("click", () => {
        $(".Q2").off();

        $(".Q2").css({
            "width": "42%",
            "transition": "1s",
            "left": "45%",
            "opacity": "0.8",
            "top": "10%"})

        fetch("dialogue.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                game.Plot = data.Answer;
                $(".MessageScreen").css("display", "flex");
                OuterModule.plotDisplay(0, $(".MessageText"));

                $(".Check").eq(1).css("display", "flex");
                $(".Check").eq(2).css("display", "flex");
                $(".Check").eq(0).text("與仇人死戰");
                $(".Check").eq(1).text("與獅子搏鬥");
                $(".Check").eq(2).text("用盡辦法撲滅火災");

                $(".Check").on("click", (event) => {
                    $(".Check").off();
                    if($(event.target).is($(".Check").eq(1))){
                        $(".Q2").attr("src", "../../asset/imgs/Q3.png")

                        game.Plot = data.correct;
                        OuterModule.plotDisplay(0, $(".MessageText"));

                        $(".Check").eq(0).css("display", "flex");
                        $(".Check").eq(1).css("display", "none");
                        $(".Check").eq(2).css("display", "none");

                        $(".Check").eq(0).text("看來是新的題目。");

                        $(".Check").eq(0).on("click", () => {
                            $(".Check").eq(0).off();
                            game.Plot = data.Answer;
                            OuterModule.plotDisplay(0, $(".MessageText"));

                            $(".Check").eq(0).css("display", "none");
                            $(".Check").eq(1).css("display", "none");
                            $(".Check").eq(2).css("display", "none");
                            $(".Check").eq(3).css("display", "flex");

                            $(".Check").on("click", () => {
                                $(".Check").off();
                                $(".Check").on("click", (event) => {
                                    $(".Check").off();
                                    let pattern = /下棋/
                                    if(pattern.test($(event.target).val())){
                                        $(".Q2").attr("src", "../../asset/imgs/Q4.png")

                                        game.Plot = data.correct;
                                        OuterModule.plotDisplay(1, $(".MessageText"));

                                        $(".Check").eq(0).css("display", "flex");
                                        $(".Check").eq(1).css("display", "none");
                                        $(".Check").eq(2).css("display", "none");
                                        $(".Check").eq(3).css("display", "none");

                                        $(".Check").eq(0).text("到底有幾題啊!");

                                        $(".Check").eq(0).on("click", () => {
                                            $(".Check").eq(0).off();
                                            game.Plot = data.Answer;
                                            OuterModule.plotDisplay(0, $(".MessageText"));
                
                                            $(".Check").eq(0).css("display", "flex");
                                            $(".Check").eq(1).css("display", "flex");
                                            $(".Check").eq(2).css("display", "flex");
                                            $(".Check").eq(3).css("display", "none");

                                            $(".Check").eq(0).text("1");
                                            $(".Check").eq(1).text("2");
                                            $(".Check").eq(2).text("3");

                                            $(".Check").eq(2).on("click", () => {
                                                $(".Check").off();
                                                $(".Q2").css("display", "none");
                                                game.Plot = data.correct;
                                                OuterModule.plotDisplay(2, $(".MessageText"));

                                                $(".Check").eq(0).css("display", "flex");
                                                $(".Check").eq(1).css("display", "none");
                                                $(".Check").eq(2).css("display", "none");
                                                $(".Check").eq(3).css("display", "none");

                                                $(".Check").text("(請選擇接下來要前往的房間)");

                                                $(".Check").on("click", () => {
                                                    $(".Check").off();
                                                    $(".MessageScreen").css("display", "none");

                                                    OuterModule.mazeRoom();
                                                    OuterModule.mazeRoomClickDetect("../level3/level3.html");
                                                    $(".worddoor_container").css("display", "flex");
                                                })
                                            })

                                            $(".Check").eq(0).on("click", () => {
                                                $(".Check").off();
                                                MyModule.mistakeDie(data);
                                            })

                                            $(".Check").eq(1).on("click", () => {
                                                $(".Check").off();
                                                MyModule.mistakeDie(data);
                                            })
                                        })
                                    }
                                    else{
                                        MyModule.mistakeDie(data);
                                    }
                                })
                            })
                        })
                    }
                    else{
                        MyModule.mistakeDie(data);
                    }
                })
            })
    })
})