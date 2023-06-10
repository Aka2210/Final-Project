export{bookPageJudge, bookEventListenCreate, phoneEventListenCreate, breadEventListenCreate, cameraEventListenCreate, cupEventListenCreate};
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
        game.backgroundMusic.pause();
        $(".phoneScreen").css("display", "flex");
        $(".roomScreen").css("display", "none");
        $("#keyPhone").on('ended', () => {
            game.backgroundMusic.play();
            $(".phoneScreen").css("display", "none");
            $(".roomScreen").css("display", "flex");
        })
    })

    $(".phoneClose").on('click', () => {
        game.specialSoundEffects.pause();
        game.backgroundMusic.play();
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
    $(".Close").text("晚點再喝");
    $(".Check").text("開心飲用");

    $(".cup").on('click', () => {
        $(".roomScreen").css("display", "none");
        $(".cupScreen").css("display", "flex");

        fetch("cup.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            game.Plot = data.cup;
            OuterModule.plotDisplay(0, $(".MessageText"));
        })
    })

    $(".Check").on('click', () => {
        $(".cup").off();
        clearInterval(OuterModule.subtitle);

        OuterModule.plotDisplay(1, $(".MessageText"));

        $(".Close").text("確認");
        $(".Check").css("display", "none");

        localStorage.setItem("DRINK", true);

        $(".cup").on('click', () => {
            $(".roomScreen").css("display", "none");
            $(".cupScreen").css("display", "flex");
            
            OuterModule.plotDisplay(2, $(".MessageText"));
            })
    })

    $(".Close").on('click', () => {
        clearInterval(OuterModule.subtitle);
        $(".roomScreen").css("display", "flex");
        $(".cupScreen").css("display", "none");
    })
}