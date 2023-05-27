export{game};
import * as MyModule from './function.js';

class Game{
    constructor(){
        this.Plot = "";
        this.backgroundMusic = MyModule.musicPlay("backgroundMusic");
        this.specialSoundEffects = "";
    }
}

const game = new Game;