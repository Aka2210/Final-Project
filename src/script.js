import {game} from './Game.js';
import * as MyModule from './function.js';



$('html').on('mousemove', (event) => {
    if((event.clientX <= 880 && event.clientX >= 670) && (event.clientY >= 150 && event.clientY <= 450)){
        $('.initScreen').addClass('initScreenImgMove');
    }
    else if(!((event.clientX <= 1124 && event.clientX >= 408) && (event.clientY >= 0 && event.clientY <= 713))){
        $('.initScreen').removeClass('initScreenImgMove');
    }
})

$('.BTN').on('click', (BTN) => {
    if(BTN.target.className === 'leaveBtn')
        window.close();
    else if(BTN.target.className === 'startBtn'){
        $('.initScreen').css('display', 'none');
        $('.gameScreen').css({
            'display': 'flex',
            'background-color': 'black'
          });

        fetch("plot.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                game.Plot = data.Recap;
                console.log(game.Plot);

                MyModule.plotDisplay(0);
            })
    }
})