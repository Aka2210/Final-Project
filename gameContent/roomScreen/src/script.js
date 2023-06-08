import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded', () => {
    MyModule.bookEventListenCreate();

    MyModule.phoneEventListenCreate();

    MyModule.breadEventListenCreate();

    MyModule.cameraEventListenCreate();
    
    $(".cup").on('click', () => {
        
    })

    
})