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
  margin-bottom: 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.bio-header h1 {
  font-size: 3em;
  margin: 0 0 15px 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.bio-header p {
  font-size: 1.2em;
  margin: 0;
  opacity: 0.95;
}

.chambers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
  padding: 0 20px;
}

.chamber-card {
  background: white;
  padding: 35px 25px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.chamber-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  transition: height 0.3s ease;
}

.chamber-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  border-color: currentColor;
}

.chamber-card:hover::before {
  height: 100%;
  opacity: 0.05;
}

.aquatic-card {
  border-color: #0077cc;
}

.aquatic-card::before {
  background: #0077cc;
}

.terrestrial-card {
  border-color: #228b22;
}

.terrestrial-card::before {
  background: #228b22;
}

.decomposer-card {
  border-color: #cc7700;
}

.decomposer-card::before {
  background: #cc7700;
}

.chamber-card h2 {
  font-size: 2.2em;
  margin: 0 0 15px 0;
  color: #333;
}

.chamber-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 25px 0;
  font-size: 1.05em;
}

.chamber-link {
  display: inline-block;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1em;
  transition: all 0.3s ease;
  color: white;
  position: relative;
  z-index: 1;
}

.aquatic-link {
  background: linear-gradient(135deg, #0077cc 0%, #0099ff 100%);
}

.aquatic-link:hover {
  background: linear-gradient(135deg, #0099ff 0%, #0077cc 100%);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 119, 204, 0.4);
}

.terrestrial-link {
  background: linear-gradient(135deg, #228b22 0%, #32cd32 100%);
}

.terrestrial-link:hover {
  background: linear-gradient(135deg, #32cd32 0%, #228b22 100%);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(34, 139, 34, 0.4);
}

.decomposer-link {
  background: linear-gradient(135deg, #cc7700 0%, #ff9900 100%);
}

.decomposer-link:hover {
  background: linear-gradient(135deg, #ff9900 0%, #cc7700 100%);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(204, 119, 0, 0.4);
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
    gap: 25px;
  }
  
  .chamber-card {
    padding: 30px 20px;
  }
}
</style>

<div class="bio-header">
  <h1>🧬 Biology Chambers</h1>
  <p>Explore the fascinating worlds of different biological environments</p>
</div>

<div class="chambers-grid">
  
<div class="chamber-card aquatic-card">
  <h2>🌊 Aquatic</h2>
  <p>Dive into water environments - from tiny plankton to massive whales. Discover the mysteries of marine and freshwater ecosystems.</p>
  <a href="https://precia-verma.github.io/student//biology-chambers/aquatic/" class="chamber-link aquatic-link">Explore Aquatic Life</a>
</div>

<div class="chamber-card terrestrial-card">
  <h2>🌲 Terrestrial</h2>
  <p>Journey through land-based ecosystems including forests, grasslands, and deserts with their unique adaptations and biodiversity.</p>
  <a href="https://precia-verma.github.io/student//biology-chambers/terrestrial/" class="chamber-link terrestrial-link">Discover Terrestrial</a>
</div>

<div class="chamber-card decomposer-card">
  <h2>🍄 Decomposers</h2>
  <p>Uncover the essential organisms that break down dead matter and recycle nutrients, sustaining the circle of life in ecosystems.</p>
  <a href="https://precia-verma.github.io/student//biology-chambers/decomposers/" class="chamber-link decomposer-link">Learn About Decomposers</a>
</div>

</div>