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
    playerImg.src = "img/Player2.png";
    
    const Player = {
        image: playerImg,
        x: canvas.width / 2 - 400,
        y: canvas.height / 2 - 0,
        height: 250,
        width: 200, //do I need gravity and velocity? 
        draw: function(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } 
    }

    window.addEventListener("keydown", jump); //this isn't actually jumping...
    function jump(event) {
		switch (event.keyCode) {
			case 32:
				if (Player.y > 1) {
					Player.y -= 300 ;
				} else {
                    Player.y -= -300;
				}
				break;
			default: //ask this
				break;
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

        move(){
            this.x += -4
        } 
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
        move(){
            this.x += -7
        }
    }

    let dogImg = new Image();
    dogImg.src = "img/dog.png"

    const Dog = {
        image : dogImg,
        x: canvas.width / 2 - -400,
        y: canvas.height / 2 - -160,
        height: 80,
        width: 80,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move(){
            this.x += -5.5
        }
    }

    function startGame() { //superloooooop!!!!!!!!!
        gameInterval = requestAnimationFrame(startGame);
        console.log = ("Start!!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Background.draw();
        Player.draw();
        Ghost.draw();
        Ghost.move();
        Sakura.draw();
        Sakura.move();
        Dog.draw(); 
        Dog.move(); 
       
    }
    
    const obstaclesArray = ["Ghost", "Sakura", "Dog"]

    setInterval(function() {

        //obstaclesArray.push
        //obstaclesArray.repeat(count)
        

    })

    //function shock (player, obstacle??



    //scoring  


    startGame()
 }

