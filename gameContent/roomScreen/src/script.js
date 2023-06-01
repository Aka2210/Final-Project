import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded', () => {
    $(".camera").on('click', () => {

    })

    $(".phone").on('click', () => {
        game.specialSoundEffects = OuterModule.musicPlay("speech");
        game.specialSoundEffects.loop = false;
        game.specialSoundEffects.play();
    })

    $(".cup").on('click', () => {
        
    })

    $(".book2").on('click', () => {
        
    })

    $(".bread").on('click', () => {
        
    })
})