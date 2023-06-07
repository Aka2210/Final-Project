import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded', () => {
    MyModule.bookEventListenCreate();

    MyModule.phoneEventListenCreate();

    $(".camera").on('click', () => {

    })

    $(".cup").on('click', () => {
        
    })

    $(".bread").on('click', () => {
        $(".breadScreen").css("display", "flex");
        $(".roomScreen").css("display", "none");
    })

    $(".breadClose").on('click', () => {
        $(".roomScreen").css("display", "flex");
        $(".breadScreen").css("display", "none");
    })
})