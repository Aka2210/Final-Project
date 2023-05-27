import {game} from './Game.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    game.backgroundMusic = MyModule.musicPlay("backgroundMusic");
    game.backgroundMusic;
})

$('html').on('mousemove', (event) => {//滑鼠位置判斷，座標為窗戶內，若滑鼠移入窗戶內則聚焦至窗戶，並改變窗戶圖片
    if((event.clientX <= 880 && event.clientX >= 670) && (event.clientY >= 150 && event.clientY <= 450)){
        $('.initScreen').addClass('initScreenImgMove');
    }
    else if(!((event.clientX <= 1124 && event.clientX >= 408) && (event.clientY >= 0 && event.clientY <= 713))){
        $('.initScreen').removeClass('initScreenImgMove');
    }
})

$('.leaveBtn').on('click', () => {
    window.close();
})