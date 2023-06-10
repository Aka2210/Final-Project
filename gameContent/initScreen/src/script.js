import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }

    game.resetGame();

    OuterModule.Music();
    
    $('.gameScreen').addClass('initScreenImgMove');
    // $('.gameScreen').removeClass('initScreenImgMove');
    
    $('.leaveBtn').on('click', () => {
        window.close();
    })

})