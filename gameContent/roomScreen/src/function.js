export{bookPageJudge, bookEventListenCreate, phoneEventListenCreate, breadEventListenCreate, cameraEventListenCreate};
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
        $(".roomScreen").css("display", "none");
        $("#keyPhone").on('ended', () => {
            $(".roomScreen").css("display", "flex");
        })
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