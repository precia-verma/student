// Tombstone Sequence Memory Game (Simon Says style)
export default class MemoryGame {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.background = null; // will be set by engine
    this.sequence = [];
    this.playerSequence = [];
    this.currentLevel = 1;
    this.showingSequence = false;
    this.sequenceIndex = 0;
    this.score = 0;
    this.gameState = 'intro'; // 'intro', 'ready', 'showing', 'playing', 'levelComplete', 'gameover', 'won'
    this.glowTimer = 0;
    this.glowDuration = 0.6; // seconds each tombstone glows
    this.sequenceDelay = 0.8; // delay between tombstone glows
    this.maxLevel = opts.maxLevel || 8;
    this.lives = 3;
    this.introTimer = 0;
    this.readyTimer = 0;
    this._bindEvents();
  }

  _getSequenceLength() {
    // Level-based sequence length: Level 1 = 2 steps, Level 2 = 3 steps, etc.
    return this.currentLevel + 1;
  }

  _generateSequence() {
    this.sequence = [];
    const length = this._getSequenceLength();
    for (let i = 0; i < length; i++) {
      this.sequence.push(Math.floor(Math.random() * 6)); // 6 tombstones
    }
  }

  _bindEvents() {
    this._clickHandler = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
      this._onClick(x, y);
    };
    
    this._keyHandler = (e) => {
      if (e.code === 'Space' || e.key === 'Enter') {
        if (this.gameState === 'intro') {
          this.gameState = 'ready';
          this.readyTimer = 0;
          this._generateSequence();
        } else if (this.gameState === 'levelComplete') {
          this._nextLevel();
        } else if (this.gameState === 'gameover') {
          this._restart();
        } else if (this.gameState === 'won') {
          this._restart();
        }
      }
    };
    
    this.canvas.addEventListener('click', this._clickHandler);
    document.addEventListener('keydown', this._keyHandler);
  }

  _onClick(x, y) {
    if (this.gameState === 'intro') {
      this.gameState = 'ready';
      this.readyTimer = 0;
      this._generateSequence();
      return;
    }
    
    if (this.gameState === 'levelComplete') {
      this._nextLevel();
      return;
    }
    
    if (this.gameState === 'gameover') {
      this._restart();
      return;
    }
    
    if (this.gameState === 'won') {
      this._restart();
      return;
    }
    
    if (this.gameState !== 'playing' || !this.background) return;
    
    const stoneId = this.background.getStoneAt(x, y);
    if (stoneId >= 0) {
      this._handleStoneClick(stoneId);
    }
  }

  _handleStoneClick(stoneId) {
    this.playerSequence.push(stoneId);
    
    // Brief glow feedback
    this.background.setStoneGlow(stoneId, true);
    setTimeout(() => this.background.setStoneGlow(stoneId, false), 200);
    
    // Check if correct so far
    const currentIndex = this.playerSequence.length - 1;
    if (this.playerSequence[currentIndex] !== this.sequence[currentIndex]) {
      // Wrong!
      this.lives--;
      this.score = Math.max(0, this.score - 50);
      if (this.lives <= 0) {
        this.gameState = 'gameover';
      } else {
        // Reset and try again
        this.playerSequence = [];
        this._showSequence();
      }
      return;
    }
    
    // Check if sequence complete
    if (this.playerSequence.length === this.sequence.length) {
      // Success! Next level
      this.score += 100 * this.currentLevel;
      
      if (this.currentLevel >= this.maxLevel) {
        this.gameState = 'won';
      } else {
        this.gameState = 'levelComplete';
      }
    }
  }

  _nextLevel() {
    this.currentLevel++;
    this.playerSequence = [];
    this._generateSequence();
    this.gameState = 'ready';
    this.readyTimer = 0;
  }

  _restart() {
    // Reset all game state to initial values
    this.currentLevel = 1;
    this.score = 0;
    this.lives = 3;
    this.sequence = [];
    this.playerSequence = [];
    this.sequenceIndex = 0;
    this.glowTimer = 0;
    this.introTimer = 0;
    this.readyTimer = 0;
    this.gameState = 'intro';
    
    // Clear any glowing tombstones
    if (this.background) {
      for (let i = 0; i < 6; i++) {
        this.background.setStoneGlow(i, false);
      }
    }
  }

  _showSequence() {
    this.gameState = 'showing';
    this.sequenceIndex = 0;
    this.glowTimer = 0;
    this.playerSequence = [];
  }

  setBackground(bg) {
    this.background = bg;
    // Game will start in intro state and wait for user input
  }

  update(dt) {
    if (this.gameState === 'intro') {
      this.introTimer += dt;
      // Auto-advance after 3 seconds if no input
      if (this.introTimer > 3) {
        this.gameState = 'ready';
        this.readyTimer = 0;
        this._generateSequence();
      }
    } else if (this.gameState === 'ready') {
      this.readyTimer += dt;
      // Auto-start sequence after 2 seconds
      if (this.readyTimer > 2) {
        this._showSequence();
      }
    } else if (this.gameState === 'showing' && this.background) {
      this.glowTimer += dt;
      
      // Check if we should light up the next tombstone
      const expectedTime = this.sequenceIndex * this.sequenceDelay;
      
      if (this.glowTimer >= expectedTime && this.sequenceIndex < this.sequence.length) {
        const stoneId = this.sequence[this.sequenceIndex];
        this.background.setStoneGlow(stoneId, true);
        
        // Turn off glow after duration
        setTimeout(() => {
          if (this.background) this.background.setStoneGlow(stoneId, false);
        }, this.glowDuration * 1000);
        
        this.sequenceIndex++;
      }
      
      // Check if sequence is complete
      if (this.sequenceIndex >= this.sequence.length && 
          this.glowTimer >= expectedTime + this.glowDuration) {
        this.gameState = 'playing';
      }
    }
  }

  draw(ctx) {
    // intro screen
    if (this.gameState === 'intro') {
      ctx.fillStyle = 'rgba(10,0,20,0.9)';
      ctx.fillRect(0, 0, this.width, this.height);
      
      ctx.fillStyle = '#ff6666';
      ctx.font = '48px serif';
      ctx.textAlign = 'center';
      ctx.fillText('Are You Ready?', this.width / 2, this.height / 2 - 60);
      
      ctx.font = '28px serif';
      ctx.fillStyle = '#dddddd';
      ctx.fillText('🪦 Graveyard Sequence Game 🪦', this.width / 2, this.height / 2 - 20);
      
      ctx.font = '18px serif';
      ctx.fillStyle = '#aaaaaa';
      ctx.fillText('Click anywhere or press SPACE to enter the graveyard...', this.width / 2, this.height / 2 + 40);
      ctx.fillText('Watch the numbered tombstones glow, then repeat the pattern', this.width / 2, this.height / 2 + 70);
      
      return;
    }

    // level ready screen
    if (this.gameState === 'ready') {
      ctx.fillStyle = 'rgba(20,0,30,0.8)';
      ctx.fillRect(0, 0, this.width, this.height);
      
      ctx.fillStyle = '#ff4444';
      ctx.font = '42px serif';
      ctx.textAlign = 'center';
      ctx.fillText(`👻 Level ${this.currentLevel} 👻`, this.width / 2, this.height / 2 - 40);
      
      ctx.font = '22px serif';
      ctx.fillStyle = '#ffffff';
      const sequenceLength = this._getSequenceLength();
      ctx.fillText(`Remember ${sequenceLength} glowing tombstone${sequenceLength > 1 ? 's' : ''}`, this.width / 2, this.height / 2);
      
      ctx.font = '16px serif';
      ctx.fillStyle = '#cccccc';
      ctx.fillText('Prepare to witness the spirits...', this.width / 2, this.height / 2 + 40);
      
      return;
    }

    // header info during gameplay
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px serif';
    ctx.textAlign = 'left';
    ctx.fillText(`👻 Level: ${this.currentLevel}`, 12, 30);
    ctx.fillText(`💀 Score: ${this.score}`, 12, 60);
    ctx.fillText(`🖤 Lives: ${this.lives}`, 12, 90);

    // instructions
    ctx.font = '14px serif';
    ctx.fillStyle = '#dddddd';
    if (this.gameState === 'showing') {
      ctx.fillText('👁️ Watch the numbered tombstones glow...', 12, 120);
    } else if (this.gameState === 'playing') {
      ctx.fillText('🫵 Click the tombstones in the same haunted order!', 12, 120);
    }

    // level complete overlay
    if (this.gameState === 'levelComplete') {
      ctx.fillStyle = 'rgba(0,100,0,0.7)';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fillStyle = '#4ecdc4';
      ctx.font = '36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Level Complete!', this.width / 2, this.height / 2 - 40);
      ctx.font = '20px sans-serif';
      ctx.fillStyle = '#fff';
      ctx.fillText(`+${100 * this.currentLevel} points`, this.width / 2, this.height / 2);
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#ddd';
      if (this.currentLevel < this.maxLevel) {
        ctx.fillText('Click anywhere or press SPACE for next level', this.width / 2, this.height / 2 + 40);
      }
    }

    // game over overlay
    if (this.gameState === 'gameover') {
      ctx.fillStyle = 'rgba(0,0,0,0.8)';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fillStyle = '#ff6b6b';
      ctx.font = '42px serif';
      ctx.textAlign = 'center';
      ctx.fillText('💀 Game Over 💀', this.width / 2, this.height / 2 - 40);
      ctx.font = '20px serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Final Score: ${this.score}`, this.width / 2, this.height / 2);
      ctx.fillText(`Reached Level: ${this.currentLevel}`, this.width / 2, this.height / 2 + 30);
      
      ctx.font = '18px serif';
      ctx.fillStyle = '#ffaaaa';
      ctx.fillText('🔄 Click anywhere or press SPACE to restart', this.width / 2, this.height / 2 + 70);
      ctx.fillText('Return from the grave and try again...', this.width / 2, this.height / 2 + 100);
    }

    // victory overlay
    if (this.gameState === 'won') {
      ctx.fillStyle = 'rgba(0,0,0,0.8)';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fillStyle = '#4ecdc4';
      ctx.font = '42px serif';
      ctx.textAlign = 'center';
      ctx.fillText('👑 You Win! 👑', this.width / 2, this.height / 2 - 40);
      ctx.font = '20px serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Perfect Score: ${this.score}`, this.width / 2, this.height / 2);
      ctx.fillText('Master of the Graveyard!', this.width / 2, this.height / 2 + 30);
      
      ctx.font = '18px serif';
      ctx.fillStyle = '#aaffaa';
      ctx.fillText('🔄 Click anywhere or press SPACE to play again', this.width / 2, this.height / 2 + 70);
      ctx.fillText('Challenge the spirits once more...', this.width / 2, this.height / 2 + 100);
    }
  }

  destroy() {
    this.canvas.removeEventListener('click', this._clickHandler);
    document.removeEventListener('keydown', this._keyHandler);
  }
}
