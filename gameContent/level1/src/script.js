import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener('DOMContentLoaded',() =>{
    if (performance.navigation.type == 1) {
        window.location.href = "../../index.php";
    }
    OuterModule.Music();

    MyModule.startTiming();

    $(".A5").on("click", () => {
        if($(".A1").val() === 7 && $(".A2").val() === 1 && $(".A3").val() === 4 && $(".A4").val() === 2){
                
        }
        else{
            
        }
    })
});