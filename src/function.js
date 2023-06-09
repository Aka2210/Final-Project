import { game } from "./Game.js";

export{musicPlay, plotDisplay, Music, subtitle};

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