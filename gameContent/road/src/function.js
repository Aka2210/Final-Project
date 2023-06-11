export{ghostJump};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function ghostJump(){
    $(".ghostScreen").css("display", "flex");

    fetch("roadPlot.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            game.Plot = data.ghostCome;

            OuterModule.plotDisplay(0, $(".MessageText"), 50);

            $(".Check").eq(0).text("快跑!!!");
            $(".Check").eq(1).text("靜觀其變")

            $(".Check").on("click", () => {
                $(".MessageScreen").css("display", "none");
                let DieDetect = setTimeout(() => {
                    $(".EYE").css("display", "none");
                    $(".ghostScreen").css(
                        {"top": "0%",
                        "left": "0%",
                        "width": "100%"});
                    setTimeout(() =>{
                        window.location.href = "../maze/maze.html";
                    }, 1500)
                }, 8000)
                $(".EYE").css("display", "flex");
            })
        })
}