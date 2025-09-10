---
layout: base
title: Background with Object
description: Use JavaScript to have an in motion background.
sprite: images/platformer/sprites/flying-ufo.png
background: images/platformer/backgrounds/alien_planet1.jpg
permalink: /background
---

<canvas id="world"></canvas>

<script>
  const canvas = document.getElementById("world"); // Get the canvas element
  const ctx = canvas.getContext('2d'); // Get the drawing context
  const backgroundImg = new Image(); // Create background image object
  const spriteImg = new Image(); // Create sprite image object
  backgroundImg.src = '{{page.background}}'; // Set background image source from front matter
  spriteImg.src = '{{page.sprite}}'; // Set sprite image source from front matter

  let imagesLoaded = 0; // Track loaded images
  backgroundImg.onload = function() {
    imagesLoaded++;
    startGameWorld(); // Try to start game when background loads
  };
  spriteImg.onload = function() {
    imagesLoaded++;
    startGameWorld(); // Try to start game when sprite loads
  };

  function startGameWorld() {
    if (imagesLoaded < 2) return; // Wait until both images are loaded

    // Base class for all game objects
    class GameObject {
      constructor(image, width, height, x = 0, y = 0, speedRatio = 0) {
        this.image = image; // Image to draw
        this.width = width; // Object width
        this.height = height; // Object height
        this.x = x; // X position
        this.y = y; // Y position
        this.speedRatio = speedRatio; // Speed ratio for movement
        this.speed = GameWorld.gameSpeed * this.speedRatio; // Actual speed
      }
      update() {} // Default update does nothing
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height); // Draw image
      }
    }

    // Background class, scrolls horizontally
    class Background extends GameObject { // #background is game object
      constructor(image, gameWorld) {
        super(image, gameWorld.width, gameWorld.height, 0, 0, 0.1); // Fill canvas, set speed
      }
      update() {
        this.x = (this.x - this.speed) % this.width; // Move left, wrap around
      }
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height); // Draw main background
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height); // Draw wrapped background
      }
    }

    // Player class, animates up and down
    class Player extends GameObject { // #player is game object
      constructor(image, gameWorld) {
        const width = image.naturalWidth / 2; // Scale sprite width
        const height = image.naturalHeight / 2; // Scale sprite height
        const x = (gameWorld.width - width) / 2; // Center horizontally
        const y = (gameWorld.height - height) / 2; // Center vertically
        super(image, width, height, x, y); // Call base constructor
        this.baseY = y; // Store base Y position
        this.frame = 0; // Animation frame counter
      }
      update() {
        this.y = this.baseY + Math.sin(this.frame * 0.05) * 20; // Animate up/down
        this.frame++; // Advance frame
      }
    }

    // Main game world class
    class GameWorld {
      static gameSpeed = 5; // Base speed for all objects
      constructor(backgroundImg, spriteImg) {
        this.canvas = document.getElementById("world"); // Get canvas
        this.ctx = this.canvas.getContext('2d'); // Get context
        this.width = window.innerWidth; // Set width to window
        this.height = window.innerHeight; // Set height to window
        this.canvas.width = this.width; // Set canvas width
        this.canvas.height = this.height; // Set canvas height
        this.canvas.style.width = `${this.width}px`; // Style width
        this.canvas.style.height = `${this.height}px`; // Style height
        this.canvas.style.position = 'absolute'; // Position canvas
        this.canvas.style.left = `0px`;
        this.canvas.style.top = `${(window.innerHeight - this.height) / 2}px`;

        this.gameObjects = [
         new Background(backgroundImg, this), // Add background object
         new Player(spriteImg, this) // Add player object
        ];
      }
      gameLoop() {
        this.ctx.clearRect(0, 0, this.width, this.height); // Clear canvas
        for (const obj of this.gameObjects) {
          obj.update(); // Update object state
          obj.draw(this.ctx); // Draw object
        }
        requestAnimationFrame(this.gameLoop.bind(this)); // Loop again
      }
      start() {
        this.gameLoop(); // Start the game loop
      }
    }

    const world = new GameWorld(backgroundImg, spriteImg); // Create game world
    world.start(); // Start animation
  }
</script>
