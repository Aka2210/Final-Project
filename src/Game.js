export{game};

class Game{
    constructor(){
        this.Plot = "";
        this.backgroundMusic = "";
        this.specialSoundEffects = "";
        this.bookPage = 1;
        this.cameraPicture = 1;
        this.character = "";
    }

    resetGame(){
        localStorage.clear();
    }
}

const game = new Game;