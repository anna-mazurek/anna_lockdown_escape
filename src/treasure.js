"use strict";

class Treasures {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = x;
    this.speed = speed;
  }
  updatePosition() {
    this.y = this.y + this.speed;
  }

  isInsideScreen() {
    return this.y + this.size / 2 > 0;
  }
}

class Treasure1 extends Treasures {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.size = 35;
    this.width = 35;
    this.height = 35;
    this.y = 0 + this.size;
  }
  draw() {
    this.img = new Image();
    this.img.src = "img/chocolate.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Treasure2 extends Treasures {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.size = 45;
    this.width = 45;
    this.height = 45;
    this.y = 0 + this.size;
  }
  draw() {
    this.img = new Image();
    this.img.src = "img/letter.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Treasure3 extends Treasures {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.size = 65;
    this.width = 45;
    this.height = 65;
    this.y = 0 + this.size;
  }
  draw() {
    this.img = new Image();
    this.img.src = "img/wine.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Treasure4 extends Treasures {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.size = 45;
    this.width = 45;
    this.height = 45;
    this.y = 0 + this.size;
  }
  draw() {
    this.img = new Image();
    this.img.src = "img/letter.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Treasure5 extends Treasures {
  constructor(canvas, x, speed) {
    super(canvas, x, speed);
    this.size = 45;
    this.width = 45;
    this.height = 45;
    this.y = 0 + this.size;
  }
  draw() {
    this.img = new Image();
    this.img.src = "img/book.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
