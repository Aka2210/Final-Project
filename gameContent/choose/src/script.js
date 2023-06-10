import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener("DOMContentLoaded", () => {
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    
    OuterModule.Music();
    $(".character *").on("click", (character) => {
        game.character = character.target.className
        sessionStorage.setItem("Character", game.character);

        $(".character").css("display", "none");
        $(".chooseCharacter").attr("src", "../../asset/imgs/" + character.target.className + ".png");
        $(".chooseMessageScreen").css("display", "flex");


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
                }
                else if(game.character === "mayorson"){
                    game.Plot = data.mayorson;
                }
                else if(game.character === "kate"){
                    game.Plot = data.kate;
                }

                OuterModule.plotDisplay(0, $(".chooseMessageText"));
            })

        $(".chooseClose").on('click', () => {        
            $(".character").css("display", "flex");
            $(".chooseMessageScreen").css("display", "none");
            clearInterval(OuterModule.subtitle);
        })

        $(".chooseCheck").on('click', () => {
            if(game.character === "mayorson"){
                localStorage.setItem("DIE", true);
            }
            clearInterval(OuterModule.subtitle);
            window.location.href = "../road/road.html";
        })
    })
})