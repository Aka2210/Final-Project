export{mistakeDie};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function mistakeDie(data){
    $(".Check").eq(0).text("...");
    $(".Check").eq(0).css("display", "flex");
    $(".Check").eq(1).css("display", "none");
    $(".Check").eq(2).css("display", "none");
    $(".Check").eq(3).css("display", "none");

    game.Plot = data.mistake;
    OuterModule.plotDisplay(0, $(".MessageText"), 200);

    $(".Check").eq(0).on("click", () => {
        $(".Check").eq(0).off();
        OuterModule.plotDisplay(1, $(".MessageText"), 200);

        $(".Check").eq(0).on("click", () => { 
            $(".Check").eq(0).off();
            OuterModule.diePlay($(".MessageScreen"));
        })
    })
}