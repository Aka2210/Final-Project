export{bookPageJudge, bookEventListenCreate, phoneEventListenCreate};
import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';

function bookPageJudge(){
    console.log(game.bookPage);
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