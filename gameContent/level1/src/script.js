import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();
})


//時鐘-計時器

    document.addEventListener("DOMContentLoaded", function(event) {
        var timer = document.getElementById("timer");
        var time = 300; // 5 minutes in seconds
    
        function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
    
        var formattedTime = ("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);
        return formattedTime;
        }
    
        function updateTimer() {
        timer.textContent = formatTime(time);
    
        if (time === 60) {
            timer.classList.add("red");
        }
    
        if (time === 0) {
            clearInterval(interval);
            // 在計時器結束後可以執行其他操作
        }
    
        time--;
        }
    
        updateTimer(); // 更新一次計時器以避免延遲
        var interval = setInterval(updateTimer, 1000); // 每秒更新計時器
    });


    //輸入數字的框框
    var input = document.querySelector('.input-box input');
    input.addEventListener('input', function() {
    var value = this.value.replace(/\D/g, '');   
    if (value.length > 4) {
        value = value.slice(0, 4);
    }    
    //更新
    this.value = value;
    });