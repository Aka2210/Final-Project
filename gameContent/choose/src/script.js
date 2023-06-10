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
        $(".MessageCharacter").attr("src", "../../asset/imgs/" + character.target.className + ".png");
        $(".MessageScreen").css("display", "flex");

        fetch("dialogue.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(game.character === "Alina"){
                    game.Plot = data.Alina;
                    MyModule.displayDialogue("(傳說總是怪力亂神的，並不靠譜)", "瞭解歷史也許能給我很大的幫助。");
                }
                else if(game.character === "Brain"){
                    game.Plot = data.Brain;

                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Close").css("display", "none");

                    $(".Check").text("你好，我是政府委託來調查失蹤案件的調查員。");

                    let i = 1;
                    $(".Check").on('click', () =>{
                        OuterModule.plotDisplay(i, $(".MessageText"));

                        if(i === 1)
                            $(".Check").text("大火?");
                        else if(i === 2){
                            MyModule.closeClickCreate();
                            MyModule.checkClickCreate();

                            $(".Close").css("display", "flex");
                            $(".Close").text("(總感覺有些可疑)");
                            $(".Check").text("好吧，那就麻煩你了。");
                        }

                        i++;
                    })
                }
                else if(game.character === "mayorson"){
                    game.Plot = data.mayorson;

                    MyModule.displayDialogue("(用犧牲是不是太誇張了)", "警察應該有相關調查經驗吧?");
                }
                else if(game.character === "kate"){
                    game.Plot = data.kate;

                    MyModule.displayDialogue("(總感覺google比老師有用呢)", "那我們可以從消失者訊息著手調查。");
                }

                localStorage.setItem("Character", game.character);
            })    
    })
})