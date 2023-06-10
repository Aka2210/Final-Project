export{closeClickCreate, checkClickCreate, displayDialogue};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function closeClickCreate(){
    $(".chooseClose").on('click', () => {        
        $(".character").css("display", "flex");
        $(".chooseMessageScreen").css("display", "none");
        clearInterval(OuterModule.subtitle);
        $(".chooseClose").off();
        $(".chooseCheck").off();
    })
}

function checkClickCreate(){
    $(".chooseCheck").on('click', () => {
        if(game.character === "mayorson"){
            localStorage.setItem("DIE", true);
        }
        clearInterval(OuterModule.subtitle);
        window.location.href = "../road/road.html";
    })
}

function displayDialogue(dialogueClose, dialogueCheck){
    OuterModule.plotDisplay(0, $(".chooseMessageText"));

        $(".chooseClose").css("display", "none");

        $(".chooseCheck").attr("value", "你好，我是政府委託來調查失蹤案件的調查員。");

        $(".chooseCheck").on('click', () =>{
            OuterModule.plotDisplay(1, $(".chooseMessageText"));

            closeClickCreate();
            checkClickCreate();

            $(".chooseClose").css("display", "flex");
            $(".chooseClose").text(dialogueClose);
            $(".chooseCheck").attr("value", dialogueCheck);
        })
}