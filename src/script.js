import {game} from './Game.js';
import * as MyModule from './function.js';

document.ready(function() {
    game.backgroundMusic = MyModule.musicPlay("backgroundMusic");
    game.backgroundMusic;
})