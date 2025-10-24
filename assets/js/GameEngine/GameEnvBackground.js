// A simple graveyard background renderer with interactive tombstones
export default class GameEnvBackground {
  constructor(width, height, options = {}) {
    this.width = width;
    this.height = height;
    this.moonX = options.moonX ?? width - 120;
    this.moonY = options.moonY ?? 80;
    this.stones = [];
    this.glowStates = []; // track which stones are glowing
    this._seedStones();
  }

  _seedStones() {
    const count = 6; // 6 tombstones for gameplay
    const spacing = (this.width - 200) / (count - 1); // More margin for larger stones
    for (let i = 0; i < count; i++) {
      this.stones.push({
        id: i,
        x: 100 + i * spacing,
        y: this.height - 140, // Lower position for larger stones
        w: 80, // Much larger width
        h: 100, // Much larger height
        color: this._getStoneColor(i),
        baseColor: '#4a4a4a' // Darker base color for spookier look
      });
      this.glowStates.push({ glowing: false, intensity: 0, targetIntensity: 0 });
    }
  }

  _getStoneColor(index) {
    const colors = ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff', '#44ffff'];
    return colors[index % colors.length];
  }

  setStoneGlow(stoneId, glowing) {
    if (stoneId >= 0 && stoneId < this.glowStates.length) {
      this.glowStates[stoneId].targetIntensity = glowing ? 1 : 0;
    }
  }

  getStoneAt(x, y) {
    for (const stone of this.stones) {
      const dx = x - stone.x;
      const dy = y - stone.y;
      // Check if click is within larger tombstone bounds
      if (Math.abs(dx) <= stone.w / 2 && 
          dy >= -stone.h / 2 && dy <= stone.h / 2) {
        return stone.id;
      }
    }
    return -1;
  }

  update(dt) {
    // animate glow states
    for (const glow of this.glowStates) {
      const speed = 8; // glow transition speed
      if (glow.intensity < glow.targetIntensity) {
        glow.intensity = Math.min(glow.targetIntensity, glow.intensity + dt * speed);
      } else if (glow.intensity > glow.targetIntensity) {
        glow.intensity = Math.max(glow.targetIntensity, glow.intensity - dt * speed);
      }
    }
  }

  draw(ctx) {
    // spooky night sky
    const g = ctx.createLinearGradient(0, 0, 0, this.height);
    g.addColorStop(0, '#0a0a1a'); // Darker purple-black
    g.addColorStop(0.7, '#1a0a2a'); // Dark purple
    g.addColorStop(1, '#2a1a3a'); // Slightly lighter purple at bottom
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, this.width, this.height);

    // eerie moon with glow
    ctx.save();
    ctx.shadowColor = '#f7f6d8';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#f7f6d8';
    ctx.beginPath();
    ctx.arc(this.moonX, this.moonY, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // add some stars
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 20; i++) {
      const x = (i * 37) % this.width;
      const y = (i * 23) % (this.height / 2);
      ctx.fillRect(x, y, 1, 1);
    }

