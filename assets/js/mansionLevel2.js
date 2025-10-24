import GameEnvBackground from './GameEngine/GameEnvBackground.js'
import AnimatedPlayer from './GameEngine/AnimatedPlayer.js'
import GameEngine from './GameEngine/Engine.js'
import MemoryGame from './GameEngine/MemoryGame.js'

// Initialize the graveyard memory game when the DOM is ready.
const init = () => {
  // create or reuse canvas
  let canvas = document.getElementById('mansion-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'mansion-canvas';
    canvas.width = 800;
    canvas.height = 600;
    // append to body or a container if present
    const container = document.getElementById('game-container') || document.body;
    container.appendChild(canvas);
  }

  const engine = new GameEngine(canvas);
  const bg = new GameEnvBackground(canvas.width, canvas.height);
  const mem = new MemoryGame(canvas, { maxLevel: 8 });

  // Connect background to memory game for tombstone interaction
  mem.setBackground(bg);

  engine.add(bg);
  engine.add(mem);
  engine.start();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}