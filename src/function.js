import { game } from "./Game.js";

export{musicPlay, plotDisplay, Music, subtitle, diePlay};

let subtitle;

function musicPlay(MusicID){
    let Music = $('#' + MusicID)[0];//抓取ID為MusicID的音樂檔
    Music.currentTime = 1;//從第一秒開始撥放(避免前面的空白時段)
    Music.loop = true;//持續重複音樂撥放
    return Music;//將抓到且設定好的音樂回傳
}

function plotDisplay(i, where){
    where.html("");
    let j = 0;
    console.log(game.Plot[1]);
    subtitle = setInterval(() => {//設置計時器，每100毫秒打一個字
        where.html(where.html() + game.Plot[i][j]);//清空當前前情提要格中的文字

        $(where).on('click', () => {//若字尚未打完就點擊，快速打入所有劇情
            $(where).off();
            clearInterval(subtitle);
            where.html(game.Plot[i]);
            return;
        })

        if(j < game.Plot[i].length - 1)//如果該頁字尚未打完，持續抓取下一個字
            j++
        else{
            $('html').off();
            clearInterval(subtitle);//清除計時器
        }
    }, 100);
}

function Music(){
    game.backgroundMusic = musicPlay("backgroundMusic");
    game.backgroundMusic.volume = 0.05;
    game.backgroundMusic.play();
}

function diePlay(where){
    let times = 0;

    let die1 = setInterval(() => {
        let positionX = Math.floor(Math.random() * -10 - 40), positionY = Math.floor(Math.random() * -10);

        if(times >1)
            clearInterval(die1);

        times++;

        let dieImg1 = $("<img>");
        dieImg1.attr("src", "../../asset/imgs/specialeffects.png");
        dieImg1.css({"position" : "fixed"
        , "top" : positionY + "%"
        , "left" : positionX + "%"});
        dieImg1.addClass("donotTransform");
        where.append(dieImg1);
    }, 800);

    let die2 = setInterval(() => {
        let positionY = Math.floor(Math.random() * -10 - 10);

        if(times >1){
            clearInterval(die2);
            setTimeout(() => {
                let dieImg = $("<img>");
                dieImg.attr("src", "../../asset/imgs/specialeffectsDie.png");
                dieImg.css({"position" : "fixed"
                , "top" : "-20%"});
                dieImg.addClass("donotTransform");
                where.append(dieImg);

                let reset = $("<h1>"), resetScreen = $("<div>"), home = $("<h1>");

                resetScreen.addClass("resetScreen");

                reset.addClass("reset");

                reset.text("重新開始");
                resetScreen.append(reset);

                home.addClass("home");

                home.text("回首頁");
                resetScreen.append(home);

                where.append(resetScreen);

                $(".reset").on("click", () => {
                    window.location.href = "../Recap/recap.html";
                })

                $(".home").on("click", () => {
                    window.location.href = "../initScreen/init.html";
                })

            }, 300) 
        }

        times++;

        let dieImg2 = $("<img>");
        dieImg2.attr("src", "../../asset/imgs/specialeffects.png");
        dieImg2.css({"position" : "fixed"
        , "top" : positionY + "%"});
        dieImg2.addClass("donotTransform");
        where.append(dieImg2);
    }, 1000);

    let die3 = setInterval(() => {
        let positionX = Math.floor(Math.random() * -10 - 40), positionY = Math.floor(Math.random() * -10 - 10);
        if(times >1)
            clearInterval(die3);

        times++;

        let dieImg3 = $("<img>");
        dieImg3.attr("src", "../../asset/imgs/specialeffects.png");
        dieImg3.css({"position" : "fixed"
        , "top" : positionY + "%"
        , "right" : positionX + "%"});
        dieImg3.addClass("donotTransform");
        where.append(dieImg3);
    }, 500);
}