    // spooky ground with mist
    const groundGrad = ctx.createLinearGradient(0, this.height - 120, 0, this.height);
    groundGrad.addColorStop(0, '#1a1a2a');
    groundGrad.addColorStop(1, '#0a0a1a');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, this.height - 120, this.width, 120);

    // tombstones with enhanced glow
    for (let i = 0; i < this.stones.length; i++) {
      const t = this.stones[i];
      const glow = this.glowStates[i];
      
      ctx.save();
      ctx.translate(t.x, t.y);
      
      // Enhanced glow effect with multiple layers
      if (glow.intensity > 0) {
        // Outer glow
        ctx.shadowColor = t.color;
        ctx.shadowBlur = 50 * glow.intensity;
        
        // Inner vibrant glow
        const glowIntensity = glow.intensity * 0.9;
        ctx.fillStyle = this._mixColors(t.baseColor, t.color, glowIntensity);
        
        // Add pulsing effect
        const pulse = Math.sin(Date.now() * 0.008) * 0.1 + 0.9;
        ctx.shadowBlur = (50 * glow.intensity) * pulse;
      } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.fillStyle = t.baseColor;
      }
      
      // Tombstone main body - larger and more imposing
      ctx.beginPath();
      ctx.rect(-t.w / 2, -t.h / 2, t.w, t.h);
      ctx.fill();
      
      // Reset shadow for details
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      
      // Apply same fill style for rounded top
      if (glow.intensity > 0) {
        const glowIntensity = glow.intensity * 0.9;
        ctx.fillStyle = this._mixColors(t.baseColor, t.color, glowIntensity);
      } else {
        ctx.fillStyle = t.baseColor;
      }
      
      // Rounded top - larger
      ctx.beginPath();
      ctx.arc(0, -t.h / 2, t.w / 2, Math.PI, 0, false);
      ctx.fill();
      
      // Add detailed designs and decorations
      this._drawTombstoneDetails(ctx, t, glow, i);
      
      ctx.restore();
    }

    // eerie fog effect
    const fogGrad = ctx.createLinearGradient(0, this.height - 150, 0, this.height);
    fogGrad.addColorStop(0, 'rgba(100,100,120,0.1)');
    fogGrad.addColorStop(1, 'rgba(50,50,70,0.3)');
    ctx.fillStyle = fogGrad;
    ctx.fillRect(0, this.height - 150, this.width, 150);
    
    // add some floating particles/spirits
    const time = Date.now() * 0.001;
    ctx.fillStyle = 'rgba(200,200,255,0.3)';
    for (let i = 0; i < 5; i++) {
      const x = 100 + i * 120 + Math.sin(time + i) * 20;
      const y = this.height - 200 + Math.cos(time * 0.7 + i) * 30;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  _drawTombstoneDetails(ctx, tombstone, glow, index) {
    const glowing = glow.intensity > 0;
    const textColor = glowing ? `rgba(255,255,255,${glow.intensity})` : 'rgba(200,200,200,0.8)';
    const decorColor = glowing ? `rgba(255,255,255,${glow.intensity * 0.6})` : 'rgba(150,150,150,0.6)';
    
    ctx.fillStyle = textColor;
    ctx.strokeStyle = decorColor;
    ctx.lineWidth = 1;
    
    // Tombstone number (1-6)
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = glowing ? `rgba(255,255,255,${glow.intensity})` : '#888';
    ctx.fillText(String(index + 1), 0, -15);
    
    // Different designs for each tombstone
    switch (index) {
      case 0: // Cross design
        this._drawCross(ctx, decorColor, glowing);
        break;
      case 1: // Rose design
        this._drawRose(ctx, decorColor, glowing);
        break;
      case 2: // Angel wings
        this._drawWings(ctx, decorColor, glowing);
        break;
      case 3: // Celtic knot
        this._drawCelticKnot(ctx, decorColor, glowing);
        break;
      case 4: // Skull design
        this._drawSkull(ctx, decorColor, glowing);
        break;
      case 5: // Star pattern
        this._drawStar(ctx, decorColor, glowing);
        break;
    }
    
    // RIP text at bottom
    ctx.font = '12px serif';
    ctx.fillStyle = textColor;
    ctx.fillText('R.I.P.', 0, 35);
    
    // Decorative border
    ctx.strokeStyle = decorColor;
    ctx.lineWidth = glowing ? 2 : 1;
    ctx.strokeRect(-tombstone.w/2 + 3, -tombstone.h/2 + 3, tombstone.w - 6, tombstone.h - 6);
  }

  _drawCross(ctx, color, glowing) {
    ctx.strokeStyle = color;
    ctx.lineWidth = glowing ? 3 : 2;
    // Vertical line
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(0, 25);
    ctx.stroke();
    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(-8, 12);
    ctx.lineTo(8, 12);
    ctx.stroke();
  }

  _drawRose(ctx, color, glowing) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = glowing ? 2 : 1;
    // Rose petals
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5;
      const x = Math.cos(angle) * 6;
      const y = Math.sin(angle) * 6 + 15;
      ctx.arc(x, y, 3, 0, Math.PI * 2);
    }
    ctx.fill();
    // Stem
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, 30);
    ctx.stroke();
  }

  _drawWings(ctx, color, glowing) {
    ctx.strokeStyle = color;
    ctx.lineWidth = glowing ? 2 : 1;
    // Left wing
    ctx.beginPath();
    ctx.arc(-8, 15, 8, 0, Math.PI, true);
    ctx.stroke();
    // Right wing
    ctx.beginPath();
    ctx.arc(8, 15, 8, 0, Math.PI, true);
    ctx.stroke();
    // Wing details
    ctx.beginPath();
    ctx.arc(-8, 15, 4, 0, Math.PI, true);
    ctx.arc(8, 15, 4, 0, Math.PI, true);
    ctx.stroke();
  }

  _drawCelticKnot(ctx, color, glowing) {
    ctx.strokeStyle = color;
    ctx.lineWidth = glowing ? 2 : 1;
    ctx.beginPath();
    // Interwoven circle pattern
    ctx.arc(0, 15, 8, 0, Math.PI * 2);
    ctx.moveTo(-6, 10);
    ctx.bezierCurveTo(-6, 20, 6, 20, 6, 10);
    ctx.moveTo(-6, 20);
    ctx.bezierCurveTo(-6, 10, 6, 10, 6, 20);
    ctx.stroke();
  }

  _drawSkull(ctx, color, glowing) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    // Skull outline
    ctx.beginPath();
    ctx.arc(0, 13, 8, 0, Math.PI * 2);
    ctx.fill();
    // Eye sockets
    ctx.fillStyle = glowing ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.arc(-3, 11, 2, 0, Math.PI * 2);
    ctx.arc(3, 11, 2, 0, Math.PI * 2);
    ctx.fill();
    // Nose
    ctx.beginPath();
    ctx.moveTo(0, 13);
    ctx.lineTo(-1, 16);
    ctx.lineTo(1, 16);
    ctx.closePath();
    ctx.fill();
  }

  _drawStar(ctx, color, glowing) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = glowing ? 2 : 1;
    // Five-pointed star
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
      const x = Math.cos(angle) * 8;
      const y = Math.sin(angle) * 8 + 15;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      
      // Inner point
      const innerAngle = angle + Math.PI / 5;
      const innerX = Math.cos(innerAngle) * 4;
      const innerY = Math.sin(innerAngle) * 4 + 15;
      ctx.lineTo(innerX, innerY);
    }
    ctx.closePath();
    ctx.fill();
  }

  _mixColors(color1, color2, ratio) {
    // Simple color mixing for glow effect
    const hex1 = color1.substring(1);
    const hex2 = color2.substring(1);
    const r1 = parseInt(hex1.substring(0, 2), 16);
    const g1 = parseInt(hex1.substring(2, 4), 16);
    const b1 = parseInt(hex1.substring(4, 6), 16);
    const r2 = parseInt(hex2.substring(0, 2), 16);
    const g2 = parseInt(hex2.substring(2, 4), 16);
    const b2 = parseInt(hex2.substring(4, 6), 16);
    
    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);
    
    return `rgb(${r}, ${g}, ${b})`;
  }
}
