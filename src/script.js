import {game} from './Game.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded', () => {
    if (performance.navigation.type == 1) {
        window.location.href = "index.php";
    }

    game.backgroundMusic = MyModule.musicPlay("backgroundMusic");
    game.backgroundMusic;
})