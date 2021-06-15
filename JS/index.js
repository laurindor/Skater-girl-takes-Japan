window.onload = ()=>{
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
   
    let gameInterval= null;

    let bgImg = new Image();
    bgImg.src = "img/blossom.png"

    const Background = {
        image: bgImg,
        x: 0,
        y: 0,
        height: canvas.height,
        width: canvas.width,
        draw: function(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    };

    let playerImg = new Image();
    playerImg.src = "img/player.png";
    
    const Player = {
        image: playerImg,
        x: canvas.width / 2 - 400,
        y: canvas.height / 2 - 0,
        height: 250,
        width: 200,
        draw: function(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }        
    }

    let ghostImg = new Image();
    ghostImg.src = "img/ghost.png"

    const Ghost = {
        image : ghostImg,
        x: canvas.width / 2 - -400,
        y: canvas.height / 2 - -100,
        height: 100,
        width: 100,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        /*move: function() {
           
        }*/
    }

    let sakuraImg = new Image();
    sakuraImg.src = "img/sakura.png"

    const Sakura = {
        image : sakuraImg,
        x: canvas.width / 2 - -400,
        y: canvas.height / 2 - -100,
        height: 100,
        width: 100,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        /*move: function() {
          
        }*/
    }

    let dogImg = new Image();
    dogImg.src = "img/dog.png"

    const Dog = {
        image : dogImg,
        x: canvas.width / 2 - -400,
        y: canvas.height / 2 - -150,
        height: 80,
        width: 80,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        /*move: function() {
            
        }*/

    
    function startGame(){
        gameInterval = requestAnimationFrame(startGame);
        console.log = ("Start!!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Background.draw();
        Player.draw();
        Ghost.draw();
        Sakura.draw();
        Dog.draw(); 
        objects.forEach(object=>{
            object.draw()
            object.move() 
        })

    }
    
   // window.addEventListener("keydown", jump);

   /* function player(event){
        if (event.target.localName != 'input') {//this prevents for the default use of the up/down arrows to affect the use when in game.
            switch (event.keyCode) {
                
                case 32: //up
                    event.preventDefault();//this prevents the default arrow key behavior
                    if (player.y > 0) {
                        player.y -= 25;
                    } else {
                        player.y = 0; 
                    }
                    break
    }*/

    startGame()
}