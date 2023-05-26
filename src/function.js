export{plotDisplay};
import {game} from './Game.js';

function plotDisplay(i){
    game.backgroundMusic = musicPlay("KeyboardSound");
    console.log(game.Plot.length);
    let j = 0;
    let subtitle = setInterval(() => {
        game.backgroundMusic.play();
        $('.recap').html($('.recap').html() + game.Plot[i][j]);
        if(j < game.Plot[i].length - 1)
            j++
        else{
            game.backgroundMusic.pause();
            clearInterval(subtitle);

            if(i < game.Plot.length - 1){
                console.log(i);
                $('.recap').html($('.recap').html() + "<br>&emsp;&emsp;");
                let next = setTimeout(() => {plotDisplay(++i)}, 2000);
            }
            else{
                game.backgroundMusic = "";
            }
        }
    }, 100);
}

function musicPlay(MusicID){
    let Music = $('#' + MusicID)[0];
    Music.currentTime = 1;
    Music.loop = true;
    return Music;
}