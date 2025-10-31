---
layout: base
title: Biology Chambers
permalink: /biology-chambers/
---

<style>
.bio-header {
  text-align: center;
  padding: 60px 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

.bio-header-wave {
  display: block;
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  position: relative;
  top: -1px;
}

.chambers-bg-svg {
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.13;
}

.chambers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 64px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
  max-width: 1200px;
  justify-items: center;
  position: relative;
  z-index: 1;
}

.chamber-card {
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(8px) saturate(1.2);
  padding: 54px 36px 48px 36px;
  border-radius: 28px;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13), 0 0 0 8px rgba(0,0,0,0.03);
  border: 2.5px solid transparent;
  position: relative;
  overflow: hidden;
  min-width: 0;
  max-width: 410px;
  width: 100%;
  z-index: 1;
}

.chamber-card,
.chamber-card h2,
.chamber-card p,
.chamber-card a.chamber-link {
  color: #000 !important;
}

.chamber-card::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 180%;
  height: 180%;
  background: radial-gradient(circle at 60% 40%, rgba(0, 119, 204, 0.10), transparent 70%);
  z-index: 0;
  transform: translate(-50%, -30%);
  pointer-events: none;
}

.chamber-card:hover {
  transform: translateY(-10px) scale(1.04);
  box-shadow: 0 24px 60px 0 rgba(0,0,0,0.22), 0 0 0 8px rgba(0,0,0,0.06);
  border-color: #fffbe6;
}

.aquatic-card {
  border-color: #0077cc;
  background: linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%), rgba(255,255,255,0.85);
}
.aquatic-card::after {
  background: radial-gradient(circle at 60% 40%, rgba(0, 119, 204, 0.13), transparent 70%);
}

.terrestrial-card {
  border-color: #228b22;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%), rgba(255,255,255,0.85);
}
.terrestrial-card::after {
  background: radial-gradient(circle at 60% 40%, rgba(34, 139, 34, 0.13), transparent 70%);
}

.decomposer-card {
  border-color: #cc7700;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%), rgba(255,255,255,0.85);
}
.decomposer-card::after {
  background: radial-gradient(circle at 60% 40%, rgba(204, 119, 0, 0.13), transparent 70%);
}

.chamber-card > * {
  position: relative;
  z-index: 1;
}

.chamber-emoji {
  font-size: 4.2em;
  margin-bottom: 18px;
  margin-top: 0;
  line-height: 1.1;
  text-align: center;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.13));
  animation: float-emoji 3.2s ease-in-out infinite;
}

@keyframes float-emoji {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px) scale(1.07); }
}

.chamber-link {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  letter-spacing: 0.02em;
  font-size: 1.08em;
  background-clip: padding-box;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
}
.chamber-link:after {
  content: '';
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  background: radial-gradient(circle, #fffbe6 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 0;
}
.chamber-link:hover:after {
  opacity: 0.18;
}

@media (max-width: 1000px) {
  .chambers-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 98vw;
  }
  .chamber-card {
    max-width: 340px;
    padding: 36px 18px;
  }
}

@media (max-width: 768px) {
  .bio-header h1 {
    font-size: 2em;
  }
  .bio-header p {
    font-size: 1em;
  }
  .chambers-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 99vw;
  }
  .chamber-card {
    padding: 28px 8px;
    max-width: 98vw;
  }
}
</style>

<div class="bio-header">
  <h1>🧬 Biology Chambers</h1>
  <p>Explore the fascinating worlds of different biological environments</p>
</div>
<svg class="bio-header-wave" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#764ba2" fill-opacity="0.18" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"></path></svg>
<div style="position:relative;">
  <svg class="chambers-bg-svg" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="720" cy="200" rx="700" ry="120" fill="#b3e5fc"/><ellipse cx="720" cy="320" rx="600" ry="80" fill="#ffe0b2"/><ellipse cx="720" cy="100" rx="500" ry="60" fill="#c8e6c9"/></svg>
  <div class="chambers-grid">
    <div class="chamber-card aquatic-card">
      <div class="chamber-emoji" aria-label="Aquatic">🌊</div>
      <h2>Aquatic</h2>
      <p>Dive into water environments - from tiny plankton to massive whales. Discover the mysteries of marine and freshwater ecosystems.</p>
      <a href="https://precia-verma.github.io/student//biology-chambers/aquatic/" class="chamber-link aquatic-link">Explore Aquatic Life</a>
    </div>

    <div class="chamber-card decomposer-card">
      <div class="chamber-emoji" aria-label="Decomposers">🍄</div>
      <h2>Decomposers</h2>
      <p>Uncover the essential organisms that break down dead matter and recycle nutrients, sustaining the circle of life in ecosystems.</p>
      <a href="https://precia-verma.github.io/student//biology-chambers/decomposers/" class="chamber-link decomposer-link">Learn About Decomposers</a>
    </div>

    <div class="chamber-card terrestrial-card">
      <div class="chamber-emoji" aria-label="Terrestrial">🌲</div>
      <h2>Terrestrial</h2>
      <p>Journey through land-based ecosystems including forests, grasslands, and deserts with their unique adaptations and biodiversity.</p>
      <a href="https://precia-verma.github.io/student//biology-chambers/terrestrial/" class="chamber-link terrestrial-link">Discover Terrestrial</a>
    </div>
  </div>
</div>