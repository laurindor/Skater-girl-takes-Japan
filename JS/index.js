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
        y: canvas.height / 2 -300,
        height: 220,
        width: 220,
        gravity: 0.02, 
        speed: 0.002, 
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
        y: canvas.height / 2 - -160,
        height: 80,
        width: 80,
        draw: function(){
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        
        },

        move(){
            this.x += -2
            if (this.x <= 0) {
                this.x = canvas.width/2 + Math.floor(Math.random() * canvas.width)
            }
        }
    }

    let sakuraImg = new Image();
    sakuraImg.src = "img/finalfantasyobst.png"

    const Sakura = {
        image : sakuraImg,
        x: canvas.width / 2 - -300,
        y: canvas.height / 2 - -160,
        height: 80,
        width: 80,
        draw: function(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move(){
            this.x += -4
            if (this.x <= 0) {
                this.x = canvas.width/2 + Math.floor(Math.random() * canvas.width)
            }
        }
    }

    let dogImg = new Image();
    dogImg.src = "img/goomba obstacle2.png"

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

        score.points += 10;

    },3000) //time in seconds 

    const score = {
		points: 0,
		draw: function () {
			ctx.font = '40px Arial';
			ctx.fillStyle = 'yellow';
			ctx.fillText("Your score: " + this.points, 10, 50); 
		}
	};


        function crashingTime (player, oneObst) {
		let crash =
            player.x + player.width > oneObst.x &&
			oneObst.x + oneObst.width > player.x &&
			player.y + player.height > oneObst.y &&
			oneObst.y + oneObst.height > player.y;

            if (crash) {
                cancelAnimationFrame(gameInterval)
                window.location.href="gameover.html"; 
            }
		
	}


    function startGame() { //superloooooop!!!!!!!!!
        gameInterval = requestAnimationFrame(startGame);
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
            crashingTime(Player, oneObst)
        });
        score.draw();

    }
    

    startGame()
 }

