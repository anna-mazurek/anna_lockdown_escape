"use strict";

class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.treasures = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.soundTreasure = new Audio("audio/catch.wav");
    this.soundBonus = new Audio("audio/bonus2.wav");
    this.soundMinus = new Audio("audio/blast.wav");
  }

  // Create `ctx`, a `player` and start the Canvas loop
  start() {
    console.log("game start");
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Save reference to the score
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    // Set the canvas dimesions
    this.canvas.setAttribute("width", 1200);
    this.canvas.setAttribute("height", 700);

    //Create new player

    this.player = new Player(this.canvas);

    // Add keydown event listeners
    this.handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        this.player.setDirection("right");
      } else if (event.key === "ArrowLeft") {
        this.player.setDirection("left");
      }
    };

    //timer

    var counter = 0;

    const countdown = (minutes) => {
      var seconds = 60;
      var mins = minutes;
      const tick = () => {
        var counter = this.gameScreen.querySelector("#time");
        var current_minutes = mins - 1;
        seconds--;
        counter.innerHTML =
          current_minutes.toString() +
          ":" +
          (seconds < 10 ? "0" : "") +
          String(seconds);
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          if (mins > 1) {
            countdown(mins - 1);
          }
        }

        if (this.gameScreen.querySelector("#time").innerHTML == "0:00") {
          this.gameOver();
        }
      };
      tick();
    };
    // timer

    // Add event listener for moving the player
    window.addEventListener("keydown", this.handleKeyDown);

    this.startLoop();
    countdown(2);
    console.log(
      this.gameScreen.querySelector("#time").innerHTML,
      "before validation"
    );
  }

  startLoop() {
    var loop = () => {
      // 1. Create new treasures randomly
      if (Math.random() > 0.993) {
        var randomX1 = (this.canvas.width - 10) * Math.random();
        var randomX3 = (this.canvas.width - 10) * Math.random();
        var randomX5 = (this.canvas.width - 10) * Math.random();

        var newTreasure1 = new Treasure1(this.canvas, randomX1, 4);
        var newTreasure3 = new Treasure3(this.canvas, randomX3, 4);
        var newTreasure5 = new Treasure5(this.canvas, randomX5, 4);

        this.treasures.push(newTreasure1, newTreasure3, newTreasure5);
      } else if (Math.random() > 0.999) {
        var randomX2 = (this.canvas.width - 10) * Math.random();
        var randomX4 = (this.canvas.width - 40) * Math.random();
        var newTreasure2 = new Treasure2(this.canvas, randomX2, 8);
        var newTreasure4 = new Treasure4(this.canvas, randomX4, 8);

        this.treasures.push(newTreasure2, newTreasure4);
      }

      // 2. Check if player had hit any treasure (check all treasures)
      this.checkCollisions();

      // 3. Update the player and check if player is going off the screen
      this.player.handleScreenCollision();

      // 4. Check if any treasure is going off the screen
      this.treasures = this.treasures.filter((treasure) => {
        treasure.updatePosition();
        return treasure.isInsideScreen();
      });

      // CLEAR THE CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // UPDATE THE CANVAS
      // Draw the player
      this.player.draw();

      // Draw the treasures
      this.treasures.forEach((treasure) => {
        treasure.draw();
      });

      // TERMINATE LOOP IF THE GAME IS OVER
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      this.updateGameStats();
    };

    loop();
  }

  checkCollisions() {
    for (let i = 0; i < this.treasures.length; i++) {
      switch (this.treasures[i].constructor.name) {
        case "Treasure1":
          if (this.player.didCollide(this.treasures[i])) {
            this.soundTreasure.currentTime = 0;
            this.soundTreasure.play();
            this.treasures[i].y = 0 - this.treasures[i].size;

            this.score += 25;
          }

          break;

        case "Treasure2":
          if (this.player.didCollide(this.treasures[i])) {
            this.soundMinus.currentTime = 0;
            this.soundMinus.play();
            this.treasures[i].y = 0 - this.treasures[i].size;
            var message = alert(
              "Sorry my Dear - you've earned yourself extra week of lockdown: -100 points."
            );
            this.score -= 100;
          }

          break;

        case "Treasure3":
          if (this.player.didCollide(this.treasures[i])) {
            this.soundTreasure.currentTime = 0;
            this.soundTreasure.play();
            this.treasures[i].y = 0 - this.treasures[i].size;

            this.score += 25;
          }

          break;

        case "Treasure4":
          if (this.player.didCollide(this.treasures[i])) {
            this.soundBonus.currentTime = 0;
            this.soundBonus.play();
            this.treasures[i].y = 0 - this.treasures[i].size;
            var message = alert(
              "Good news: restaurants open today: +100 points for that!"
            );
            this.score += 100;
          }

          break;

        case "Treasure5":
          if (this.player.didCollide(this.treasures[i])) {
            this.soundTreasure.currentTime = 0;
            this.soundTreasure.play();
            this.treasures[i].y = 0 - this.treasures[i].size;
            this.score += 25;
          }

          break;
      }
    }

    if (
      this.score >= 2000 ||
      this.gameScreen.querySelector("#time").innerHTML == "0:00"
    ) {
      this.gameOver();
    }
  }

  gameOver() {
    this.gameOver = true;
    endGame(this.score);
  }

  updateGameStats() {
    this.scoreElement.innerHTML = this.score;
  }
}
