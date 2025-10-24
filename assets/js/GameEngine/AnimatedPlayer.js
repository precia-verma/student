// Minimal animated player (placeholder) — supports sprite sheets or simple colored box
export default class AnimatedPlayer {
  constructor(x, y, options = {}) {
    this.x = x;
    this.y = y;
    this.w = options.w ?? 48;
    this.h = options.h ?? 48;
    this.color = options.color ?? '#b3e5fc';
    this.frame = 0;
    this.frameRate = options.frameRate ?? 8; // frames per second
    this._time = 0;
  }

  update(dt) {
    this._time += dt;
    const step = 1 / this.frameRate;
    if (this._time >= step) {
      this.frame = (this.frame + 1) % 4;
      this._time -= step;
    }
  }

  draw(ctx) {
    // simple bouncing effect to feel 'alive'
    const bob = Math.sin(this.frame / 4 * Math.PI * 2) * 2;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2 + bob, this.w, this.h);
    // eyes
    ctx.fillStyle = '#222';
    ctx.fillRect(this.x - 8, this.y - 4 + bob, 4, 4);
    ctx.fillRect(this.x + 4, this.y - 4 + bob, 4, 4);
  }
}
