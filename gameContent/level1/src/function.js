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