import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();
    
    game.character = localStorage.getItem("Character");
    $(".dialogue2 .MessageCharacter").attr("src", '../../asset/imgs/' + game.character +'.png');

    $(".dialogue2").css("display", "flex");

    fetch("dialogue.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        $(".Check").text("只能靜觀其變了");

        if(game.character === "Alina"){
            game.Plot = data.Alina;
            $(".Check").text("你的回話總是很篤定呢(總感覺她知道些什麼)。");
        }
        else if(game.character === "Brain"){
            game.Plot = data.Brain;
        }
        else if(game.character === "kate"){
            game.Plot = data.kate;
        }
        OuterModule.plotDisplay(0, $(".dialogue2 .MessageText"));

        $(".Check").on("click", () => {
            $(".Check").off();
            $(".dialogue2").css("display", "none");
            $(".dialogue1").css("display", "flex");
            game.Plot = data.woman;
            OuterModule.plotDisplay(0, $(".dialogue1 .MessageText"), 200);

            $(".Check").css("display", "none");
            $(".Check").eq(0).css("display", "flex");
            $(".Check").text("(回答問題證明自己就是艾瑞克)");

            $(".Check").on("click", () => {
                $(".Check").off();
                let Drink = localStorage.getItem("DRINK")
                if(Drink){
                    game.Plot = data.DrinkDie;
                    OuterModule.plotDisplay(0, $(".dialogue1 .MessageText"));
                    $(".Check").text("中毒?(心想這女巫還真是神通廣大啊)");
                    $(".Check").on("click", () => {
                        $(".Check").off();
                        MyModule.problemStart(data, 0);
                    })
                }
                else{
                    MyModule.problemStart(data, 0);
                }
            })
        })
    })
})