
class Player {
    constructor(canvasContext) {
      this.ctx = canvasContext;
      this.image = document.createElement('img');
      this.image.src = "img/player.png";
      this.x = 28;
      this.y = 340;
      this.width = 250;
      this.height = 250;
    }
  
    draw () {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
      
  };

