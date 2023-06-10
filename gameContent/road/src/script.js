import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();

    game.character = localStorage.getItem("Character");

    $(".MessageCharacter").attr("src", '../../asset/imgs/' + game.character +'.png');

    fetch("roadPlot.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(game.character === "Alina"){
                    game.Plot = data.Alina;
                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Check").eq(0).text("傳說總是空穴來風，是不可信的呢")

                    $(".Check").eq(1).text("何必相信毫無根據的事呢?")

                    $(".Check").eq(2).css("display", "none")

                    $(".Check").on("click", () => {
                        OuterModule.plotDisplay(1, $(".MessageText"));

                        $(".Check").off();

                        $(".Check").eq(0).text("難怪不管早晚，街上都不熱鬧呢")

                        $(".Check").eq(1).text("也許怪病與這次的事件相關") 

                        $(".Check").on('click', () => {
                            $(".Check").off();
                            MyModule.ghostJump();
                        })
                    })
                }
                else if(game.character === "Brain"){
                    game.Plot = data.Brain;
                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Check").eq(2).css("display", "none");

                    $(".Check").eq(1).text("是叫魔法小學嗎?")

                    $(".Check").eq(0).text("鬼故事?")            

                    $(".Check").on("click", () => {
                        OuterModule.plotDisplay(1, $(".MessageText"));
                        
                        $(".Check").off();

                        $(".Check").eq(1).text("故事有了，就差沒有鬼怪衝出來了")

                        $(".Check").eq(0).text("校園鬼故事啊，好像每間小學或多或少都會有呢") 

                        $(".Check").on('click', () => {
                            $(".Check").off();
                            MyModule.ghostJump();
                        })
                    })
                }
                else if(game.character === "mayorson"){
                    game.Plot = data.mayorson;

                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Check").eq(2).css("display", "none");

                    $(".Check").eq(0).text("為了自己而犧牲他人是必要的")

                    $(".Check").eq(1).text("不，我們應該盡可能地解救雙方")

                    let i = 1;
                    $(".Check").on("click", () => {
                        OuterModule.plotDisplay(i, $(".MessageText"));
                        if(i === 1){
                            $(".Check").eq(0).text("增加監視器數量，減少視野死角?");
                            $(".Check").eq(1).text("刑事局介入調查?");
                        }
                        else if(i === 2){
                            $(".Check").off();

                            $(".Check").eq(1).css("display", "none");
                            $(".Check").eq(0).text("...");
                            $(".Check").on("click", () => {                                                                                   
                                $(".Check").eq(0).off();
                                OuterModule.diePlay($(".roadScreen"));
                            })
                        }
                        i++;                        
                    })
                }
                else if(game.character === "kate"){
                    game.Plot = data.kate;
                    OuterModule.plotDisplay(0, $(".MessageText"));

                    $(".Check").eq(1).css("display", "none");
                    $(".Check").eq(2).css("display", "none");

                    $(".Check").text("晚上通往學校的道路真是陰森呢")

                    $(".Check").on("click", () => {
                        $(".Check").off();

                        OuterModule.plotDisplay(1, $(".MessageText"));

                        $(".Check").eq(0).text("那時黑死病的治療方式主要還是靠女巫吧?");

                        $(".Check").on('click', () => {
                            $(".Check").off();
                            MyModule.ghostJump();
                        })
                    })
                }
            })
})