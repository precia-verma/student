// Mansion Level 2 Game with WASD character movement
(function () {
  const bgPaths = [
    '/student/assets/images/mansion-untitled.jpeg', // GitHub Pages path
    'assets/images/mansion-untitled.jpeg', // relative path
    './assets/images/mansion-untitled.jpeg', // explicit relative path
    '/student/images/haunted-mansion-battle-map-30x36-v0-u37w8jh2gfud1.webp'
  ];

  let canvas, ctx;
  let backgroundImage = null;
  let gameLoop = null;
  let hasEnteredCemetery = false;
  let showPrompt = false;
  let promptResponse = null;
  let promptButtons = { yes: null, no: null };
  let showTransition = false;
  let transitionStartTime = 0;

  // Player character
  const player = {
    x: 50,
    y: 550,
    width: 30,
    height: 30,
    speed: 3,
    color: '#ff6b6b'
  };

  // Cemetery area (adjust these coordinates based on your image)
  // These coordinates define the grey brick rectangle area
  const cemetery = {
    x: 500,
    y: 200,
    width: 700,
    height: 450
  };

  // Keyboard state
  const keys = {
    w: false,
    a: false,
    s: false,
    d: false
  };

  // Initialize the game
  function initMansionBackground(options = {}) {
    canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) : options.canvas;
    
    // Create canvas if it doesn't exist
    if (!canvas) {
      const container = document.getElementById('game-container') || document.body;
      canvas = document.createElement('canvas');
      canvas.id = 'gameCanvas';
      canvas.tabIndex = 1; // Make canvas focusable
      container.appendChild(canvas);
    }

    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.tabIndex = 1; // Make canvas focusable

    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    ctx = canvas.getContext('2d');
    const onReady = typeof options.onReady === 'function' ? options.onReady : () => {};

    console.log('Initializing mansion game...', { canvas });

    // Load background image
    loadBackground(0, onReady);

    // Setup keyboard controls
    setupControls();

    // Start game loop
    startGameLoop();
    
    // Auto-focus canvas
    setTimeout(() => {
      canvas.focus();
      console.log('Canvas focused');
    }, 100);
  }

  function loadBackground(index, onReady) {
    if (index >= bgPaths.length) {
      console.log('All background images failed to load, using fallback');
      backgroundImage = null;
      onReady(new Error('No background images loaded'));
      return;
    }

    console.log('Trying to load:', bgPaths[index]);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      console.log('Successfully loaded background image:', bgPaths[index]);
      backgroundImage = img;
      onReady(null, img);
    };
    img.onerror = function () {
      console.log('Failed to load background image:', bgPaths[index]);
      loadBackground(index + 1, onReady);
    };
    img.src = bgPaths[index];
  }

  function setupControls() {
    console.log('Setting up controls...');
    
    // Keyboard event listeners
    document.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      console.log('Key down:', key);
      
      // Handle prompt response
      if (showPrompt) {
        if (key === 'y') {
          promptResponse = true;
          showPrompt = false;
          showTransition = true;
          transitionStartTime = Date.now();
          console.log('Player chose to enter the cemetery');
        } else if (key === 'n') {
          promptResponse = false;
          showPrompt = false;
          player.y = cemetery.y - player.height - 5;
          console.log('Player declined to enter');
        }
        e.preventDefault();
        return;
      }
      
      if (key in keys) {
        keys[key] = true;
        console.log('Movement key pressed:', key, keys);
        e.preventDefault();
      }
    });

    document.addEventListener('keyup', (e) => {
      const key = e.key.toLowerCase();
      console.log('Key up:', key);
      if (key in keys) {
        keys[key] = false;
        e.preventDefault();
      }
    });

    // Mouse click listener for buttons
    canvas.addEventListener('click', (e) => {
      if (!showPrompt) return;

      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Check if YES button was clicked
      if (promptButtons.yes && 
          clickX >= promptButtons.yes.x && 
          clickX <= promptButtons.yes.x + promptButtons.yes.width &&
          clickY >= promptButtons.yes.y && 
          clickY <= promptButtons.yes.y + promptButtons.yes.height) {
        promptResponse = true;
        showPrompt = false;
        showTransition = true;
        transitionStartTime = Date.now();
        console.log('Player clicked YES to enter the cemetery');
      }

      // Check if NO button was clicked
      if (promptButtons.no && 
          clickX >= promptButtons.no.x && 
          clickX <= promptButtons.no.x + promptButtons.no.width &&
          clickY >= promptButtons.no.y && 
          clickY <= promptButtons.no.y + promptButtons.no.height) {
        promptResponse = false;
        showPrompt = false;
        player.y = cemetery.y - player.height - 5;
        console.log('Player clicked NO to decline entry');
      }
    });

    // Change cursor when hovering over buttons
    canvas.addEventListener('mousemove', (e) => {
      if (!showPrompt) {
        canvas.style.cursor = 'default';
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Check if hovering over either button
      const hoveringYes = promptButtons.yes && 
          mouseX >= promptButtons.yes.x && 
          mouseX <= promptButtons.yes.x + promptButtons.yes.width &&
          mouseY >= promptButtons.yes.y && 
          mouseY <= promptButtons.yes.y + promptButtons.yes.height;

      const hoveringNo = promptButtons.no && 
          mouseX >= promptButtons.no.x && 
          mouseX <= promptButtons.no.x + promptButtons.no.width &&
          mouseY >= promptButtons.no.y && 
          mouseY <= promptButtons.no.y + promptButtons.no.height;

      canvas.style.cursor = (hoveringYes || hoveringNo) ? 'pointer' : 'default';
    });
    
    console.log('Controls setup complete');
  }

  function updatePlayer() {
    // Don't update player if prompt is showing
    if (showPrompt) return;
    
    // Move player based on key presses
    if (keys.w) player.y -= player.speed;
    if (keys.s) player.y += player.speed;
    if (keys.a) player.x -= player.speed;
    if (keys.d) player.x += player.speed;

    // Keep player within canvas bounds
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

    // Check if player entered cemetery
    checkCemeteryCollision();
  }

  function checkCemeteryCollision() {
    const playerCenterX = player.x + player.width / 2;
    const playerCenterY = player.y + player.height / 2;

    const isInCemetery = 
      playerCenterX >= cemetery.x &&
      playerCenterX <= cemetery.x + cemetery.width &&
      playerCenterY >= cemetery.y &&
      playerCenterY <= cemetery.y + cemetery.height;

    if (isInCemetery && !hasEnteredCemetery) {
      hasEnteredCemetery = true;
      showCemeteryPrompt();
    } else if (!isInCemetery && hasEnteredCemetery) {
      hasEnteredCemetery = false;
    }
  }

  function showCemeteryPrompt() {
    showPrompt = true;
    promptResponse = null;
  }

  function drawBackground() {
    if (backgroundImage) {
      const scale = Math.max(canvas.width / backgroundImage.width, canvas.height / backgroundImage.height);
      const sw = backgroundImage.width * scale;
      const sh = backgroundImage.height * scale;
      const dx = (canvas.width - sw) / 2;
      const dy = (canvas.height - sh) / 2;
      ctx.drawImage(backgroundImage, dx, dy, sw, sh);
    } else {
      // Fallback color
      ctx.fillStyle = '#2b3a2b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  function drawPlayer() {
    // Draw player as a circle with outline
    ctx.fillStyle = player.color;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.arc(
      player.x + player.width / 2,
      player.y + player.height / 2,
      player.width / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.stroke();

    // Draw a direction indicator (small dot)
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(
      player.x + player.width / 2,
      player.y + player.height / 2 - 5,
      3,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  function drawControls() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(10, 10, 220, 110);
    
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.fillText('Controls:', 20, 30);
    ctx.fillText('W - Move Up', 20, 50);
    ctx.fillText('A - Move Left', 20, 65);
    ctx.fillText('S - Move Down', 20, 80);
    ctx.fillText('D - Move Right', 20, 95);
    
    // Show active keys
    ctx.fillStyle = keys.w ? '#0f0' : '#fff';
    ctx.fillText(keys.w ? '▲' : '', 130, 50);
    ctx.fillStyle = keys.a ? '#0f0' : '#fff';
    ctx.fillText(keys.a ? '◄' : '', 110, 65);
    ctx.fillStyle = keys.s ? '#0f0' : '#fff';
    ctx.fillText(keys.s ? '▼' : '', 130, 80);
    ctx.fillStyle = keys.d ? '#0f0' : '#fff';
    ctx.fillText(keys.d ? '►' : '', 150, 65);
  }

  function render() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Show transition screen if active
    if (showTransition) {
      drawTransitionScreen();
      return;
    }

    // Draw background
    drawBackground();

    // Draw cemetery boundary (for debugging - you can remove this later)
    drawCemeteryBoundary();

    // Draw player
    drawPlayer();

    // Draw controls info
    drawControls();

    // Draw prompt if showing
    if (showPrompt) {
      drawPrompt();
    }
  }

  function drawCemeteryBoundary() {
    // Draw a semi-transparent rectangle to show the cemetery area
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(cemetery.x, cemetery.y, cemetery.width, cemetery.height);
    ctx.setLineDash([]);
  }

  function drawPrompt() {
    // Darken the screen
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw prompt box
    const boxWidth = 500;
    const boxHeight = 220;
    const boxX = (canvas.width - boxWidth) / 2;
    const boxY = (canvas.height - boxHeight) / 2;

    // Box shadow/border (outer)
    ctx.fillStyle = '#4a7ba7';
    ctx.fillRect(boxX - 4, boxY - 4, boxWidth + 8, boxHeight + 8);

    // Box background (dark)
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

    // Inner border
    ctx.strokeStyle = '#4a7ba7';
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX + 5, boxY + 5, boxWidth - 10, boxHeight - 10);

    // Title text (cyan color like Minecraft)
    ctx.fillStyle = '#55ffff';
    ctx.font = 'bold 24px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Cemetery Entrance', canvas.width / 2, boxY + 40);

    // Prompt question (cyan)
    ctx.fillStyle = '#55ffff';
    ctx.font = '20px "Courier New", monospace';
    ctx.fillText('Do you dare to enter?', canvas.width / 2, boxY + 80);

    // Button dimensions
    const buttonWidth = 160;
    const buttonHeight = 45;
    const buttonY = boxY + 130;
    const yesButtonX = boxX + 50;
    const noButtonX = boxX + boxWidth - buttonWidth - 50;

    // Store button positions for click detection
    promptButtons.yes = { x: yesButtonX, y: buttonY, width: buttonWidth, height: buttonHeight };
    promptButtons.no = { x: noButtonX, y: buttonY, width: buttonWidth, height: buttonHeight };

    // YES button (blue like Minecraft)
    // Outer border
    ctx.fillStyle = '#3d5a80';
    ctx.fillRect(yesButtonX - 2, buttonY - 2, buttonWidth + 4, buttonHeight + 4);
    // Background
    ctx.fillStyle = '#5577aa';
    ctx.fillRect(yesButtonX, buttonY, buttonWidth, buttonHeight);
    // Inner highlight
    ctx.fillStyle = '#6688bb';
    ctx.fillRect(yesButtonX + 3, buttonY + 3, buttonWidth - 6, buttonHeight / 2 - 3);
    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px "Courier New", monospace';
    ctx.fillText('Sure!', yesButtonX + buttonWidth / 2, buttonY + 28);

    // NO button (gray like Minecraft)
    // Outer border
    ctx.fillStyle = '#3a3a3a';
    ctx.fillRect(noButtonX - 2, buttonY - 2, buttonWidth + 4, buttonHeight + 4);
    // Background
    ctx.fillStyle = '#777777';
    ctx.fillRect(noButtonX, buttonY, buttonWidth, buttonHeight);
    // Inner highlight
    ctx.fillStyle = '#888888';
    ctx.fillRect(noButtonX + 3, buttonY + 3, buttonWidth - 6, buttonHeight / 2 - 3);
    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px "Courier New", monospace';
    ctx.fillText('Not Ready', noButtonX + buttonWidth / 2, buttonY + 28);

    // Instructions at bottom
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '14px "Courier New", monospace';
    ctx.fillText('Click or Press Y or N', canvas.width / 2, boxY + boxHeight - 15);

    // Reset text alignment
    ctx.textAlign = 'left';
  }

  function drawTransitionScreen() {
    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate elapsed time
    const elapsed = Date.now() - transitionStartTime;

    // Show message with fade-in effect
    const fadeInDuration = 1000; // 1 second fade in
    const displayDuration = 3000; // Total display time (3 seconds)
    
    let alpha = 1;
    if (elapsed < fadeInDuration) {
      alpha = elapsed / fadeInDuration;
    }

    // Red glowing text
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 20;
    ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`;
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('PREPARE TO FACE A CHALLENGE', canvas.width / 2, canvas.height / 2);

    // Reset shadow
    ctx.shadowBlur = 0;
    ctx.textAlign = 'left';

    // End transition after display duration
    if (elapsed >= displayDuration) {
      showTransition = false;
      // You can add what happens next here (e.g., start the challenge)
      console.log('Transition complete - challenge begins!');
    }
  }

  function startGameLoop() {
    if (gameLoop) return; // Already running

    function loop() {
      updatePlayer();
      render();
      gameLoop = requestAnimationFrame(loop);
    }

    loop();
  }

  // Expose to global namespace
  window.initMansionLevel2Background = initMansionBackground;

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const autoCanvas = document.getElementById('gameCanvas') || document.querySelector('canvas');
      initMansionBackground({ canvas: autoCanvas });
    });
  } else {
    const autoCanvas = document.getElementById('gameCanvas') || document.querySelector('canvas');
    initMansionBackground({ canvas: autoCanvas });
  }

})();
