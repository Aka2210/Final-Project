import {game} from './Game.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    game.backgroundMusic = MyModule.musicPlay("backgroundMusic");
    game.backgroundMusic;
})