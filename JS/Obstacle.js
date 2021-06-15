
const ghostImg = document.createElement("img");
ghostImg.src = "img/ghost.png"

class Ghost{
    constructor(canvasContext){
    this.ctx = this.canvasContext,
    this.image = ghostImg,
    this.x = 0,
    this.y = 0,
    this.width = 300,
    this.height = 300;
    }
    draw(){
        this.ctx.drawImage(ghostImg, this.x, this.y, this.width, this.height);
    }
}


const sakuraImg = document.createElement("img");
sakuraImg.src = "img/sakura.png"
class Sakura{
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = sakuraImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 300,
        this.height = 300;
    }
    draw(){
        this.ctx.drawImage(sakuraImg,this.x, this.y, this.width, this.height);
    }
};

const dogImg = document.createElement("img");
dogImg.src = "img/ghost.png"
class Dog{
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = dogImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 50;
    }
    draw(){
        this.ctx.drawImage(dogImg,this.x, this.y, this.width, this.height);
    }
};
