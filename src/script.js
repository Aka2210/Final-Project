import {game} from './Game.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem("level");
    game.backgroundMusic = MyModule.musicPlay("backgroundMusic");
    game.backgroundMusic;
})