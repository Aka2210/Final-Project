export{bookPageJudge, bookEventListenCreate, phoneEventListenCreate, breadEventListenCreate, cameraEventListenCreate, plotDisplay, cupEventListenCreate};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function bookPageJudge(){
    if(game.bookPage === 1){
        $(".bookImg").attr('src', '../../asset/imgs/keyBook/2.png')
        game.bookPage = 2;
    }
    else{
        $(".bookImg").attr('src', '../../asset/imgs/keyBook/1.png')
        game.bookPage = 1;
    }
}

function bookEventListenCreate(){
    $(".book2").on('click', () => {
        $(".book").css("display", "flex");
        $(".roomScreen").css("display", "none");
    })

    $(".bookClose").on('click', () => {
        $(".roomScreen").css("display", "flex");
        $(".book").css("display", "none");
        $(".close").off();
    })

    $(".bookNext").on('click', () => {
        bookPageJudge();
    })

    $(".bookLast").on('click', () => {
        bookPageJudge();
    })
}

function phoneEventListenCreate(){
    $(".phone").on('click', () => {
        game.specialSoundEffects = OuterModule.musicPlay("keyPhone");
        game.specialSoundEffects.loop = false;
        game.specialSoundEffects.play();
        $(".phoneScreen").css("display", "flex");
        $(".roomScreen").css("display", "none");
        $("#keyPhone").on('ended', () => {
            $(".roomScreen").css("display", "flex");
        })
    })

    $(".phoneClose").on('click', () => {
        game.specialSoundEffects.pause();
        game.specialSoundEffects.currentTime = 0;
        game.specialSoundEffects = "";
        $(".phoneScreen").css("display", "none");
        $(".roomScreen").css("display", "flex");
    })
}

function breadEventListenCreate(){
    $(".bread").on('click', () => {
        $(".breadScreen").css("display", "flex");
        $(".roomScreen").css("display", "none");
    })

    $(".breadClose").on('click', () => {
        $(".roomScreen").css("display", "flex");
        $(".breadScreen").css("display", "none");
    })
}

function cameraEventListenCreate(){
    $(".camera").on('click', () => {
        $(".roomScreen").css("display", "none");
        $(".cameraScreen").css("display", "flex");
    })

    $(".cameraClose").on('click', () => {
        $(".roomScreen").css("display", "flex");
        $(".cameraScreen").css("display", "none");
    })

    $(".cameraNext").on('click', () => {
        if(game.cameraPicture < 6){
            game.cameraPicture++;
            $(".cameraImg").attr("src", "../../asset/imgs/keyCamera/" + game.cameraPicture + ".png");
        }
        else{
            game.cameraPicture = 1;
            $(".cameraImg").attr("src", "../../asset/imgs/keyCamera/" + game.cameraPicture + ".png");
        }
    })

    $(".cameraLast").on('click', () => {
        if(game.cameraPicture > 1){
            game.cameraPicture--;
            $(".cameraImg").attr("src", "../../asset/imgs/keyCamera/" + game.cameraPicture + ".png");
        }
        else{
            game.cameraPicture = 6;
            $(".cameraImg").attr("src", "../../asset/imgs/keyCamera/" + game.cameraPicture + ".png");
        }
    })
}

function cupEventListenCreate(){
    $(".cupClose").text("晚點再喝");
    $(".cupCheck").text("安心飲用");

    $(".cup").on('click', () => {
        $(".roomScreen").css("display", "none");
        $(".cupScreen").css("display", "flex");

        fetch("cup.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            game.Plot = data.cup;
            plotDisplay(0);
        })
    })

    $(".cupCheck").on('click', () => {
        
    })

    $(".cupClose").on('click', () => {
        $(".roomScreen").css("display", "flex");
        $(".cupScreen").css("display", "none");
    })
}

function plotDisplay(i){
    $('.cupMessageText').html("");
    let j = 0;

    let subtitle = setInterval(() => {//設置計時器，每100毫秒打一個字
        $('.cupMessageText').html($('.cupMessageText').html() + game.Plot[i][j]);//清空當前前情提要格中的文字

        $('html').on('click', () => {//若字尚未打完就點擊，快速打入所有劇情
            $('html').off();
            clearInterval(subtitle);
            $('.cupMessageText').html(game.Plot[i]);
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