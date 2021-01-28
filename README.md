<h2>Description</h2>

Goal of 'Anna's Lockdown Escape' is to gain 1000 points through collecting the items falling from the ceiling.

<h2>MVP (DOM-CANVAS)</h2>

The player can move around using Left Arrow Key and Right Arrow Key.

The game is over when the player collects enough items to gain 1000 points.

<h2>Data Structure</h2>

1. index.html
2. main.js
3. game.js
4. player.js
5. treasure.js
6. style.css
7. img
8. audio

<h3>1. index.html</h3>

- basic HTML skeleton
- links stylesheet and JS files

<h3>2. main.js</h3>

- create DOM
- create SplashScreen / remove SplashScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen - two different scenarios
- Setting Game Start / End Game

<h3>3. game.js</h3>

class Game properties:

- canvas
- ctx
- treasures
- player
- gameIsOver
- gameScreen
- score
- soundTreasure
- soundBonus
- soundMinus

class Game methods:

- start Game
- start Loop
- checking Collisions (catching treasures)
- Game Over
- update Game Score

<h3>4. player.js</h3>

class Player properties:

- canvas
- ctx
- size
- x position
- y position
- direction
- speed

class Player methods:

- set direction

- screen collision

- draw Player

- treasure collision

<h3>5. treasures.js</h3>

class Treasure properties:

- canvas
- ctx
- speed
- X position
- Y position
- size
- width
- height

class Treasure methods:

- draw
- updatePosition
- isInsideScreen
