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



<h3>1. index.html</h3>

- basic HTML skeleton
- link stylesheet and JS files



<h3>2. main.js</h3>

- create DOM
- create SplashScreen / remove SplashScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen
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



class Game methods:

- start Game
- start Loop
- checking Collisions (catching treasures)
- update Game Score
- game Over



<h3>4. player.js</h3>

class Player properties:

- canvas
- ctx
- Y postion
- X position
- width
- height
- image
- direction



class Player methods:

- draw

- set direction

- screen collision

- treasure collision

  

<h3>5. treasures.js</h3>

class Treasure properties:

- canvas
- X position



class Treasure methods:

- draw
- updatePosition
- isInsideScreen





