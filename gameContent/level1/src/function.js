export{startTiming, showPuzzle};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function startTiming(){
    let timer = document.getElementById("timer");
    let time = 300; // 5 minutes in seconds

    function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedTime = ("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);
    return formattedTime;
    }

    function updateTimer() {
    timer.textContent = formatTime(time);

    let Drink = localStorage.getItem("DRINK");

    if(time === 180 && Drink){
        fetch("dialogue.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                game.Plot = data.cupDie;
                $(".MessageScreen").css("display", "flex");
                $(".game").css("display", "none");
                OuterModule.plotDisplay(0, $(".MessageText"));
                $(".Check").text("為何會如此，你對我們做了什麼，時間根本還沒到(你指著鬼怪大聲控訴著)。")
                $(".Check").on("click", () => {
                    $(".Check").off();
                    OuterModule.plotDisplay(1, $(".MessageText"), 400);
                    $(".MessageCharacter").css("display", "none");
                    $(".Check").text("我的身體...");
                    $(".Check").on("click", () => {
                        $(".Check").off();
                        OuterModule.plotDisplay(2, $(".MessageText"));
                        $(".Check").text("......");
                        $(".EYE").css("display", "flex");
                        $(".MessageScreen").css("z-index", "1000");
                        setTimeout(() => {
                            $(".Check").on("click", () => {
                                $(".Check").off();
                                OuterModule.diePlay($(".MessageScreen"));
                            })
                        }, 6000)
                    })
                })
            })
    }

    if (time === 60) {
        timer.classList.add("red");
    }

    if (time === 0) {
        clearInterval(interval);

        OuterModule.diePlay($(".level1Scr"));
        // 在計時器結束後可以執行其他操作
    }

    time--;
    }

    updateTimer(); // 更新一次計時器以避免延遲
    let interval = setInterval(updateTimer, 1000); // 每秒更新計時器
}

function showPuzzle(){
    $(".Check").on("click", () => {
        $(".MessageScreen").css("display", "none");   
        $(".game").css("display", "flex");
        $(".Check").off();
    })
}