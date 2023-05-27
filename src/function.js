export{plotDisplay, musicPlay};
import {game} from './Game.js';

function plotDisplay(i){//遞迴概念函式
    if(i < game.Plot.length){//前情提要
        game.backgroundMusic = musicPlay("KeyboardSound");//抓取要撥放的背景音樂
        $('.recap').html("");
        let j = 0;

        let subtitle = setInterval(() => {//設置計時器，每100毫秒打一個字
            game.backgroundMusic.play();//撥放打字聲
            $('.recap').html($('.recap').html() + game.Plot[i][j]);//清空當前前情提要格中的文字

            $('html').on('click', () => {//若字尚未打完就點擊，快速打入所有劇情
                $('html').off();
                clearInterval(subtitle);
                game.backgroundMusic.pause();
                $('.recap').html(game.Plot[i]);
                SetNextSubtitleBTN(i);//設定前往下一頁字幕的按鈕
                return;
            })

            if(j < game.Plot[i].length - 1)//如果該頁字尚未打完，持續抓取下一個字
                j++
            else{
                $('html').off();
                game.backgroundMusic.pause();
                clearInterval(subtitle);//清除計時器

                if(i < game.Plot.length){            
                    SetNextSubtitleBTN(i);
                }
            }
        }, 100);
    }
    else{//前情提要結束，前往下一個畫面
        game.backgroundMusic = "";//清空當前背景音樂
        $('.recap').removeClass("bottomLineDisplay");//關閉字幕後面的底線
    }
}

function musicPlay(MusicID){
    let Music = $('#' + MusicID)[0];//抓取ID為MusicID的音樂檔
    Music.currentTime = 1;//從第一秒開始撥放(避免前面的空白時段)
    Music.loop = true;//持續重複音樂撥放
    return Music;//將抓到且設定好的音樂回傳
}

function SetNextSubtitleBTN(i){
    $('html').on('click', () => {//點擊螢幕後前往下一頁劇情
        $('html').off();
        plotDisplay(++i)
    })
}