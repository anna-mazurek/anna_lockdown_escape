"use strict";

let game; // instance of the Game
let splashScreen; // Start Game Screen
let gameScreen;
let gameOverScreen;

// Creates DOM elements from a string representation
// buildDom
function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

// -- splash screen

function createSplashScreen() {
  splashScreen = buildDom(`
    <main>
    <div class="splash">
      <div class="sign">
        <span class="sign__word">Anna's Lockdown Escape</span>
      </div>
      <h1>Welcome to Anna's lockdown escape mission!</h1>
      <h2>
        The goal is to collect as many goodies as possible to help get through
        this madness.
      </h2>
      <img class="anna-hand" src="/img/thereyougo.png" />
      <div class="box">
          <h3>Instructions</h3>
          <p>
            Use arrow keys <img class="emoji" src="/img/left-arrow.png" />
            <img class="emoji" src="/img/right-arrow.png" /> to move around
            the house
          </p>
          <p>Catch them goodies to collect the points:
          <img class="emoji" src="/img/book.png" />
          <img class="emoji" src="/img/chocolate.png" />
          <img class="emoji" src="/img/wine.png" />
          <img class="emoji" src="/img/laptop.png" />
          </p>
          <p>
            Watch out! Some of these envelopes
            <img class="emoji" src="/img/letter.png" /> does not contain good
            news (like we got any recently)
          </p>
        </div>
      <button class="start-button">Click to start</button>
    </main>
	`);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  // remove() is the DOM method that removes the Node from the page
  splashScreen.remove();
}

// -- game screen

function createGameScreen() {
  gameScreen = buildDom(`
  <main class="game container">
      <header>
        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>
      <div class="canvas-container">
        <canvas></canvas>
      </div>
      </main>
	`);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

// -- game over screen

function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
  <main>
    <h1>Game over</h1>
    <p>Your score: <span> ${score} </span></p>
    <button>Restart</button>
  </main>
`);

  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  if (gameOverScreen !== undefined) {
    gameOverScreen.remove();
  }
}

// -- Setting the game state - start or game over

function startGame() {
  removeSplashScreen();
  removeGameOverScreen();

  createGameScreen();

  game = new Game();
  game.gameScreen = gameScreen;

  // Start game
  game.start();
}

function endGame(score) {
  removeGameScreen();
  createGameOverScreen(score);
}

// Runs the function `createSplashScreen` once all resources are loaded
window.addEventListener("load", createSplashScreen);
