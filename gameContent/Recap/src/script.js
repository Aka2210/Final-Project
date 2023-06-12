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
            let die = localStorage.getItem("DIE");
            let alive = localStorage.getItem("ALIVE")
            if(die){
                let character = localStorage.getItem("Character");
                if(character === "Brain")
                    game.Plot = data.BadEnding2;
                else{
                    game.Plot = data.BadEnding1;
                }
            }
            else if(alive){
                game.Plot = data.ending;
            }
            else
                game.Plot = data.Recap;//抓取前情提要劇情
            MyModule.plotDisplay(0);
        })
})