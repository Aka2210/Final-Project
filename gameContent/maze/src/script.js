import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();

    game.character = localStorage.getItem("Character");

    $(".MessageCharacter").attr("src", '../../asset/imgs/' + game.character +'.png');

    fetch("dialogue.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if(game.character === "Alina"){
                game.Plot = data.Alina;
                localStorage.setItem("room", "[]");
            }
            else if(game.character === "Brain"){
                game.Plot = data.Brain;
                localStorage.setItem("room", "[0, 1]");
            }
            else if(game.character === "kate"){
                game.Plot = data.kate;
                localStorage.setItem("room", "[0]");
            }

            OuterModule.mazeRoom();
            OuterModule.plotDisplay(0, $(".MessageText"));

            $(".Check").eq(0).text("一不小心就成為失蹤人口了啊!")
            $(".Check").eq(1).text("房間?")
            $(".Check").eq(2).css("display", "none");

            $(".Check").on("click", () => {
                $(".Check").off();
                OuterModule.plotDisplay(1, $(".MessageText"));
                $(".Check").eq(0).text("乾坐在這也沒有用，那就讓我選一間探索吧")
                $(".Check").eq(1).css("display", "none");
                $(".Check").eq(2).css("display", "none");

                $(".Check").on("click", () => {
                    let Drink = localStorage.getItem("DRINK");
                    if(Drink){
                        game.Plot = data.cupDie;
                        OuterModule.plotDisplay(0, $(".MessageText"), 300);
                        $(".Check").eq(0).text("怎麼了?");
                        $(".Check").on("click", () => {
                            OuterModule.plotDisplay(1, $(".MessageText"), 200);
                            $(".Check").eq(0).text("我也感覺到有些暈眩，需不需要先停下來休息?");
                            $(".Check").off();

                            $(".Check").on("click", () => {
                                OuterModule.plotDisplay(2, $(".MessageText"), 300);
                                $(".Check").eq(0).text("有狀況隨時互相回報。");
                                $(".Check").off();

                                $(".Check").on("click", () => {
                                    $(".Check").off();
                                    $(".MessageScreen").css("display", "none");
                                    OuterModule.mazeRoomClickDetect("../level1/level1.html");
                                    $(".worddoor_container").css("display", "flex");                          
                                })                      
                            })
                        })
                    }
                    else{
                        $(".MessageScreen").css("display", "none");
                        OuterModule.mazeRoomClickDetect("../level1/level1.html");
                        $(".worddoor_container").css("display", "flex");
                    }
                })
            })
        })
})