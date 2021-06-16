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
        width: 200,
        gravity: 0.02, 
        speed: 0.01, 
        startingy: canvas.height/2, 
        draw: function(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function(){
            if(this.y <= this.startingy){
                this.y += this.speed
                this.speed += this.gravity    
           } else if (this.y === this.startingy) {
                this.y -= this.speed
                this.speed += this.gravity
             /*    this.speed = 1;
                this.y = this.startingy*/
            }
        }
    }

    window.addEventListener("keydown", jump);
    function jump(event) {
		switch (event.keyCode) {
			case 32:
			    if (Player.y > 1) {
					Player.y -= 220 ;
				} else {
                    Player.y -= -220;
				}
				break;
			default: 
				break;
		}
	}


    let ghostImg = new Image();
    ghostImg.src = "img/ghost.png"

    const Ghost = {
        image : ghostImg,
        x: canvas.width / 2 - -300,
        y: canvas.height / 2 - -150,
        height: 80,
        width: 80,
        draw: function(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },

        move(){
            this.x += -4
            if (this.x <= 0) {
                this.x = 600
            }
        }
    }

    let sakuraImg = new Image();
    sakuraImg.src = "img/sakura.png"

    const Sakura = {
        image : sakuraImg,
        x: canvas.width / 2 - -300,
        y: canvas.height / 2 - -200,
        height: 60,
        width: 60,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move(){
            this.x += -3
            if (this.x <= 0) {
                this.x = 600
            }
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
            this.x += -3.5
            if (this.x <= 0) {
                this.x = canvas.width/2 + Math.floor(Math.random() * canvas.width)
            }
        }
    }


    let randomObstacle
    let obstaclesArray = []
    let obstacle =[]

    setInterval(function() { 
       
        obstaclesArray = [Ghost, Sakura, Dog] 
        randomObstacle = obstaclesArray[Math.floor(Math.random() * obstaclesArray.length)] 
        obstacle.push(randomObstacle);

    },3000) //time in seconds 

    function checkCollision(player, obstacle) {
		let crash =
			player.x < obstacle.x + obstacle.width &&
			player.x + car.width > obstacle.x &&
			player.y < obstacle.y + obstacle.height &&
			player.y + player.height > obstacle.height;
		console.log(crash);
		if (crash) {
			cancelAnimationFrame(gameInterval);
			alert('crashed!');
			window.location.reload();
		} else {
			console.log('not crashing');
		}
	}


    function startGame() { //superloooooop!!!!!!!!!
        gameInterval = requestAnimationFrame(startGame);
        console.log = ("Start!!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Background.draw();
        Player.draw();
        Player.move();
        /*Ghost.draw();
        Ghost.move();
        Sakura.draw();
        Sakura.move();
        Dog.draw(); 
        Dog.move(); */
        obstacle.forEach(oneObst=> {
            oneObst.draw()
            oneObst.move()
        }) 
       
    }
    


    //function shock (player, obstacle??) - if game over show page "game over"



    //scoring 


    startGame()
 }

