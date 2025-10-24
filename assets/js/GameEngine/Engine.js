// Simple Game Engine: manages update/render loop and entities
export default class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.entities = [];
    this.lastTime = 0;
    this.running = false;
  }

  add(entity) {
    this.entities.push(entity);
    return entity;
  }

  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this._loop.bind(this));
  }

  stop() {
    this.running = false;
  }

  _loop(now) {
    const dt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    this.update(dt);
    this.render();
    if (this.running) requestAnimationFrame(this._loop.bind(this));
  }

  update(dt) {
    for (const e of this.entities) {
      if (typeof e.update === 'function') e.update(dt);
    }
  }

  render() {
    // clear
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const e of this.entities) {
      if (typeof e.draw === 'function') e.draw(this.ctx);
    }
  }
}
