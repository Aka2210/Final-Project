import {game} from './Game.js';
import * as MyModule from './function.js';



$('html').on('mousemove', (event) => {//滑鼠位置判斷，座標為窗戶內，若滑鼠移入窗戶內則聚焦至窗戶，並改變窗戶圖片
    if((event.clientX <= 880 && event.clientX >= 670) && (event.clientY >= 150 && event.clientY <= 450)){
        $('.initScreen').addClass('initScreenImgMove');
    }
    else if(!((event.clientX <= 1124 && event.clientX >= 408) && (event.clientY >= 0 && event.clientY <= 713))){
        $('.initScreen').removeClass('initScreenImgMove');
    }
})

$('.BTN').on('click', (BTN) => {//偵測按鈕是否被點擊
    if(BTN.target.className === 'leaveBtn')//偵測是哪個按鈕被點擊
        window.close();
    else if(BTN.target.className === 'startBtn'){
        $('.initScreen').css('display', 'none');//關閉初始畫面
        $('.gameScreen').css({//顯示遊戲頁面
            'display': 'flex',
            'background-color': 'black'
          });

        fetch("plot.json")//抓取劇情檔案
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                game.Plot = data.Recap;//抓取前情提要劇情
                MyModule.plotDisplay(0);
            })
    }
})