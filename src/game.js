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
  }

  // Create `ctx`, a `player` and start the Canvas loop
  start() {
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    //Set canvas width and height

    this.canvas.setAttribute("width", 1200);
    this.canvas.setAttribute("height", 700);

    // Save reference to the score
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    //initate the player

    this.player = new Player(this.canvas, 30);

    // Add event listener for moving the player
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        this.player.setDirection("left");
      } else if (event.key === "ArrowRight") {
        this.player.setDirection("right");
      }
    }

    // Any function provided to eventListener is always invoked by the `window` global object
    // Therefore, we need to bind `this` to the `game` object,
    // to prevent `this` from referencing the `window` object

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      // 1. UPDATE THE STATE OF PLAYER AND ENEMIES

      // // 0. Our player was already created - via `game.start()`

      // // 1. Create new enemies randomly
      if (Math.random() > 0.95) {
        var randomY = this.canvas.height * Math.random();
        var newTreasure = new Treasure(this.canvas, randomY, 5);
        this.treasures.push(newTreasure);
      }

      // // 2. Check if player had hit any enemy (check all enemies)
      this.checkCollisions();

      // // 3. Update the player and check if player is going off the screen
      this.player.handleScreenCollision();

      // // 4. Move the existing enemies
      // // 5. Check if any enemy is going of the screen
      this.treasures = this.treasures.filter(function (treasure) {
        treasure.updatePosition();
        return treasure.isInsideScreen();
      });

      // 2. CLEAR THE CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 3. UPDATE THE CANVAS
      // // Draw the player
      this.player.draw();

      // // Draw the enemies
      this.treasures.forEach(function (treasure) {
        treasure.draw();
      });

      // 4. TERMINATE LOOP IF THE GAME IS OVER
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      // 5. UPDATE GAME STATUS
      this.updateGameStats();
    }.bind(this);

    // As loop function will be continuously invoked by
    // the `window` object- `window.requestAnimationFrame(loop)`
    // we have to bind the function so that value of `this` is
    // pointing to the `game` object, like this:
    // var loop = (function(){}).bind(this);

    window.requestAnimationFrame(loop);
  }

  checkCollisions() {
    this.treasures.forEach(function (treasure) {
      // We will implement didCollide() in the next step
      if (this.player.didCollide(treasure)) {
        this.score = +50;
        console.log("score", this.score);

        // Move the enemy off screen to the left
        enemy.x = 0 - enemy.size;

        if (this.score === 1000) {
          this.gameOver();
        }
      }
    }, this);
    // We have to bind `this`
    // as array method callbacks `this` value defaults to undefined.
  }

  gameOver() {
    // flag `gameIsOver = true` stops the loop
    this.gameIsOver = true;

    // Call the `endGame` function from `main` to remove the Game screen
    // and show the Game Over Screen
    endGame(this.score);
  }

  updateGameStats() {
    this.score += 1;
    this.livesElement.innerHTML = this.player.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
