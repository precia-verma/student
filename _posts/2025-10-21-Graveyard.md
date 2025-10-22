---
layout: post
title: Graveyard Memory Game
description: A spooky memory game with glowing tombstones in a haunted graveyard
toc: true
comments: true
permalink: /graveyard/
categories: [games]
---

<style>
  /* Import spooky fonts */
  @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&family=Eater&display=swap');
  
  /* Adding eerie animations and effects */
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
    25%, 75% { opacity: 0.5; }
    33%, 66% { opacity: 0.7; }
  }
  
  @keyframes fog {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes float {
    0% { transform: translateY(0) translateX(0) rotate(0deg); }
    33% { transform: translateY(-15px) translateX(10px) rotate(5deg); }
    66% { transform: translateY(-5px) translateX(-10px) rotate(-5deg); }
    100% { transform: translateY(0) translateX(0) rotate(0deg); }
  }
  
  /* Subtle atmosphere shift - replacing thunder effect */
  @keyframes atmosphereShift {
    0%, 100% { background-color: rgba(7, 7, 7, 1); }
    50% { background-color: rgba(13, 7, 10, 1); }
  }
  
  /* Blood dripping animation */
  @keyframes drip {
    0% { height: 0; opacity: 0.9; }
    70% { height: 120px; opacity: 0.9; }
    100% { height: 120px; opacity: 0; }
  }
  
  /* Custom cursors */
  body {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M7,7 L17,7 L17,17 L7,17 Z' fill='%23550000' fill-opacity='0.7' stroke='%23ffffff' stroke-width='1'/%3E%3Cpath d='M11,3 L13,3 L13,21 L11,21 Z M3,11 L21,11 L21,13 L3,13 Z' fill='%23ffffff' stroke='%23000000' stroke-width='0.5'/%3E%3C/svg%3E") 12 12, auto !important;
  }
  
  /* Custom animation for moving stars */
  @keyframes movingStars {
    0% { background-position: 0 0; }
    100% { background-position: 200px 200px; }
  }
  
  /* Custom animation for floating tombstones in background */
  @keyframes floatingTombstones {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  
  /* Cloud movement animation */
  @keyframes cloudDrift {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
  }
  
  /* Subtle cloud glow instead of lightning */
  @keyframes cloudGlow {
    0%, 100% { background-color: rgba(40, 40, 45, 0.7); }
    50% { background-color: rgba(50, 50, 60, 0.7); }
  }
  
  /* Fog particles floating animation */
  @keyframes fogFloat {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
  }
  
  .graveyard-container {
    background-color: #070707;
    background-image: 
      radial-gradient(circle at 50% 70%, #1d0a12 0%, #090303 50%, #000000 100%);
    position: relative;
    border: 8px solid #1d0404;
    border-radius: 0;
    box-shadow: 
      inset 0 0 20px 5px #000, 
      0 0 30px 5px #630000;
    padding: 20px 10px;
    width: 100%;
    min-height: 600px;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    animation: atmosphereShift 20s infinite ease-in-out;
  }
  
  /* Eerie gradient overlay */
  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(20, 0, 30, 0.2) 0%,
      rgba(70, 0, 20, 0.1) 50%,
      rgba(20, 0, 0, 0.2) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
  
  /* Add a starry night effect */
  .graveyard-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(white, rgba(255,255,255,0) 2px),
      radial-gradient(white, rgba(255,255,255,0) 1px);
    background-size: 
      200px 200px,
      100px 100px;
    background-position: 
      0 0,
      30px 30px;
    animation: movingStars 100s linear infinite;
    opacity: 0.3;
    z-index: 0;
    pointer-events: none;
  }
  
  /* Fog effect overlay */
  .graveyard-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%);
    background-size: 200% 100%;
    animation: fog 30s infinite;
    z-index: 1;
    pointer-events: none;
  }
  
  /* Ground/soil effect */
  .graveyard-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to bottom, #0a0505, #1a0a0a);
    z-index: 0;
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      height: 10px;
      background: linear-gradient(to bottom, transparent, #0a0505);
    }
  }
  
  /* Background tombstone silhouettes */
  .bg-tombstone {
    position: absolute;
    bottom: 0;
    background-color: #0b0b0b;
    z-index: 0;
    pointer-events: none;
  }
  
  /* Background tree silhouettes */
  .bg-tree {
    position: absolute;
    bottom: 0;
    background-color: #0a0a0a;
    z-index: 0;
    pointer-events: none;
  }
  
  /* Haunted house in the distance */
  .haunted-house {
    position: absolute;
    bottom: 15px;
    left: 70%;
    width: 120px;
    height: 80px;
    background-color: #080808;
    clip-path: polygon(
      0% 100%,   /* bottom left */
      0% 40%,    /* middle left */
      20% 40%,   /* bottom of tower */
      20% 0%,    /* top of tower */
      30% 0%,    /* top of tower */
      30% 40%,   /* bottom of tower */
      100% 40%,  /* middle right */
      100% 100%  /* bottom right */
    );
    z-index: 0;
  }
  
  /* Windows of the haunted house */
  .house-window {
    position: absolute;
    width: 10px;
    height: 15px;
    background-color: rgba(255, 200, 50, 0.2);
    animation: flicker 4s infinite alternate;
  }
  
  /* Blood splatter and drips */
  .blood-splatter {
    position: absolute;
    background-image: url('https://www.pngall.com/wp-content/uploads/13/Blood-Splatter-PNG-Image.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    z-index: 2;
    opacity: 0.7;
  }
  
  .blood-drip {
    position: absolute;
    top: 0;
    width: 3px;
    background-color: #8b0000;
    border-radius: 0 0 5px 5px;
    animation: drip 10s infinite;
    z-index: 3;
  }
  
  .game-title {
    color: #ff1a1a;
    font-family: 'Nosifer', cursive;
    font-size: 3em;
    text-align: center;
    margin: 15px 0 25px;
    letter-spacing: 2px;
    text-shadow: 
      0 0 10px #ff0000,
      0 0 20px #ff0000,
      0 0 30px #800000,
      0 0 5px #800000,
      0 0 1px #fff;
    animation: flicker 3s infinite alternate;
    z-index: 2;
    transform: perspective(500px) rotateX(5deg);
  }
  
  .tombstone-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 20px;
    z-index: 2;
    position: relative;
    overflow: visible;
    padding: 10px 5px;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .tombstone {
    width: 85px;
    height: 135px;
    margin: 0 5px;
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23550000' fill-opacity='0.6' stroke='%23ffffff'/%3E%3Ccircle cx='12' cy='12' r='6' fill='%23ffffff' fill-opacity='0.7'/%3E%3Ccircle cx='12' cy='12' r='2' fill='%23000000'/%3E%3C/svg%3E") 12 12, pointer !important;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.7));
  }
  
  .tombstone::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 25px;
    width: 60px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    z-index: -1;
  }
  
  .tombstone svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  
  .tombstone:hover {
    transform: translateY(-10px) scale(1.05);
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.9)) brightness(1.1);
  }
  
  .tombstone.active {
    animation: pulse 0.5s;
  }
  
  /* Different colored glows for each tombstone */
  #tombstone1.active { filter: drop-shadow(0 0 20px #ff0000) brightness(1.5); } /* Red */
  #tombstone1.active path { fill: #aa8888; }
  #tombstone1.active text { fill: #ff0000; }
  
  #tombstone2.active { filter: drop-shadow(0 0 20px #9900ff) brightness(1.5); } /* Purple */
  #tombstone2.active path { fill: #9988aa; }
  #tombstone2.active text { fill: #9900ff; }
  
  #tombstone3.active { filter: drop-shadow(0 0 20px #00ccff) brightness(1.5); } /* Blue */
  #tombstone3.active path { fill: #8899aa; }
  #tombstone3.active text { fill: #00ccff; }
  
  #tombstone4.active { filter: drop-shadow(0 0 20px #ff3300) brightness(1.5); } /* Bright Red-Orange */
  #tombstone4.active path { fill: #aa8866; }
  #tombstone4.active text { fill: #ff3300; }
  
  #tombstone5.active { filter: drop-shadow(0 0 20px #00ff00) brightness(1.5); } /* Green */
  #tombstone5.active path { fill: #88aa88; }
  #tombstone5.active text { fill: #00ff00; }
  
  #tombstone6.active { filter: drop-shadow(0 0 20px #00ffff) brightness(1.5); } /* Cyan */
  #tombstone6.active path { fill: #88aaaa; }
  #tombstone6.active text { fill: #00ffff; }
  
  .game-info {
    color: #ccc;
    font-family: 'Courier New', monospace;
    text-align: center;
    margin: 25px 0 15px;
    z-index: 2;
  }
  
  #game-instructions {
    font-size: 1.1em;
    color: #dadada;
    text-shadow: 0 0 5px #000;
    font-style: italic;
  }
  
  .score-display {
    background-color: rgba(43, 0, 0, 0.7);
    border: 1px solid #500;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    margin-top: 10px;
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  }
  
  .button {
    background-color: #3a0000;
    color: #ff9d9d;
    border: 2px solid #500;
    padding: 12px 25px;
    margin: 15px 10px;
    border-radius: 3px;
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M3,12 L9,6 L9,9 L21,9 L21,15 L9,15 L9,18 Z' fill='%23ffffff' stroke='%23000000'/%3E%3Cpath d='M7,12 L17,12' stroke='%23550000' stroke-width='2'/%3E%3C/svg%3E") 3 12, pointer !important;
    font-family: 'Creepster', cursive;
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: bold;
    transition: all 0.3s;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    text-shadow: 0 0 3px #600;
  }
  
  .button:hover {
    background-color: #500;
    color: #fff;
    box-shadow: 0 0 20px #ff2222, 0 5px 15px rgba(0, 0, 0, 0.9);
    transform: translateY(-3px);
  }
  
  .ghost {
    position: absolute;
    width: 70px;
    height: 80px;
    background-image: url('https://i.pinimg.com/originals/81/4a/37/814a37a3b796c9de9f700b2f38d1c07f.gif');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
    animation: float 10s infinite ease-in-out;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
    z-index: 2;
  }
  
  .bat {
    position: absolute;
    width: 50px;
    height: 30px;
    background-image: url('https://i.gifer.com/origin/93/9325ac3f934ebd3487ae7d2c47fcc258.gif');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.9;
    z-index: 1;
    animation: float 7s infinite;
  }
  
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(40, 0, 0, 0.9);
    color: #ff9d9d;
    padding: 30px;
    border: 2px solid #500;
    border-radius: 5px;
    font-family: 'Creepster', cursive;
    font-size: 28px;
    letter-spacing: 1px;
    z-index: 10;
    display: none;
    text-align: center;
    box-shadow: 0 0 30px #600;
  }
  
  /* Spooky cobweb corners */
  .cobweb {
    position: absolute;
    width: 150px;
    height: 150px;
    background-image: url('https://www.pngkit.com/png/full/41-418407_spider-web-png-clipart-cobweb-png.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: 2;
    pointer-events: none;
  }
  
  .cobweb.top-left {
    top: -20px;
    left: -20px;
    transform: rotate(0deg);
  }
  
  .cobweb.top-right {
    top: -20px;
    right: -20px;
    transform: rotate(90deg);
  }
  
  .cobweb.bottom-left {
    bottom: -20px;
    left: -20px;
    transform: rotate(270deg);
  }
  
  .cobweb.bottom-right {
    bottom: -20px;
    right: -20px;
    transform: rotate(180deg);
  }
  
  /* Moon in the background */
  .moon {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f8f8b9;
    box-shadow:
      0 0 10px 2px #f8f8b9,
      0 0 20px 5px rgba(255, 255, 200, 0.4);
    z-index: 1;
    opacity: 0.8;
    overflow: hidden;
  }
  
  /* Moon craters */
  .moon::before,
  .moon::after {
    content: '';
    position: absolute;
    background-color: rgba(200, 200, 150, 0.2);
    border-radius: 50%;
  }
  
  .moon::before {
    width: 15px;
    height: 15px;
    top: 15px;
    left: 15px;
  }
  
  .moon::after {
    width: 20px;
    height: 20px;
    bottom: 10px;
    right: 5px;
  }
  
  /* Additional moon crater */
  .moon-crater {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 10px;
    right: 20px;
    background-color: rgba(200, 200, 150, 0.2);
    border-radius: 50%;
  }
  
  /* Spooky clouds */
  .cloud {
    position: absolute;
    background-color: rgba(40, 40, 45, 0.7);
    border-radius: 50%;
    filter: blur(10px);
    opacity: 0.5;
    z-index: 0;
    pointer-events: none;
  }
  
  .cloud.lightning {
    animation: cloudDrift 120s linear infinite, cloudGlow 15s infinite;
  }
  
  .cloud.normal {
    animation: cloudDrift 180s linear infinite;
  }
  
  /* Fog particles */
  .fog-particle {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(8px);
    pointer-events: none;
    z-index: 1;
  }
  
  /* Controls area */
  .controls {
    z-index: 2;
    position: relative;
  }
  
  /* Multi-colored sequence effect animation */
  @keyframes multicolorPulse {
    0% { filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.8)) brightness(1.3); }
    20% { filter: drop-shadow(0 0 15px rgba(255, 165, 0, 0.8)) brightness(1.3); }
    40% { filter: drop-shadow(0 0 15px rgba(255, 255, 0, 0.8)) brightness(1.3); }
    60% { filter: drop-shadow(0 0 15px rgba(0, 255, 0, 0.8)) brightness(1.3); }
    80% { filter: drop-shadow(0 0 15px rgba(0, 0, 255, 0.8)) brightness(1.3); }
    100% { filter: drop-shadow(0 0 15px rgba(128, 0, 128, 0.8)) brightness(1.3); }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .tombstone {
      width: 75px;
      height: 110px;
      margin: 0 3px;
    }
    
    .tombstone svg {
      width: 75px;
      height: 110px;
    }
    
    .tombstone-container {
      max-width: 520px;
    }
  }
  
  @media (max-width: 600px) {
    .tombstone {
      width: 60px;
      height: 95px;
      margin: 0 2px;
    }
    
    .tombstone svg {
      width: 60px;
      height: 95px;
    }
    
    .tombstone svg text[font-size="40"] {
      font-size: 30px;
    }
    
    .tombstone svg text[font-size="16"] {
      font-size: 12px;
    }
    
    .tombstone-container {
      max-width: 400px;
    }
    
    .graveyard-container {
      padding: 15px 5px;
    }
  }
  
  @media (max-width: 400px) {
    .tombstone {
      width: 45px;
      height: 70px;
      margin: 0 1px;
    }
    
    .tombstone svg {
      width: 45px;
      height: 70px;
    }
    
    .tombstone svg text[font-size="40"] {
      font-size: 24px;
    }
    
    .tombstone svg text[font-size="16"] {
      font-size: 10px;
    }
    
    .tombstone-container {
      max-width: 300px;
    }
    
    .game-title {
      font-size: 24px;
    }
    
    #instructions, #score, #level {
      font-size: 14px;
    }
  }
