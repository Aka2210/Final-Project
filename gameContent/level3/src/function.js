export{setTimer, timer, problemStart};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

let timer;

function setTimer(data) {
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
            localStorage.setItem("TimeOut", true);
            DIE(data);
            // setTimer();
        }
    }, 1000);
};

function problemStart(data, nowPlot){
    clearInterval(timer);
    setTimer(data);
    game.Plot = data.Question;

    let answer = data.answer;
    OuterModule.plotDisplay(nowPlot, $(".dialogue1 .MessageText"));

    $(".dialogue1 .Check").css("display", "flex");

    if(nowPlot === 0){
        $(".dialogue1 .Check").eq(0).text("麵包");
        $(".dialogue1 .Check").eq(1).text("花茶");
        $(".dialogue1 .Check").eq(2).text("蘑菇湯");
        $(".dialogue1 .Check").eq(3).text("濃湯");
        $(".dialogue1 .Check").eq(4).css("display", "none");
    }
    else if(nowPlot === 1){
        $(".dialogue1 .Check").eq(0).text("Laila");
        $(".dialogue1 .Check").eq(1).text("Anna");
        $(".dialogue1 .Check").eq(2).text("Erin");
        $(".dialogue1 .Check").eq(3).css("display", "none");
        $(".dialogue1 .Check").eq(4).css("display", "none");
    }
    else if(nowPlot === 2){
        $(".dialogue1 .Check").eq(0).text("病死的");
        $(".dialogue1 .Check").eq(1).text("餓死的");
        $(".dialogue1 .Check").eq(2).text("被燒死的");
        $(".dialogue1 .Check").eq(3).text("被打死的");
        $(".dialogue1 .Check").eq(4).css("display", "none");
    }
    else if(nowPlot === 3){
        $(".dialogue1 .Check").eq(0).text("麵包店");
        $(".dialogue1 .Check").eq(1).text("鎮長辦公室");
        $(".dialogue1 .Check").eq(2).text("森林");
        $(".dialogue1 .Check").eq(3).text("農場");
        $(".dialogue1 .Check").eq(4).css("display", "none");
    }
    else if(nowPlot === 4){
        $(".dialogue1 .Check").eq(0).text("佃農");
        $(".dialogue1 .Check").eq(1).text("醫生");
        $(".dialogue1 .Check").eq(2).text("花匠");
        $(".dialogue1 .Check").eq(3).text("木匠");
        $(".dialogue1 .Check").eq(4).text("警察");
    }

    $(".Check").on("click", (event) => {
        $(".Check").off();
        if($(event.target).is($(".Check").eq(answer[nowPlot])) && nowPlot !== 4){
            nowPlot++;
            problemStart(data, nowPlot)
        }
        else if($(event.target).is($(".Check").eq(answer[nowPlot])) && nowPlot === 4){
            game.Plot = data.correct;
            OuterModule.plotDisplay(0, $(".dialogue1 .MessageText"), 300);

            $(".dialogue1 .Check").css("display", "none");
            $(".dialogue1 .Check").eq(0).css("display", "flex");
            $(".dialogue1 .Check").eq(1).css("display", "flex");
            $(".dialogue1 .Check").eq(0).text("不，抱歉，我不是艾瑞克。");
            $(".dialogue1 .Check").eq(1).text("對，我還是愛你的。");

            $(".dialogue1 .Check").eq(1).on("click", () => {
                $(".Check").off();
                $(".EYE").css("display", "flex");
                $(".dialogue1").css("display", "none");
                localStorage.setItem("ALIVE", true);
                clearInterval(timer);
                let dieDelay = setTimeout(() => {
                    window.location.href = "../Recap/recap.html";
                },8000);
                
            })
            
            $(".dialogue1 .Check").eq(0).on("click", () => {
                $(".Check").off();
                DIE(data);
            })
        }
        else{
            DIE(data);
        }  
    })
}

function DIE(data){
    $(".Check").off();
    game.Plot = data.mistake;
       
    let timeOut = localStorage.getItem("TimeOut");
    if(timeOut){
        OuterModule.plotDisplay(1, $(".dialogue1 .MessageText"));
    }
    else{
        OuterModule.plotDisplay(0, $(".dialogue1 .MessageText"));
    }

    $(".dialogue1 .Check").css("display", "none");
    $(".dialogue1 .Check").eq(0).css("display", "flex");
    $(".dialogue1 .Check").text("...");

    $(".dialogue1 .Check").on("click", () => {
        $(".Check").off();
        OuterModule.diePlay($(".dialogue1"));
    })
}