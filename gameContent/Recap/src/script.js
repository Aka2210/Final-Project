import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded', () => {//偵測按鈕是否被點擊
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }

    fetch("plot.json")//抓取劇情檔案
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            game.Plot = data.Recap;//抓取前情提要劇情
            MyModule.plotDisplay(0);
        })
})