</style>

<div class="graveyard-container">
  <!-- Eerie gradient overlay -->
  <div class="gradient-overlay"></div>
  <!-- Ground effect -->
  <div class="graveyard-ground"></div>
  
  <!-- Clouds -->
  <div class="cloud lightning" style="top: 10%; left: -20%; width: 200px; height: 80px; animation-delay: 0s;"></div>
  <div class="cloud normal" style="top: 5%; left: -30%; width: 250px; height: 90px; animation-delay: 30s;"></div>
  <div class="cloud lightning" style="top: 15%; left: -15%; width: 180px; height: 70px; animation-delay: 15s;"></div>
  <div class="cloud normal" style="top: 20%; left: -35%; width: 220px; height: 85px; animation-delay: 45s;"></div>
  
  <!-- Background silhouettes -->
  <div class="bg-tombstone" style="left: 5%; height: 100px; width: 50px; border-radius: 25px 25px 0 0;"></div>
  <div class="bg-tombstone" style="left: 10%; height: 70px; width: 40px; border-radius: 20px 20px 0 0;"></div>
  <div class="bg-tombstone" style="left: 18%; height: 85px; width: 45px; border-radius: 22px 22px 0 0;"></div>
  <div class="bg-tombstone" style="left: 25%; height: 60px; width: 30px; border-radius: 15px 15px 0 0;"></div>
  <div class="bg-tombstone" style="left: 85%; height: 90px; width: 40px; border-radius: 20px 20px 0 0;"></div>
  <div class="bg-tombstone" style="left: 92%; height: 65px; width: 35px; border-radius: 17px 17px 0 0;"></div>
  
  <!-- Background trees -->
  <div class="bg-tree" style="left: 30%; bottom: 0; width: 35px; height: 150px;">
    <div style="position: absolute; bottom: 150px; left: -40px; width: 115px; height: 100px; background-color: #0a0a0a; border-radius: 50% 50% 0 0;"></div>
  </div>
  <div class="bg-tree" style="right: 15%; bottom: 0; width: 30px; height: 180px;">
    <div style="position: absolute; bottom: 180px; left: -50px; width: 130px; height: 120px; background-color: #0a0a0a; border-radius: 50% 50% 0 0;"></div>
  </div>
  <div class="bg-tree" style="left: 60%; bottom: 0; width: 25px; height: 130px;">
    <div style="position: absolute; bottom: 130px; left: -35px; width: 95px; height: 90px; background-color: #0a0a0a; border-radius: 50% 50% 0 0;"></div>
  </div>
  
  <!-- Haunted house in background -->
  <div class="haunted-house">
    <div class="house-window" style="top: 50px; left: 25px;"></div>
    <div class="house-window" style="top: 50px; left: 50px;"></div>
    <div class="house-window" style="top: 50px; left: 75px;"></div>
    <div class="house-window" style="top: 10px; left: 22px;"></div>
  </div>
  
  <!-- Creepy decorative elements -->
  <div class="cobweb top-left"></div>
  <div class="cobweb top-right"></div>
  <div class="cobweb bottom-left"></div>
  <div class="cobweb bottom-right"></div>
  <div class="moon">
    <div class="moon-crater"></div>
  </div>
  
  <!-- Fog particles -->
  <div class="fog-particle" style="bottom: 20px; left: 10%; width: 40px; height: 40px; animation: fogFloat 15s infinite linear;"></div>
  <div class="fog-particle" style="bottom: 30px; left: 30%; width: 50px; height: 50px; animation: fogFloat 18s infinite linear; animation-delay: 2s;"></div>
  <div class="fog-particle" style="bottom: 15px; left: 50%; width: 45px; height: 45px; animation: fogFloat 20s infinite linear; animation-delay: 5s;"></div>
  <div class="fog-particle" style="bottom: 25px; left: 70%; width: 55px; height: 55px; animation: fogFloat 17s infinite linear; animation-delay: 7s;"></div>
  <div class="fog-particle" style="bottom: 10px; left: 90%; width: 35px; height: 35px; animation: fogFloat 16s infinite linear; animation-delay: 3s;"></div>
  
  <!-- Blood drips -->
  <div class="blood-drip" style="left: 20%; animation-delay: 0s;"></div>
  <div class="blood-drip" style="left: 30%; animation-delay: 3s;"></div>
  <div class="blood-drip" style="left: 80%; animation-delay: 6s;"></div>
  
  <!-- Blood spatters -->
  <div class="blood-splatter" style="top: 5%; right: 10%; transform: rotate(15deg) scale(0.7);"></div>
  <div class="blood-splatter" style="bottom: 15%; left: 5%; transform: rotate(-20deg) scale(0.5);"></div>

  <h1 class="game-title">Haunted Graveyard Memory</h1>
  
  <div class="game-info">
    <p id="game-instructions">Follow the unholy sequence of glowing tombstones... if you dare!</p>
    <div class="score-display">
      <p>Level: <span id="level">1</span></p>
      <p>Score: <span id="score">0</span></p>
    </div>
  </div>
  
  <div class="tombstone-container">
    <div class="tombstone" id="tombstone1">
      <svg width="85" height="135" viewBox="0 0 110 150">
        <path d="M10,60 Q10,30 55,30 Q100,30 100,60 L100,120 Q100,130 90,130 L20,130 Q10,130 10,120 Z" fill="#777" stroke="#333" stroke-width="3"/>
        <text x="55" y="85" font-family="'Eater', cursive" font-size="40" fill="#111" text-anchor="middle">1</text>
        <text x="55" y="45" font-family="serif" font-size="16" fill="#111" text-anchor="middle">R.I.P.</text>
      </svg>
    </div>
    <div class="tombstone" id="tombstone2">
      <svg width="85" height="135" viewBox="0 0 110 150">
        <path d="M15,50 L15,120 Q15,130 25,130 L85,130 Q95,130 95,120 L95,50 L70,35 L55,20 L40,35 Z" fill="#777" stroke="#333" stroke-width="3"/>
        <text x="55" y="85" font-family="'Eater', cursive" font-size="40" fill="#111" text-anchor="middle">2</text>
        <text x="55" y="45" font-family="serif" font-size="16" fill="#111" text-anchor="middle">R.I.P.</text>
      </svg>
    </div>
    <div class="tombstone" id="tombstone3">
      <svg width="85" height="135" viewBox="0 0 110 150">
        <path d="M20,40 Q20,30 55,30 Q90,30 90,40 L90,120 L20,120 Z" fill="#777" stroke="#333" stroke-width="3"/>
        <text x="55" y="85" font-family="'Eater', cursive" font-size="40" fill="#111" text-anchor="middle">3</text>
        <text x="55" y="45" font-family="serif" font-size="16" fill="#111" text-anchor="middle">R.I.P.</text>
      </svg>
    </div>
    <div class="tombstone" id="tombstone4">
      <svg width="85" height="135" viewBox="0 0 110 150">
        <path d="M10,55 Q25,25 55,30 Q85,25 100,55 L90,120 L20,120 Z" fill="#777" stroke="#333" stroke-width="3"/>
        <text x="55" y="85" font-family="'Eater', cursive" font-size="40" fill="#111" text-anchor="middle">4</text>
        <text x="55" y="45" font-family="serif" font-size="16" fill="#111" text-anchor="middle">R.I.P.</text>
      </svg>
    </div>
    <div class="tombstone" id="tombstone5">
      <svg width="85" height="135" viewBox="0 0 110 150">
        <path d="M30,40 L55,20 L80,40 L80,120 L30,120 Z" fill="#777" stroke="#333" stroke-width="3"/>
        <text x="55" y="85" font-family="'Eater', cursive" font-size="40" fill="#111" text-anchor="middle">5</text>
        <text x="55" y="45" font-family="serif" font-size="16" fill="#111" text-anchor="middle">R.I.P.</text>
      </svg>
    </div>
    <div class="tombstone" id="tombstone6">
      <svg width="85" height="135" viewBox="0 0 110 150">
        <path d="M15,60 C15,40 35,25 55,25 C75,25 95,40 95,60 L85,120 L25,120 Z" fill="#777" stroke="#333" stroke-width="3"/>
        <text x="55" y="85" font-family="'Eater', cursive" font-size="40" fill="#111" text-anchor="middle">6</text>
        <text x="55" y="45" font-family="serif" font-size="16" fill="#111" text-anchor="middle">R.I.P.</text>
      </svg>
    </div>
  </div>
  
  <div class="controls">
    <button class="button" id="start-btn">Begin Nightmare</button>
    <button class="button" id="reset-btn">Resurrect</button>
  </div>
  
  <div class="message" id="message"></div>
  
  <!-- Spooky animated elements -->
  <div class="ghost" style="top: 10%; left: 5%; animation-delay: 0s;"></div>
  <div class="ghost" style="top: 60%; left: 80%; animation-delay: 2s;"></div>
  <div class="ghost" style="top: 30%; left: 85%; animation-delay: 5s; transform: scale(0.7);"></div>
  
  <div class="bat" style="top: 15%; left: 30%; animation-delay: 1s;"></div>
  <div class="bat" style="top: 25%; right: 20%; animation-delay: 3s;"></div>
  <div class="bat" style="top: 45%; right: 40%; animation-delay: 7s;"></div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Game variables
    let sequence = [];
    let playerSequence = [];
    let level = 1;
    let score = 0;
    let isPlaying = false;
    let canPlayerClick = false;
    let highScore = localStorage.getItem('graveyardHighScore') || 0;
    
    // DOM Elements
    const tombstones = document.querySelectorAll('.tombstone');
    const startButton = document.getElementById('start-btn');
    const resetButton = document.getElementById('reset-btn');
    const levelDisplay = document.getElementById('level');
    const scoreDisplay = document.getElementById('score');
    const messageDisplay = document.getElementById('message');
    const instructions = document.getElementById('game-instructions');
    const container = document.querySelector('.graveyard-container');
    
    // Ambient sound effects periodically
    setInterval(() => {
      if (Math.random() > 0.9) {
        // Occasional spooky sound without visual effect
        if (Math.random() > 0.5) {
          playSound(startSound, { volume: 0.3, playbackRate: 0.7 });
        } else {
          // Sometimes play a distant echo of the click sound
          playSound(clickSound, { volume: 0.2, playbackRate: 0.5 });
        }
      }
    }, 15000);
    
    // Sound effects - much creepier now
    const glowSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387'); // Eerie whoosh
    const correctSound = new Audio('https://www.fesliyanstudios.com/play-mp3/2883'); // Ghost whisper
    const wrongSound = new Audio('https://www.fesliyanstudios.com/play-mp3/2225'); // Scream
    const levelUpSound = new Audio('https://www.fesliyanstudios.com/play-mp3/6701'); // Spooky laugh
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/564'); // Eerie bone click
    const startSound = new Audio('https://www.fesliyanstudios.com/play-mp3/443'); // Church bell
    const thunderSound = new Audio('https://www.fesliyanstudios.com/play-mp3/682'); // Thunder
    
    // Spooky ambient background sound
    const bgSound = new Audio('https://www.fesliyanstudios.com/play-mp3/451'); // Cemetery ambience
    bgSound.loop = true;
    bgSound.volume = 0.4;
    
    // Function to play sound with error handling
    function playSound(sound, options = {}) {
      const { volume = 1, playbackRate = 1, delay = 0 } = options;
      sound.currentTime = 0;
      
      try {
        if (sound.volume !== undefined) sound.volume = volume;
        if (sound.playbackRate !== undefined) sound.playbackRate = playbackRate;
        
        if (delay > 0) {
          setTimeout(() => {
            sound.play().catch(e => console.log("Audio play error:", e));
          }, delay);
        } else {
          sound.play().catch(e => console.log("Audio play error:", e));
        }
      } catch (e) {
        console.log("Audio error:", e);
      }
    }
    
    // Create echo effect for a sound (useful for tomb clicks)
    function playWithEcho(sound, tombstoneNumber) {
      // Play main sound
      playSound(sound, { volume: 0.7, playbackRate: 0.9 + (tombstoneNumber * 0.05) });
      
      // Play echo with delay, lower volume, and slight pitch change
      playSound(sound, { 
        volume: 0.3, 
        playbackRate: 0.85 + (tombstoneNumber * 0.03), 
        delay: 100 
      });
      
      // Play second echo with more delay, even lower volume
      playSound(sound, { 
        volume: 0.15, 
        playbackRate: 0.8 + (tombstoneNumber * 0.02), 
        delay: 200 
      });
    }
    
    // Start button event listener
    startButton.addEventListener('click', startGame);
    
    // Reset button event listener
    resetButton.addEventListener('click', resetGame);
    
    // Add click listeners to all tombstones
    tombstones.forEach((tombstone, index) => {
      tombstone.addEventListener('click', () => {
        if (canPlayerClick) {
          playerClick(index + 1);
        }
      });
    });
    
    // Function to start the game with creepy intro
    function startGame() {
      resetGame();
      
      // Subtle start animation
      container.style.animation = 'flicker 0.5s';
      setTimeout(() => { container.style.animation = 'atmosphereShift 20s infinite ease-in-out'; }, 500);
      
      // Play start sound with enhanced settings
      playSound(startSound, { volume: 0.8, playbackRate: 0.95 });
      
      // Show creepy start message
      showMessage("The dead are awakening...", '#ff9d9d');
      setTimeout(() => {
        hideMessage();
        isPlaying = true;
        bgSound.play();
        nextLevel();
      }, 2000);
    }
    
    // Function to reset the game
    function resetGame() {
      sequence = [];
      playerSequence = [];
      level = 1;
      score = 0;
      isPlaying = false;
      canPlayerClick = false;
      levelDisplay.textContent = level;
      scoreDisplay.textContent = score;
      hideMessage();
      instructions.textContent = "Watch the tombstones glow, then click them in the same order... if you dare!";
      
      // Add random tombstone wobble effect
      tombstones.forEach(tombstone => {
        if (Math.random() > 0.7) {
          tombstone.style.animation = 'pulse 2s infinite';
          setTimeout(() => { tombstone.style.animation = ''; }, Math.random() * 3000 + 1000);
        }
      });
    }
    
    // Function to proceed to the next level
    function nextLevel() {
      playerSequence = [];
      level++;
      levelDisplay.textContent = level;
      
      // Spookier messages as levels increase
      if (level <= 3) {
        instructions.textContent = "Watch carefully...";
      } else if (level <= 6) {
        instructions.textContent = "The spirits are restless...";
      } else if (level <= 9) {
        instructions.textContent = "The dead don't forgive mistakes...";
      } else {
        instructions.textContent = "Even the bravest fear what comes next...";
      }
      
      // Add a new random tombstone to the sequence
      addToSequence();
      
      // Make game progressively faster and more challenging
      const delay = Math.max(800, 1200 - (level * 50));
      
      // Play the sequence after a short delay
      setTimeout(() => {
        playSequence();
      }, delay);
      
      // Add random spooky effect
      if (Math.random() > 0.6) {
        const randomGhost = document.createElement('div');
        randomGhost.className = 'ghost';
        randomGhost.style.top = Math.random() * 80 + 10 + '%';
        randomGhost.style.left = Math.random() * 80 + 10 + '%';
        randomGhost.style.opacity = '0';
        container.appendChild(randomGhost);
        
        setTimeout(() => {
          randomGhost.style.opacity = '0.8';
          randomGhost.style.transition = 'opacity 0.5s';
          
          setTimeout(() => {
            randomGhost.style.opacity = '0';
            setTimeout(() => {
              if (randomGhost.parentNode) {
                randomGhost.parentNode.removeChild(randomGhost);
              }
            }, 500);
          }, 1000);
        }, Math.random() * 3000);
      }
    }
    
    // Function to add a new step to the sequence
    function addToSequence() {
      const random = Math.floor(Math.random() * 6) + 1;
      sequence.push(random);
    }
    
    // Function to play the current sequence
    function playSequence() {
      canPlayerClick = false;
      let i = 0;
      
      // Apply multi-color effect to the entire container when sequence is being shown
      container.style.animation = 'multicolorPulse 2s infinite alternate';
      
      // Adjust timing based on level - gets faster as level increases
      const intervalTime = Math.max(400, 1000 - (level * 30));
      
      const intervalId = setInterval(() => {
        if (i >= sequence.length) {
          clearInterval(intervalId);
          instructions.textContent = "Your turn! Repeat the sequence.";
          container.style.animation = 'atmosphereShift 20s infinite ease-in-out';
          canPlayerClick = true;
          return;
        }
        
        const tombstoneNumber = sequence[i];
        glowTombstone(tombstoneNumber);
        i++;
      }, intervalTime);
    }
    
    // Function to handle player's click
    function playerClick(tombstoneNumber) {
      if (!canPlayerClick) return;
      
      playerSequence.push(tombstoneNumber);
      glowTombstone(tombstoneNumber);
      
      // Play click sound with echo effect for a more atmospheric experience
      playWithEcho(clickSound, tombstoneNumber);
      
      // Add shake effect to simulate disturbance
      const intensity = Math.min(5, level);
      container.style.animation = `shake 0.2s ${intensity}`;
      setTimeout(() => { 
        container.style.animation = 'atmosphereShift 20s infinite ease-in-out'; 
      }, 200);
      
      // Check if the player's click matches the sequence
      const currentIndex = playerSequence.length - 1;
      
      if (playerSequence[currentIndex] !== sequence[currentIndex]) {
        // Wrong sequence - terrifying response
        playSound(wrongSound, { volume: 0.85, playbackRate: 0.9 });
        
        // Shake screen violently
        container.style.animation = 'shake 0.5s infinite';
        setTimeout(() => { 
          container.style.animation = 'atmosphereShift 20s infinite ease-in-out'; 
        }, 500);
        
        // Create flash effect
        const flash = document.createElement('div');
        flash.style.position = 'absolute';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.backgroundColor = '#a00';
        flash.style.opacity = '0.3';
        flash.style.zIndex = '5';
        container.appendChild(flash);
        
        setTimeout(() => {
          if (flash.parentNode) {
            flash.parentNode.removeChild(flash);
          }
        }, 100);
        
        gameOver();
        return;
      }
      
      playSound(correctSound, { volume: 0.7 });
      
      // Check if player completed the current sequence
      if (playerSequence.length === sequence.length) {
        // Player completed the sequence correctly
        score += level * 10;
        scoreDisplay.textContent = score;
        canPlayerClick = false;
        
        // Update high score
        if (score > highScore) {
          highScore = score;
          localStorage.setItem('graveyardHighScore', highScore);
        }
        
        playSound(levelUpSound, { volume: 0.8 });
        
        // Show scary success messages
        const messages = [
          "The spirits are impressed...",
          "You've pleased the dead... for now.",
          "Your soul is safe... for this level.",
          "The graveyard accepts your offering.",
          "The dead permit you to continue."
        ];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        showMessage(`${randomMsg}<br>Level ${level} completed!<br>+${level * 10} points`, '#a0ff9d');
        
        setTimeout(() => {
          hideMessage();
          nextLevel();
        }, 2000);
      }
    }
    
    // Function to make a tombstone glow with enhanced effects
    function glowTombstone(number) {
      const tombstone = document.getElementById(`tombstone${number}`);
      tombstone.classList.add('active');
      
      // Different colors for each tombstone
      const tombstoneColors = {
        1: '#ff0000', // Red
        2: '#9900ff', // Purple
        3: '#00ccff', // Blue
        4: '#ff9900', // Orange
        5: '#00ff00', // Green
        6: '#ffff00'  // Yellow
      };
      
      // Create pulsing SVG effect
      const svgElement = tombstone.querySelector('svg');
      if (svgElement) {
        // Create filter if doesn't exist
        let filter = document.getElementById(`glow-filter-${number}`);
        if (!filter) {
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.style.position = "absolute";
          svg.style.width = "0";
          svg.style.height = "0";
          svg.style.zIndex = "-1";
          svg.setAttribute("aria-hidden", "true");
          
          const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
          
          filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
          filter.setAttribute("id", `glow-filter-${number}`);
          filter.setAttribute("x", "-50%");
          filter.setAttribute("y", "-50%");
          filter.setAttribute("width", "200%");
          filter.setAttribute("height", "200%");
          
          const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
          feGaussianBlur.setAttribute("stdDeviation", "10");
          feGaussianBlur.setAttribute("result", "blur");
          
          const feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
          feFlood.setAttribute("flood-color", tombstoneColors[number]);
          feFlood.setAttribute("result", "color");
          
          const feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
          feComposite.setAttribute("operator", "in");
          feComposite.setAttribute("in", "color");
          feComposite.setAttribute("in2", "blur");
          feComposite.setAttribute("result", "glow");
          
          const feMerge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
          
          const feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
          feMergeNode1.setAttribute("in", "glow");
          
          const feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
          feMergeNode2.setAttribute("in", "SourceGraphic");
          
          feMerge.appendChild(feMergeNode1);
          feMerge.appendChild(feMergeNode2);
          
          filter.appendChild(feGaussianBlur);
          filter.appendChild(feFlood);
          filter.appendChild(feComposite);
          filter.appendChild(feMerge);
          
          defs.appendChild(filter);
          svg.appendChild(defs);
          
          document.body.appendChild(svg);
        }
        
        // Apply the filter
        svgElement.style.filter = `url(#glow-filter-${number})`;
      }
      
      // Play glow sound with custom settings based on tombstone number
      const soundPitch = 0.8 + (number * 0.1); // Different pitch for each tombstone
      playSound(glowSound, { 
        playbackRate: soundPitch,
        volume: 0.75
      });
      
      setTimeout(() => {
        tombstone.classList.remove('active');
        if (svgElement) {
          svgElement.style.filter = '';
        }
      }, 500);
    }
    
    // Function for game over with terrifying effects
    function gameOver() {
      isPlaying = false;
      canPlayerClick = false;
      
      // Dramatic effects
      tombstones.forEach(tombstone => {
        tombstone.style.animation = 'shake 0.5s infinite';
      });
      
      setTimeout(() => {
        tombstones.forEach(tombstone => {
          tombstone.style.animation = '';
        });
      }, 500);
      
      // Create creepy game over message
      const gameOverMessages = [
        "The dead have claimed your soul!",
        "Your memory failed you... eternally.",
        "The graveyard reclaims another victim!",
        "You disturbed the wrong spirits...",
        "Death comes for the forgetful..."
      ];
      
      const randomMsg = gameOverMessages[Math.floor(Math.random() * gameOverMessages.length)];
      const highScoreText = score > 0 && score >= highScore ? 
        `<br>New High Score: ${score}!` : 
        `<br>Your score: ${score}<br>High Score: ${highScore}`;
      
      showMessage(`${randomMsg}${highScoreText}`, '#ff5555');
      
      // Stop ambient sounds
      bgSound.pause();
      bgSound.currentTime = 0;
    }
    
    // Function to show message with typewriter effect
    function showMessage(text, color) {
      messageDisplay.innerHTML = '';
      messageDisplay.style.color = color || '#ffffff';
      messageDisplay.style.display = 'block';
      
      // Add typewriter effect for text
      const htmlContent = text;
      if (text.includes('<br>')) {
        // If HTML content, just set it
        messageDisplay.innerHTML = htmlContent;
      } else {
        // Use typewriter effect for simple text
        let i = 0;
        const speed = 30;
        function typeWriter() {
          if (i < text.length) {
            messageDisplay.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
        typeWriter();
      }
    }
    
    // Function to hide message
    function hideMessage() {
      messageDisplay.style.display = 'none';
    }
    
    // Initialize the game
    resetGame();
  });
</script>