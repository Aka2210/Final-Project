export{plotDisplay};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function plotDisplay(i){//遞迴概念函式
    if(i < game.Plot.length){//前情提要
        game.specialSoundEffects = OuterModule.musicPlay("KeyboardSound");//抓取要撥放的背景音樂
        $('.recap').html("");
        let j = 0;

        let subtitle = setInterval(() => {//設置計時器，每100毫秒打一個字
            game.specialSoundEffects.play();//撥放打字聲
            $('.recap').html($('.recap').html() + game.Plot[i][j]);//清空當前前情提要格中的文字

            $('html').on('click', () => {//若字尚未打完就點擊，快速打入所有劇情
                $('html').off();
                clearInterval(subtitle);
                game.specialSoundEffects.pause();
                $('.recap').html(game.Plot[i]);
                SetNextSubtitleBTN(i);//設定前往下一頁字幕的按鈕
                return;
            })

            if(j < game.Plot[i].length - 1)//如果該頁字尚未打完，持續抓取下一個字
                j++
            else{
                $('html').off();
                game.specialSoundEffects.pause();
                clearInterval(subtitle);//清除計時器

                if(i < game.Plot.length){            
                    SetNextSubtitleBTN(i);
                }
            }
        }, 100);
    }
    else{//前情提要結束，前往下一個畫面
        game.specialSoundEffects = "";//清空當前背景音樂
        $('.recap').removeClass("bottomLineDisplay");//關閉字幕後面的底線
        $('.recap').css({'display' : 'none'});
        $('.roomScreen').css({'display' : 'flex'});
        let die = localStorage.getItem("DIE");
        if(die)
            window.location.href = "../initScreen/init.html";
        else
            window.location.href = "../roomScreen/room.html";
    }
}

function SetNextSubtitleBTN(i){
    $('html').on('click', () => {//點擊螢幕後前往下一頁劇情
        $('html').off();
        plotDisplay(++i)
    })
}