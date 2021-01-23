"use strict";

class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 150;
    this.y = canvas.height - 200;
    this.x = canvas.width / 2;
    this.direction = 0;
    this.speed = 5;
  }

  setDirection(direction) {
    if (direction === "left") this.direction = -1;
    else if (direction === "right") this.direction = 1;
    console.log(direction);
  }

  handleScreenCollision() {
    this.x = this.x + this.direction * this.speed;

    var screenLeft = 0;
    var screenRight = this.canvas.width;

    if (this.x + this.size > screenRight) this.direction = -1;
    else if (this.x < screenLeft) this.direction = 1;
  }

  draw() {
    this.img = new Image();
    this.img.src = "../img/dunnowhy.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  // didCollide(enemy) {
  //   const playerLeft = this.x;
  //   const playerRight = this.x + this.size;
  //   const playerTop = this.y;
  //   const playerBottom = this.y + this.size;

  //   const enemyLeft = enemy.x;
  //   const enemyRight = enemy.x + enemy.size;
  //   const enemyTop = enemy.y;
  //   const enemyBottom = enemy.y + enemy.size;

  //   // Check if the enemy sides intersect with any of the player's sides
  //   const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;

  //   const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;

  //   const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;

  //   const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

  //   if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
