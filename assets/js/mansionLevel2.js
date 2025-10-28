// Added: load and apply the "Untitled" mansion image as the background for Level 2.
// Behavior:
// - If a canvas with id "gameCanvas" is present, the image will be drawn to the canvas.
// - Otherwise the script will set the background-image on the element with id "game-container" or document.body.
// - Fallback to a bundled haunted-mansion image if the preferred file is not found.
// Note: Update the `bgPaths` array to point to the exact image filename you want to use.

(function () {
  const bgPaths = [
    'assets/images/mansion-untitled.jpeg', // relative path
    '/student/assets/images/mansion-untitled.jpeg', // absolute path with /student/ prefix
    './assets/images/mansion-untitled.jpeg', // explicit relative path
    '/student/images/haunted-mansion-battle-map-30x36-v0-u37w8jh2gfud1.webp'
  ];

  // Public initialization function. Call with optional canvas element or id.
  function initMansionBackground(options = {}) {
    const canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) : options.canvas;
    const container = document.getElementById('game-container') || document.body;
    const onReady = typeof options.onReady === 'function' ? options.onReady : () => {};

    console.log('Initializing mansion background...', { canvas, container });

    // Try to load images in order until one succeeds
    let loaded = false;

    function tryNext(index) {
      if (index >= bgPaths.length) {
        console.log('All background images failed to load, applying fallback');
        applyFallback(container, canvas);
        onReady(new Error('No background images loaded'));
        return;
      }

      console.log('Trying to load:', bgPaths[index]);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () {
        console.log('Successfully loaded background image:', bgPaths[index]);
        loaded = true;
        if (canvas && canvas.getContext) {
          drawImageToCanvas(img, canvas);
        } else {
          applyCssBackground(container, bgPaths[index]);
        }
        onReady(null, img);
      };
      img.onerror = function () {
        console.log('Failed to load background image:', bgPaths[index]);
        tryNext(index + 1);
      };
      img.src = bgPaths[index];
    }

    tryNext(0);
  }

  function drawImageToCanvas(img, canvas) {
    const ctx = canvas.getContext('2d');
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // compute aspect-fit drawing
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;
    const scale = Math.max(cw / iw, ch / ih); // cover
    const sw = iw * scale;
    const sh = ih * scale;
    const dx = (cw - sw) / 2;
    const dy = (ch - sh) / 2;

    ctx.drawImage(img, dx, dy, sw, sh);
  }

  function applyCssBackground(container, path) {
    container.style.backgroundImage = `url('${path}')`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center center';
    container.style.backgroundRepeat = 'no-repeat';
  }

  function applyFallback(container, canvas) {
    const color = '#2b3a2b'; // spooky green fallback
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      container.style.backgroundColor = color;
    }
  }

  // Expose to global namespace for easy usage
  window.initMansionLevel2Background = initMansionBackground;

  // Auto-initialize if a canvas or container exists on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const autoCanvas = document.getElementById('gameCanvas') || document.querySelector('canvas');
      if (autoCanvas) {
        // NOTE: Edited to load Untitled image as background — change bgPaths above if necessary.
        initMansionBackground({ canvas: autoCanvas });
      } else if (document.getElementById('game-container') || document.body) {
        initMansionBackground({});
      }
    });
  } else {
    const autoCanvas = document.getElementById('gameCanvas') || document.querySelector('canvas');
    if (autoCanvas) {
      initMansionBackground({ canvas: autoCanvas });
    } else if (document.getElementById('game-container') || document.body) {
      initMansionBackground({});
    }
  }

})();
