export{closeClickCreate, checkClickCreate, displayDialogue};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function closeClickCreate(){
    $(".Close").on('click', () => {        
        $(".character").css("display", "flex");
        $(".MessageScreen").css("display", "none");
        clearInterval(OuterModule.subtitle);
        $(".Close").off();
        $(".Check").off();
    })
}

function checkClickCreate(){
    $(".Check").on('click', () => {
        $(".MessageCharacter").css("display", "none");
        $(".Check").off();
        clearInterval(OuterModule.subtitle);
        localStorage.setItem("Character", game.character);
        if(game.character === "mayorson")
            localStorage.setItem("BeKill", true);

        fetch("dialogue.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            game.Plot = data.goRoad;
            OuterModule.plotDisplay(0, $(".MessageText"));
    
            $(".Close").css("display", "none");
    
            $(".Check").text("...");
    
            $(".Check").on("click", () => {
                $(".Check").off();
                window.location.href = "../road/road.html";
            })
        })    
    })
}

function displayDialogue(dialogueClose, dialogueCheck){
    OuterModule.plotDisplay(0, $(".MessageText"));

        $(".Close").css("display", "none");

        $(".Check").text("你好，我是政府委託來調查失蹤案件的調查員。");

        $(".Check").on('click', () =>{
            OuterModule.plotDisplay(1, $(".MessageText"));

            closeClickCreate();
            checkClickCreate();

            $(".Close").css("display", "flex");
            $(".Close").text(dialogueClose);
            $(".Check").text(dialogueCheck);
        })
}