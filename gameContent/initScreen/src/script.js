import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    game.backgroundMusic = OuterModule.musicPlay("backgroundMusic");
    game.backgroundMusic;

    game.backgroundMusic.play();
    $('.gameScreen').addClass('initScreenImgMove');
    // $('.gameScreen').removeClass('initScreenImgMove');
    
    $('.leaveBtn').on('click', () => {
        window.close();
    })

})