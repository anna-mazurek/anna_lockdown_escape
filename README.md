<h1><b>Canvas Game - Anna's Lockdown Escape</b></h1>

<h2>Steps</h2>

<ul>
<li>Create Files & Initial Setup</li>
<li>Create the start screen and start game button</li>
<li>Create Game constructor, Player constructor, Treasures constructor and get elements needed for the game start</li>
<li>Add Player movement functionality and Instantiate the player object</li>
<li>Create the game loop using requestAnimationFrame() (updating positions, collisions, drawing players and treasures)</li>
<li>Implement the collision checking function</li>
<li>Implement the Game Finished logic/sequence (remove game screen, show game finished screen, restart, show score)</li>
</ul>

<h2>Create Files & Initial Setup</h2>

mkdir anna_lockdown_escape && cd anna_lockdown_escape
mkdir src css

touch index.html src/main.js src/game.js src/player.js src/treasure.js css/style.css

code .

<ul>
<li>Create basic HTML skeleton</li>

##### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Anna's Lockdown Escape</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <script src="src/main.js"></script>
    <script src="src/game.js"></script>
    <script src="src/player.js"></script>
    <script src="src/treasure.js"></script>
  </body>
</html>
```



