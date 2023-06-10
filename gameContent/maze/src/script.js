import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

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
                }
                else if(game.character === "Brain"){
                    game.Plot = data.Brain;
                    $(".worddoor_container a").eq(0).css("display", "none");
                    $(".worddoor_container a").eq(1).css("display", "none");
                }
                else if(game.character === "kate"){
                    game.Plot = data.kate;
                }

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
                        $(".MessageScreen").css("display", "none");
                        $(".worddoor_container").css("display", "flex");
                    })
                })
            })
})