export{setTimer, timer};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

let timer;

function setTimer() {
    const countdownElement = document.querySelector(".time-remaining");
    const progressBar = document.querySelector(".progress-bar");

    let countdown = 30;
    let width = 100;

    timer = setInterval(() => {
        countdown--;
        width = (countdown / 30) * 100;

        countdownElement.textContent = countdown;

        progressBar.style.width = width + "%";

        if (countdown <= 10) {
            progressBar.style.backgroundColor = "#ff0000";
        }

        if (countdown <= 0) {
            clearInterval(timer);
            OuterModule.diePlay($(".MessageScreen"));
            // setTimer();
        }
    }, 1000);
};