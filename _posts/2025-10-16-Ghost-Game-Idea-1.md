---
layout: post
title: "Ghost Game: The Haunting of Love Lost"
date: 2025-10-16
author: Precia Verma
description: "A psychological horror adventure game about love, guilt, and the ghosts that haunt us"
comments: true
permalink: /student/ghost-game-idea-1
custom_css:
  - horror_theme
  
---
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Playfair+Display:wght@400;700&family=Creepster&family=IM+Fell+English+SC&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ '/assets/css/horror_theme.css' | relative_url }}">

<!-- Page-specific styles -->
<style>
  html, body {
    height: 100% !important;
    min-height: 100vh !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  html {
    background-color: #0a0000 !important;
    background-image: url('https://www.transparenttextures.com/patterns/black-paper.png') !important;
    background-attachment: fixed !important;
    background-size: auto !important;
  }
  
  /* Custom Ghost Game logo styling */
  .site-header .wrapper .site-title img {
    height: 30px !important;
    filter: brightness(0.8) invert(0.2) sepia(0.3) hue-rotate(320deg) !important;
    transition: all 0.5s ease !important;
  }
  
  .site-header .wrapper .site-title img:hover {
    filter: brightness(1) invert(0.3) sepia(0.5) hue-rotate(350deg) drop-shadow(0 0 5px rgba(200,0,0,0.5)) !important;
    transform: scale(1.05) !important;
  }
  
  body {
    background-color: transparent !important;
    color: #b5a396 !important;
    font-family: 'Crimson Text', serif !important;
    line-height: 1.7 !important;
    text-shadow: 0 0 1px rgba(255,255,255,0.1) !important;
    position: relative !important;
  }
  
  /* Apply background to all possible containers */
  .container, .container-lg, .page-content, main, .wrapper, .post, article {
    background-color: transparent !important;
  }
  
  /* Restore header styling */
  .site-header {
    background-color: inherit !important;
    min-height: initial !important;
    border: none !important;
  }
  
  h1, h2, h3 {
    font-family: 'IM Fell English SC', serif !important;
    letter-spacing: 1px !important;
  }
  
  p {
    margin-bottom: 1.5em !important;
  }
  
  .spooky-divider {
    text-align: center;
    margin: 30px 0;
    color: #700000;
    text-shadow: 0 0 5px rgba(120,0,0,0.3);
    letter-spacing: 8px;
    position: relative;
  }
  
  .spooky-divider:before,
  .spooky-divider:after {
    content: "";
    display: inline-block;
    height: 1px;
    width: 60px;
    background: linear-gradient(to right, transparent, #500000, transparent);
    vertical-align: middle;
    margin: 0 10px;
  }
  
  .blood-drip {
    position: absolute;
    width: 3px;
    background-color: #700000;
    border-radius: 50% 50% 45% 45%;
    opacity: 0;
    animation: drip 10s infinite;
    box-shadow: 0 0 5px rgba(120,0,0,0.5);
  }
  
  @keyframes drip {
    0% { height: 0; top: 0; opacity: 0; }
    30% { opacity: 0.9; }
    100% { height: 40px; top: 40px; opacity: 0; }
  }
  
  .fog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://cdn.pixabay.com/photo/2018/10/19/12/14/fog-3758087_1280.jpg');
    background-size: cover;
    opacity: 0.05;
    pointer-events: none;
    z-index: -1;
    animation: fog-move 120s infinite alternate linear;
  }
  
  @keyframes fog-move {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }
  
  /* Flying Ghost Styles */
  .ghost {
    position: fixed;
    width: 30px;
    height: 35px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.15;
    filter: drop-shadow(0 0 5px rgba(255,255,255,0.7));
    z-index: 5;
    pointer-events: none;
    animation: ghost-float 30s infinite linear;
    transform-origin: center center;
  }
  
  .ghost:nth-child(odd) {
    animation-duration: 45s;
    width: 40px;
    height: 45px;
    filter: drop-shadow(0 0 5px rgba(200,200,255,0.8));
  }
  
  .ghost:nth-child(3n) {
    animation-duration: 60s;
    width: 25px;
    height: 30px;
    filter: drop-shadow(0 0 5px rgba(255,200,200,0.6));
    animation-direction: reverse;
  }
  
  .ghost:hover {
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  
  /* Smoke effect for cursor */
  .smoke-particle {
    position: fixed;
    width: 7px;
    height: 7px;
    pointer-events: none;
    background-color: rgba(150, 150, 150, 0.5);
    border-radius: 50%;
    mix-blend-mode: screen;
    filter: blur(3px);
    z-index: 2000;
    transform-origin: center;
    animation: smoke-fade 2s forwards ease-out;
  }
  
  @keyframes smoke-fade {
    0% {
      opacity: 0;
      transform: scale(0.3) rotate(0deg);
    }
    15% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.2;
      transform: scale(1.5) rotate(90deg);
    }
    100% {
      opacity: 0;
      transform: scale(2.5) rotate(180deg);
    }
  }
  
  /* Mansion Map styles */
  .map-hotspot {
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(120, 0, 0, 0.0);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  
  .map-hotspot:hover {
    background-color: rgba(120, 0, 0, 0.15);
    border: 1px solid rgba(120, 0, 0, 0.3);
    box-shadow: inset 0 0 20px rgba(120, 0, 0, 0.1), 0 0 10px rgba(120, 0, 0, 0.2);
  }
  
  .map-hotspot::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(120, 0, 0, 0.2) 0%, rgba(120, 0, 0, 0) 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  .map-hotspot:hover::before {
    opacity: 1;
  }
  
  #room-info {
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-out;
    border-radius: 4px;
    transform: translateY(10px);
  }
  
  @keyframes map-pulse {
    0%, 100% { box-shadow: 0 0 8px rgba(120, 0, 0, 0.3) inset; }
    50% { box-shadow: 0 0 15px rgba(120, 0, 0, 0.6) inset; }
  }
  
  @keyframes ghost-float {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    10% {
      transform: translate(100px, -50px) rotate(20deg) scale(0.9);
    }
    20% {
      transform: translate(200px, 100px) rotate(-10deg) scale(1.1);
    }
    30% {
      transform: translate(100px, 200px) rotate(5deg) scale(1);
    }
    40% {
      transform: translate(-100px, 150px) rotate(-20deg) scale(0.9);
    }
    50% {
      transform: translate(-200px, 0px) rotate(0deg) scale(1.05);
    }
    60% {
      transform: translate(-150px, -150px) rotate(15deg) scale(1);
    }
    70% {
      transform: translate(0px, -200px) rotate(-15deg) scale(0.95);
    }
    80% {
      transform: translate(150px, -100px) rotate(5deg) scale(1.1);
    }
    90% {
      transform: translate(100px, 50px) rotate(-5deg) scale(1);
    }
    100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
  }
</style>

<!-- Fog overlay for the entire page -->
<div class="fog-overlay"></div>

<!-- Random blood drips -->
<div class="blood-drip" style="left: 20%; animation-delay: 3s;"></div>
<div class="blood-drip" style="left: 45%; animation-delay: 7s;"></div>
<div class="blood-drip" style="left: 75%; animation-delay: 5s;"></div>
<div class="blood-drip" style="left: 90%; animation-delay: 9s;"></div>

<!-- Flying Ghosts -->
<div class="ghost" style="left: 10%; top: 15%; animation-delay: 0s;"></div>
<div class="ghost" style="left: 30%; top: 40%; animation-delay: 5s;"></div>
<div class="ghost" style="left: 70%; top: 20%; animation-delay: 2s;"></div>
<div class="ghost" style="left: 85%; top: 60%; animation-delay: 8s;"></div>
<div class="ghost" style="left: 20%; top: 70%; animation-delay: 12s;"></div>
<div class="ghost" style="left: 55%; top: 30%; animation-delay: 15s;"></div>
<div class="ghost" style="left: 45%; top: 85%; animation-delay: 7s;"></div>
<div class="ghost" style="left: 90%; top: 45%; animation-delay: 10s;"></div>

<!-- Loading overlay -->
<div id="loading-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; z-index: 9999; display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <div style="font-family: 'Creepster', cursive; color: #700000; font-size: 3em; margin-bottom: 30px; letter-spacing: 3px; text-shadow: 0 0 8px rgba(120,0,0,0.5);">ENTERING THE MANSION</div>
  <div style="margin-bottom: 20px; font-family: 'IM Fell English SC', serif; color: #5a3a3a; font-size: 0.9em; letter-spacing: 2px;">abandon all hope...</div>
  <div class="loading-container" style="width: 250px; height: 8px; background-color: #1a0000; border-radius: 5px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.7), inset 0 0 5px rgba(0,0,0,0.5);">
    <div id="loading-bar" style="width: 0%; height: 100%; background: linear-gradient(to right, #4e0000, #700000, #4e0000); transition: width 0.5s;"></div>
  </div>
  <div id="loading-message" style="margin-top: 15px; font-family: 'Crimson Text', serif; color: #4a3a3a; font-style: italic; opacity: 0.8;">The mansion awaits...</div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var loadingBar = document.getElementById('loading-bar');
    var loadingOverlay = document.getElementById('loading-overlay');
    var loadingMessage = document.getElementById('loading-message');
    var progress = 0;
    
    // Creepy loading messages
    var messages = [
      "The mansion awaits...",
      "Shadows gathering...",
      "Whispers in the walls...",
      "The ghosts are stirring...",
      "Memories awakening...",
      "Darkness descending...",
      "Sins remembered...",
      "Doors unlocking...",
      "Secrets revealing...",
      "Guilt materializing..."
    ];
    
    // Change message randomly
    var messageInterval = setInterval(function() {
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      loadingMessage.style.opacity = '0';
      setTimeout(function() {
        loadingMessage.textContent = randomMessage;
        loadingMessage.style.opacity = '0.8';
      }, 500);
    }, 2000);
    
    // Loading progress
    var interval = setInterval(function() {
      progress += Math.random() * 8;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        clearInterval(messageInterval);
        loadingMessage.textContent = "Welcome to your nightmare...";
        setTimeout(function() {
          loadingOverlay.style.opacity = '0';
          loadingOverlay.style.transition = 'opacity 1.5s';
          setTimeout(function() {
            loadingOverlay.style.display = 'none';
          }, 1500);
        }, 800);
      }
      loadingBar.style.width = progress + '%';
    }, 220);
  });
</script>

<div style="text-align: center; margin-bottom: 50px; position: relative; padding: 30px 0;">
  <div style="position: absolute; width: 100%; height: 100%; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_Obez2eWBK972heq40EeH1E7T65LTBOZhw&s'); background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0.07; z-index: -1;"></div>
  
  <!-- Title with flickering effect -->
  <div class="title-container" style="position: relative; display: inline-block; margin-bottom: 15px;">
    <h1 style="font-family: 'Creepster', cursive; font-size: 4.5em; margin-bottom: 5px; text-shadow: 2px 2px 8px #700000, 0 0 15px rgba(0,0,0,0.8); color: #900000; letter-spacing: 2px; transform: rotate(-1deg);">Ghost Game</h1>
    <h2 style="font-family: 'IM Fell English SC', serif; font-size: 1.8em; margin-top: 0; color: #a07a6c; text-shadow: 1px 1px 3px rgba(0,0,0,0.9); letter-spacing: 3px; margin-bottom: 0;">The Haunting of Love Lost</h2>
    
    <!-- Flicker animation for the title -->
    <div class="flicker-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); pointer-events: none; mix-blend-mode: multiply; animation: flicker-effect 8s infinite;"></div>
  </div>
  
  <p style="font-style: italic; color: #700000; margin-top: 15px; font-size: 1.2em; font-family: 'Crimson Text', serif; max-width: 600px; margin-left: auto; margin-right: auto; text-shadow: 0 0 10px rgba(0,0,0,0.7);">Some nightmares don't end when you wake up...</p>
  
  <!-- Decorative frame around the title section -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid rgba(100,0,0,0.2); border-left: none; border-right: none; pointer-events: none;"></div>
  <div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 80%; height: 1px; background: linear-gradient(to right, transparent, rgba(100,0,0,0.3), transparent);"></div>
  <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); width: 80%; height: 1px; background: linear-gradient(to right, transparent, rgba(100,0,0,0.3), transparent);"></div>
  
  <!-- Corner decorations -->
  <div style="position: absolute; top: 0; left: 0; width: 30px; height: 30px; border-top: 2px solid rgba(100,0,0,0.3); border-left: 2px solid rgba(100,0,0,0.3);"></div>
  <div style="position: absolute; top: 0; right: 0; width: 30px; height: 30px; border-top: 2px solid rgba(100,0,0,0.3); border-right: 2px solid rgba(100,0,0,0.3);"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 30px; height: 30px; border-bottom: 2px solid rgba(100,0,0,0.3); border-left: 2px solid rgba(100,0,0,0.3);"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 30px; height: 30px; border-bottom: 2px solid rgba(100,0,0,0.3); border-right: 2px solid rgba(100,0,0,0.3);"></div>
  
  <!-- Audio elements for a richer horror experience -->
  <audio id="horror-ambience" loop preload="auto">
    <source src="/assets/audio/intense-horror-music-01-14890.mp3" type="audio/mpeg">
    <source src="../assets/audio/intense-horror-music-01-14890.mp3" type="audio/mpeg">
  </audio>
  <audio id="creepy-effect" preload="auto">
    <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_25ccccf8e6.mp3?filename=ghost-whisper-14930.mp3" type="audio/mpeg">
  </audio>
  
  <div class="audio-controls" style="margin-top: 20px; position: relative;">
    <button id="sound-toggle" style="background-color: #2a0a0a; color: #700000; border: 1px solid #4e0000; padding: 8px 20px; margin-top: 20px; cursor: pointer; font-family: 'IM Fell English SC', serif; letter-spacing: 1px; transition: all 0.3s ease; position: relative; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.7);">
      <span style="position: relative; z-index: 2;">🔊 Enable Haunting Sounds</span>
      <div class="button-overlay" style="position: absolute; top: 0; left: -100%; width: 200%; height: 100%; background: linear-gradient(to right, transparent, rgba(120,0,0,0.2), transparent); transition: transform 0.5s ease; transform: skewX(-20deg); z-index: 1;"></div>
    </button>
    
    <!-- Random whispers effect -->
    <div class="random-whisper" style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 0.8em; color: #4a3a3a; font-style: italic; opacity: 0; transition: opacity 0.5s ease;">Do you hear them?</div>
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var soundToggle = document.getElementById('sound-toggle');
      var audio = document.getElementById('horror-ambience');
      var creepyEffect = document.getElementById('creepy-effect');
      var buttonOverlay = document.querySelector('.button-overlay');
      var randomWhisper = document.querySelector('.random-whisper');
      
      // Whisper messages
      var whispers = [
        "Do you hear them?",
        "She's watching you...",
        "Turn back now...",
        "They know you're here...",
        "You can't escape...",
        "Help me...",
        "Never sleep again..."
      ];
      
      // Random whisper effect
      function showRandomWhisper() {
        if (Math.random() > 0.7 && !audio.paused) {
          randomWhisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];
          randomWhisper.style.opacity = "0.7";
          
          // Play a creepy whisper sound with low volume
          if (Math.random() > 0.5) {
            creepyEffect.volume = 0.1;
            creepyEffect.play();
          }
          
          setTimeout(function() {
            randomWhisper.style.opacity = "0";
          }, 3000);
        }
      }
      
      // Start whisper interval when audio is playing
      var whisperInterval;
      
      soundToggle.addEventListener('click', function() {
        if (audio.paused) {
          audio.volume = 0.2;  // Set a reasonable volume
          audio.play();
          this.querySelector('span').textContent = '🔇 Disable Haunting Sounds';
          
          // Animate the button
          buttonOverlay.style.transform = "translateX(100%) skewX(-20deg)";
          
          // Start random whispers
          whisperInterval = setInterval(showRandomWhisper, 15000);
          
        } else {
          audio.pause();
          creepyEffect.pause();
          this.querySelector('span').textContent = '🔊 Enable Haunting Sounds';
          
          // Animate the button
          buttonOverlay.style.transform = "translateX(-100%) skewX(-20deg)";
          
          // Stop random whispers
          clearInterval(whisperInterval);
          randomWhisper.style.opacity = "0";
        }
      });
      
      // Button hover effect
      soundToggle.addEventListener('mouseover', function() {
        buttonOverlay.style.transform = "translateX(0%) skewX(-20deg)";
      });
      
      soundToggle.addEventListener('mouseout', function() {
        if (audio.paused) {
          buttonOverlay.style.transform = "translateX(-100%) skewX(-20deg)";
        } else {
          buttonOverlay.style.transform = "translateX(100%) skewX(-20deg)";
        }
      });
    });
  } else {
    console.error("No hotspots found in the mansion map!");
  }
  </script>
</div>

<div style="position: relative; margin-bottom: 40px;">
  <h2 style="font-size: 2em; border-bottom: 1px solid #4e0000; padding-bottom: 10px;">🏚️ Game Concept & Narrative</h2>
  <div style="position: absolute; right: 20px; top: -10px; opacity: 0.3;">
    <img src="https://www.citypng.com/public/uploads/preview/halloween-flying-ghost-silhouette-black-icon-png-701751694532168uawrn4mgfq.png" width="80" alt="ghost silhouette" style="filter: invert(1);">
  </div>
</div>

<div style="background-color: rgba(25, 0, 0, 0.4); padding: 25px; border-left: 3px solid #700000; border: 1px solid rgba(70, 0, 0, 0.3); box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); position: relative; margin-bottom: 20px;">
  <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
  
  <p>Step into a gothic mansion shrouded in fog, regret, and supernatural mystery. In this psychological horror adventure, you play as <strong>Earnest</strong>—a man tormented by guilt, returning to the ruins of his past love. The game unfolds in three acts, blending puzzle-solving, exploration, and emotional storytelling.</p>
</div>

<div class="spooky-divider">⚱️ ⚰️ ⚱️</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">🌙 Backstory</h3>
</div>

<div style="background-color: rgba(25, 0, 0, 0.4); padding: 25px; border-left: 3px solid #700000; border: 1px solid rgba(70, 0, 0, 0.3); box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); position: relative; margin-bottom: 20px;">
  <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
  
  <p>In a crumbling gothic mansion shrouded by fog and regret, a man flees in the dead of night for reasons even he can't fully explain. He leaves behind his greatest love — a woman whose heart once mirrored his own. Years later, guilt drags him back to the decaying halls of the estate… only to discover the horrifying truth: she's dead.</p>
</div>

<div class="spooky-divider">💀 ⚡ 💀</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">👻 Act 1: The Whispering Ghost</h3>
</div>

<div style="background-color: rgba(25, 0, 0, 0.4); padding: 25px; border-left: 3px solid #700000; border: 1px solid rgba(70, 0, 0, 0.3); box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); position: relative; margin-bottom: 20px;">
  <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
  
  <p>One stormy night, her ghost appears before him — sorrowful yet strangely calm. She tells him that her spirit is trapped, unable to rest. If he can locate her scattered bones hidden across the mansion's cursed grounds, he can perform a ritual to bring her back to life. Desperate and haunted, he agrees.</p>
</div>

<div class="spooky-divider">🦴 🕯️ 🦴</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">🔍 Act 2: The Search for the Bones</h3>
</div>

<div style="background-color: rgba(25, 0, 0, 0.4); padding: 25px; border-left: 3px solid #700000; border: 1px solid rgba(70, 0, 0, 0.3); box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); position: relative; margin-bottom: 20px;">
  <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
  
  <p>The mansion becomes his maze of memories. As he hunts for the bones, he uncovers letters, bloodstains, and eerie remnants of their past. Each discovery drags him deeper into obsession and madness. Reality begins to blur — is he seeing ghosts, or just his own guilt? The line between love and lunacy fades fast.</p>
</div>

<div class="spooky-divider">⚡ 💀 ⚡</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">😱 Act 3: The Terrifying Truth</h3>
</div>

<div style="background-color: rgba(25, 0, 0, 0.4); padding: 25px; border-left: 3px solid #700000; border: 1px solid rgba(70, 0, 0, 0.3); box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); position: relative; margin-bottom: 20px;">
  <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
  
  <p>In the final act, the puzzle pieces come together — he was the one who killed her.
  His mind had shattered from jealousy and rage, forcing him to flee and forget. The ghost was never real… just the echo of his guilt. As the truth consumes him, he performs the ritual anyway — but instead of resurrecting her, he becomes trapped in his own nightmare, drowning in grief and eternal sorrow.</p>
</div>

<div class="spooky-divider">🕷️ 🕸️ 🕷️</div>

<div style="position: relative; margin-bottom: 40px;">
  <h2 style="font-size: 2em; border-bottom: 1px solid #4e0000; padding-bottom: 10px;">🎮 Key Gameplay Features</h2>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
  <div style="background-color: rgba(20, 0, 0, 0.6); padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.5); border-left: 3px solid #700000;">
    <h4 style="color: #b99a7a; margin-top: 0;">🏰 Atmospheric Exploration</h4>
    <p style="margin-bottom: 0;">Navigate through the crumbling ruins of a once-magnificent gothic mansion, where each room holds memories and secrets.</p>
  </div>
  
  <div style="background-color: rgba(20, 0, 0, 0.6); padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.5); border-left: 3px solid #700000;">
    <h4 style="color: #b99a7a; margin-top: 0;">🧩 Intricate Puzzles</h4>
    <p style="margin-bottom: 0;">Solve eerie puzzles to uncover hidden bones and clues, piecing together the tragic events of the past.</p>
  </div>
  
  <div style="background-color: rgba(20, 0, 0, 0.6); padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.5); border-left: 3px solid #700000;">
    <h4 style="color: #b99a7a; margin-top: 0;">👁️ Psychological Horror</h4>
    <p style="margin-bottom: 0;">Experience terrifying hallucinations, shifting rooms, and unreliable narration as reality blurs with madness.</p>
  </div>
  
  <div style="background-color: rgba(20, 0, 0, 0.6); padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.5); border-left: 3px solid #700000;">
    <h4 style="color: #b99a7a; margin-top: 0;">📖 Emotional Storytelling</h4>
    <p style="margin-bottom: 0;">Discover a haunting narrative through forgotten letters, faded photographs, and vivid flashbacks.</p>
  </div>
  
  <div style="background-color: rgba(20, 0, 0, 0.6); padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.5); border-left: 3px solid #700000; grid-column: span 2;">
    <h4 style="color: #b99a7a; margin-top: 0;">🔀 Multiple Endings</h4>
    <p style="margin-bottom: 0;">Your choices and discoveries shape the story's conclusion. Will you find redemption or be consumed by eternal torment?</p>
  </div>
</div>

<div class="spooky-divider">🏰 🔍 🏰</div>

<div style="position: relative; margin-bottom: 40px; margin-top: 40px;">
  <h2 style="font-size: 2em; border-bottom: 1px solid #4e0000; padding-bottom: 10px;">🗺️ Explore the Mansion</h2>
  <div style="position: absolute; right: 20px; top: -10px; opacity: 0.3;">
    <img src="https://cdn-icons-png.flaticon.com/512/2554/2554978.png" width="70" alt="mansion icon" style="filter: invert(0.8) sepia(0.3) saturate(3) hue-rotate(320deg);">
  </div>
</div>

<div style="background-color: rgba(20, 0, 0, 0.7); padding: 25px; border: 1px solid rgba(70, 0, 0, 0.4); box-shadow: 0 0 20px rgba(0, 0, 0, 0.6); position: relative; margin-bottom: 30px; background-image: url('https://www.transparenttextures.com/patterns/old-map.png'); background-blend-mode: overlay;">
  <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
  <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
  <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background-color: #1a0505; padding: 5px 15px; border: 1px solid #700000; font-family: 'IM Fell English SC', serif; font-size: 0.9em; color: #a07a6c;">Ravencrest Manor - Floor Plan</div>
  
  <p style="text-align: center; font-style: italic; margin-bottom: 25px;">Hover over rooms to reveal the mansion's dark secrets...</p>
  
  <style>
  /* Mansion Map styles */
  .map-hotspot {
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(120, 0, 0, 0.0);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  
  .map-hotspot:hover {
    background-color: rgba(120, 0, 0, 0.15);
    border: 1px solid rgba(120, 0, 0, 0.3);
    box-shadow: inset 0 0 20px rgba(120, 0, 0, 0.1), 0 0 10px rgba(120, 0, 0, 0.2);
  }
  
  .map-hotspot::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(120, 0, 0, 0.2) 0%, rgba(120, 0, 0, 0) 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  .map-hotspot:hover::before {
    opacity: 1;
  }
  
  #room-info {
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-out;
    border-radius: 4px;
    transform: translateY(10px);
  }
  </style>
  
  <!-- NEW SIMPLIFIED MANSION MAP LAYOUT -->
  <div class="mansion-map-layout" style="display: flex; flex-direction: row; width: 100%; max-width: 820px; margin: 0 auto; gap: 20px;">
    <!-- Left side: room info panel with simple styling -->
    <div style="width: 280px; background-color: #1a0808; border: 1px solid #700000; padding: 15px; border-radius: 5px;">
      <div id="room-info" style="color: #c9b38c; font-family: 'Crimson Text', serif; opacity: 1; display: block; visibility: visible; transition: none; transform: none;">
        <h4 id="room-title-display" style="color: #c9b38c; font-family: 'IM Fell English SC', serif; text-align: center; border-bottom: 1px solid #700000; padding-bottom: 8px;">Mansion Map</h4>
        <p id="room-description-display" style="color: #c9b38c; margin-top: 15px; line-height: 1.5;">Hover over a room to learn more about it...</p>
        <div style="height: 1px; background-color: #700000; margin: 15px 0;"></div>
        <h5 style="color: #c9b38c; text-align: center; font-size: 0.9em; margin-bottom: 10px;">⚜ SECRET ⚜</h5>
        <p id="room-secret-display" style="color: #8a3c2a; font-style: italic; line-height: 1.4;">The mansion holds many secrets. Some rooms are more haunted than others.</p>
      </div>
    </div>
    
    <!-- Right side: mansion map with simplified structure -->
    <div style="flex: 1; position: relative; border: 1px solid #500000;">
      <!-- Map image -->
      <div id="mansion-map" style="width: 100%; height: 500px; background-image: url('https://preview.redd.it/haunted-mansion-battle-map-30x36-v0-u37w8jh2gfud1.jpeg?auto=webp&s=bd49c77e237d72f4c09b417c45d7ea56359eb6de'); background-size: contain; background-position: center; background-repeat: no-repeat; position: relative;">
      
        <!-- Hotspots with solid borders for better visibility -->
        <div class="map-hotspot" data-room="foyer" style="position: absolute; left: 48%; top: 60%; width: 12%; height: 15%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
        <div class="map-hotspot" data-room="library" style="position: absolute; left: 68%; top: 32%; width: 14%; height: 18%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
        <div class="map-hotspot" data-room="master-bedroom" style="position: absolute; left: 29%; top: 20%; width: 18%; height: 18%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
        <div class="map-hotspot" data-room="attic" style="position: absolute; left: 50%; top: 8%; width: 18%; height: 12%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
        <div class="map-hotspot" data-room="dining-room" style="position: absolute; left: 25%; top: 45%; width: 18%; height: 15%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
        <div class="map-hotspot" data-room="cellar" style="position: absolute; left: 73%; top: 68%; width: 15%; height: 14%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
        <div class="map-hotspot" data-room="east-wing" style="position: absolute; left: 74%; top: 18%; width: 16%; height: 12%; cursor: pointer; border: 2px solid rgba(120, 0, 0, 0.5); background-color: rgba(120, 0, 0, 0.1);"></div>
      </div>
    </div>
  </div>
</div>

<script>
/* COMPLETELY REWRITTEN MANSION MAP SCRIPT */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing mansion map...');
  
  // Get all required DOM elements
  const roomInfoBox = document.getElementById('room-info');
  const roomTitleDisplay = document.getElementById('room-title-display');
  const roomDescriptionDisplay = document.getElementById('room-description-display');
  const roomSecretDisplay = document.getElementById('room-secret-display');
  const hotspots = document.querySelectorAll('.map-hotspot');
  
  // Debug verification of elements
  console.log('Room info found:', roomInfoBox ? 'Yes' : 'No');
  console.log('Room title found:', roomTitleDisplay ? 'Yes' : 'No');
  console.log('Room description found:', roomDescriptionDisplay ? 'Yes' : 'No');
  console.log('Room secret found:', roomSecretDisplay ? 'Yes' : 'No');
  console.log('Hotspots found:', hotspots.length);
  
  // Set default content for room info
  roomTitleDisplay.textContent = "Mansion Map";
  roomDescriptionDisplay.textContent = "Hover over a room to learn more about it...";
  roomSecretDisplay.textContent = "The mansion holds many secrets. Some rooms are more haunted than others.";
  roomInfoBox.style.display = 'block';
  
  // Room data - kept simple
  const roomData = {
    "foyer": {
      title: "Grand Foyer",
      description: "Once an impressive entryway with marble floors and crystal chandeliers, now cracked and covered in decades of dust. A grand staircase curves upward, littered with fallen portraits of the Blackwood family.",
      secret: "The floorboards creak in a rhythm almost like breathing. Visitors swear the chandelier sways even when there is no breeze, and sometimes the front door unlocks itself at exactly midnight."
    },
    "library": {
      title: "Library",
      description: "Thousands of ancient tomes line the walls. Many are rotted through, while others remain mysteriously pristine despite the years. A reading desk sits in the center, a leather-bound book still open as if its reader just stepped away.",
      secret: "Books occasionally fall from shelves when no one is near. The open book on the desk changes pages between visits, always displaying passages about grief, betrayal, and a ritual performed in the cellar during the winter of 1887."
    },
    "master-bedroom": {
      title: "Master Bedroom",
      description: "Dominated by a four-poster bed with tattered silk hangings in deep crimson. A vanity with a cracked mirror still holds perfume bottles and a silver hairbrush with strands of long dark hair from its last owner, Eleanora Blackwood.",
      secret: "The bed sheets appear disturbed each morning, as if someone had been sleeping there. The mirror sometimes reflects a figure standing behind you when you are alone—a pale woman in a bloodstained nightgown who mouths words no one can hear."
    },
    "attic": {
      title: "Attic",
      description: "A maze of forgotten furniture, trunks, and childhood mementos. Light filters weakly through a small round window, illuminating dancing dust particles and a collection of porcelain dolls with eyes that seem to follow your movements.",
      secret: "Children's laughter can sometimes be heard emanating from a Victorian rocking horse in the corner. A music box occasionally plays by itself at 3:33 AM, always the same haunting melody that was popular the year the Blackwood children disappeared."
    },
    "dining-room": {
      title: "Dining Room",
      description: "An elegant mahogany table set for a feast that never begins, with fine china and tarnished silver. Cobwebs connect the candelabra, and the grandfather clock in the corner is permanently stopped at 3:33—the time when Lord Blackwood reportedly made his fatal declaration.",
      secret: "Wine glasses have been known to shatter without being touched. Some nights, the sounds of silverware against plates and hushed conversation can be heard, followed by a woman's scream and then absolute silence that lasts until dawn."
    },
    "cellar": {
      title: "Wine Cellar",
      description: "Damp stone walls lined with empty and full bottles alike, some dating back centuries. The air is thick with the scent of earth, old cork, and something metallic. A single lantern provides the only illumination, revealing strange symbols carved into the far wall.",
      secret: "Temperature drops dramatically in certain corners—cold enough to see your breath even in summer. A scratching sound comes from behind the marked wall, as if someone—or something—is trying to get out. The stones are stained with what might be very old wine... or something else."
    },
    "east-wing": {
      title: "East Wing Corridor",
      description: "A hallway of locked doors and covered paintings. Water damage stains the peeling wallpaper, and the carpet is worn thin from centuries of footsteps. Family portraits hang crookedly, their faces obscured by what appears to be claw marks.",
      secret: "The door at the end of the hall—the one Earnest warned Irene never to enter—sometimes opens by itself. A woman's sobbing can be heard from within, though the room is always empty except for a child's rocking chair that moves by itself and a journal written in what appears to be blood."
    }
  };
  
  // Log for debugging (only visible in browser console)
  console.log('Elements found:', {
    roomInfo: !!roomInfoBox,
    roomTitle: !!roomTitleDisplay,
    roomDesc: !!roomDescriptionDisplay,
    roomSecret: !!roomSecretDisplay,
    hotspotCount: hotspots.length
  });
  
  // Create audio elements
  const creepySound = new Audio('https://freesound.org/data/previews/459/459959_1364272-lq.mp3');
  creepySound.volume = 0.2;
  
  const whisperSound = new Audio('https://freesound.org/data/previews/396/396232_7046259-lq.mp3');
  whisperSound.volume = 0.15;
  
  // Make sure room info panel is visible initially
  if (roomInfoBox) {
    roomInfoBox.style.display = 'block';
    roomInfoBox.style.visibility = 'visible';
    roomInfoBox.style.opacity = '1';
    console.log('Room info panel initialized and made visible');
  } else {
    console.error('Room info panel not found!');
  }
  
  // Set default room info content
  if (roomTitleDisplay) roomTitleDisplay.textContent = "Mansion Map";
  if (roomDescriptionDisplay) roomDescriptionDisplay.textContent = "Hover over a room to learn more about it...";
  if (roomSecretDisplay) roomSecretDisplay.textContent = "The mansion holds many secrets. Some rooms are more haunted than others.";
  
  // Function to update room information panel
  function updateRoomInfo(roomId) {
    const room = roomData[roomId];
    if (!room) {
      console.error("No room data found for:", roomId);
      return;
    }
    
    console.log("Updating room info with:", room.title);
    
    // Update text content with explicit null checks
    if (roomTitleDisplay) {
      roomTitleDisplay.textContent = room.title;
      roomTitleDisplay.style.textShadow = '0 0 8px rgba(150, 100, 50, 0.8)';
    }
    
    if (roomDescriptionDisplay) {
      roomDescriptionDisplay.textContent = room.description;
    }
    
    if (roomSecretDisplay) {
      roomSecretDisplay.textContent = room.secret;
    }
    
    // Force room info panel to be visible
    if (roomInfoBox) {
      roomInfoBox.style.display = 'block';
      roomInfoBox.style.visibility = 'visible';
      roomInfoBox.style.opacity = '1';
      
      // Force a repaint to ensure changes are visible
      void roomInfoBox.offsetWidth;
      
      console.log("Updated room info panel with:", room.title);
    }
  }
  
  // Add event listeners to each room hotspot
  if (hotspots.length > 0) {
    console.log("Setting up event listeners for", hotspots.length, "hotspots");
    
    // Track which room is currently active
    let activeRoomId = null;
    
    hotspots.forEach(hotspot => {
      // Get the room ID from the data attribute
      const roomId = hotspot.getAttribute('data-room');
      
      // Set up mouseenter event
      hotspot.addEventListener('mouseenter', function() {
        console.log("Mouse entered room:", roomId);
        
        // Update active room tracking
        activeRoomId = roomId;
        
        // Visual effect for active hotspot
        this.style.backgroundColor = 'rgba(120, 0, 0, 0.2)';
        this.style.borderColor = 'rgba(120, 0, 0, 0.4)';
        this.style.boxShadow = '0 0 15px rgba(120, 0, 0, 0.6)';
        this.style.animation = 'map-pulse 2s infinite';
        
        // Update the room info panel
        updateRoomInfo(roomId);
        
        // Play creepy sound effect
        try {
          creepySound.currentTime = 0;
          creepySound.volume = 0.2 + Math.random() * 0.3;
          creepySound.play();
        } catch (e) {
          console.log('Audio error:', e);
        }
      });
      
      // Set up mouseleave event
      hotspot.addEventListener('mouseleave', function() {
        console.log("Mouse left room:", roomId);
        
        // Only reset if this is still the active room
        if (activeRoomId === roomId) {
          activeRoomId = null;
          
          // Reset room info to default
          roomTitleDisplay.textContent = "Mansion Map";
          roomTitleDisplay.style.textShadow = 'none';
          roomDescriptionDisplay.textContent = "Hover over a room to learn more about it...";
          roomSecretDisplay.textContent = "The mansion holds many secrets. Some rooms are more haunted than others.";
        }
        
        // Reset hotspot styling
        this.style.backgroundColor = 'rgba(120, 0, 0, 0.05)';
        this.style.borderColor = 'rgba(120, 0, 0, 0.15)';
        this.style.boxShadow = 'none';
        this.style.animation = 'none';
        
        // Play whisper sound
        try {
          whisperSound.currentTime = 0;
          whisperSound.volume = 0.15;
          whisperSound.play();
        } catch (e) {
          console.log('Audio error:', e);
        }
      });
    });
  } else {
    console.error("No hotspots found in the mansion map!");
  }
});
</script>
});
</script>

<div class="spooky-divider">📜 ⚰️ 📜</div>

## 💌 Sample In-Game Letter

<div style="background-color: #1a0f00; border: 1px solid #3a2a1a; box-shadow: 0 0 15px rgba(0,0,0,0.7); padding: 30px; margin: 20px 0; max-width: 800px; font-family: 'Crimson Text', serif; color: #c9b38c; font-style: italic; line-height: 1.6; background-image: url('https://media.istockphoto.com/id/1639475440/photo/ old-paper-texture-background-pale-brown-paper-vintage-with-stains-in-sepia-tone.jpg?s=612x612&w=0&k=20&c=Fr0FyL7K90DvEbnuYUcKLTDRM2dBsXeYdF9jjgFnkmQ=');">
  <p style="margin-bottom: 20px; text-align: right; font-size: 0.9em; color: #8a7a6a;">October 17, 1897</p>
  
  <p style="margin-bottom: 20px; font-size: 1.1em;"><strong style="color: #d0a85c;">My Dearest Irene,</strong></p>
  
  <p>If you are reading this, then I have already gone.<br>
  Please understand that I did not leave you out of hatred, nor fear of you, but fear of myself.</p>
  
  <p>Something inside me has changed. There is a darkness that whispers when the house sleeps, a shadow that follows me even when the candles are lit. I can no longer trust my thoughts, nor the man reflected in the mirror.</p>
  
  <p>I beg of you, stay away from the east wing. Do not search for me, no matter what you hear. If I ever loved you—and by God, I did—you must promise me that.</p>
  
  <p>Your name will haunt me until the end of my days.<br>
  And perhaps, when this curse is lifted, I will find the courage to come home.</p>
  
  <p style="text-align: right; margin-top: 30px;"><strong style="color: #d0a85c;">Forever yours,</strong><br>
  <strong style="color: #d0a85c;">Earnest</strong></p>
  
  <div style="margin-top: 30px; font-size: 0.8em; color: #635a4a; text-align: left;">
    <em>*The edges of the paper appear singed, and dark stains—possibly blood—mark the bottom corner of the letter*</em>
  </div>
</div>

<div class="spooky-divider">🌙 👻 🌙</div>

<div style="position: relative; margin-top: 60px;">
  <h2 style="font-size: 2em; border-bottom: 1px solid #4e0000; padding-bottom: 10px;">🎭 Why This Game?</h2>
  
  <div class="haunted-mirror" style="position: relative; background-color: rgba(20, 0, 0, 0.6); padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,0,0,0.7); border: 1px solid #3a0000;">
    
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png'); opacity: 0.1;"></div>
    <div style="position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-left: 2px solid #700000;"></div>
    <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; border-top: 2px solid #700000; border-right: 2px solid #700000;"></div>
    <div style="position: absolute; bottom: 0; left: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-left: 2px solid #700000;"></div>
    <div style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #700000; border-right: 2px solid #700000;"></div>
    
    <p>This game explores themes of love, loss, guilt, and psychological horror. It challenges players to confront uncomfortable truths and unravel a haunting mystery, all while immersed in a chilling, atmospheric world.</p>
    
    <div class="ghostly-reflection" style="position: absolute; right: 20px; bottom: 20px; width: 80px; height: 80px; opacity: 0; animation: appear-disappear 8s infinite;">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-y4EG8_pO1I1GlfnbeVyNCB8Ee-S-JFoASA&s" width="100%" alt="ghostly face" style="filter: invert(0.8) blur(1px);">
    </div>
  </div>
</div>

<style>
@keyframes appear-disappear {
  0%, 100% { opacity: 0; }
  45%, 55% { opacity: 0.3; }
}

@keyframes flicker-effect {
  0%, 100% { opacity: 0; }
  5% { opacity: 0.3; }
  6% { opacity: 0; }
  7% { opacity: 0.3; }
  9% { opacity: 0; }
  10% { opacity: 0.3; }
  30% { opacity: 0; }
  50% { opacity: 0; }
  60% { opacity: 0.1; }
  60.5% { opacity: 0; }
  61% { opacity: 0.1; }
  75% { opacity: 0; }
  80% { opacity: 0.2; }
  85% { opacity: 0; }
  95% { opacity: 0.2; }
}

@keyframes floating {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
}

@keyframes haunted-shadow {
  0%, 100% { text-shadow: 0 0 5px #700000; }
  50% { text-shadow: 0 0 15px #700000, 0 0 30px rgba(120,0,0,0.5); }
}

.hover-float {
  transition: transform 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-5px);
  text-shadow: 0 5px 10px rgba(0,0,0,0.5);
}

.section-header h3 {
  animation: haunted-shadow 5s infinite;
}

/* Ghost cursor effect - uncomment if desired
html {
  cursor: url('https://cdn.pixabay.com/photo/2016/03/31/15/33/apparition-1293299_1280.png'), auto;
  cursor: url('https://cdn.pixabay.com/photo/2016/03/31/15/33/apparition-1293299_1280.png') 20 20, auto;
}
*/
</style>

<div class="spooky-divider">⚰️ 💀 ⚰️</div>

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
  <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8em; letter-spacing: 3px; color: #700000; text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">
    ARE YOU READY TO FACE THE GHOSTS OF YOUR PAST?
  </h3>
  <div style="font-size: 3em; margin-top: 15px; animation: pulse 3s infinite;">👻</div>
</div>

<style>
@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
</style>

<div style="background-color: rgba(0,0,0,0.7); border-top: 1px solid #4e0000; padding: 30px 20px; margin-top: 40px; text-align: center; font-style: italic; color: #706060; position: relative;">
  <div class="candle" style="position: absolute; left: 20%; top: -30px; width: 30px; height: 100px;">
    <div class="flame" style="position: absolute; bottom: 50%; left: 50%; width: 15px; height: 35px; background: radial-gradient(ellipse at bottom, #ff6a00, #f7b500 40%, rgba(255,166,0,0.2) 70%); border-radius: 50% 50% 20% 20%; transform: translate(-50%, 0); animation: flicker 3s ease-in-out infinite; box-shadow: 0 0 20px 5px rgba(255,166,0,0.5);"></div>
    <div class="wax" style="position: absolute; bottom: 0; left: 50%; width: 15px; height: 50px; background: linear-gradient(to bottom, #fff1e0, #d0d0d0); border-radius: 3px 3px 5px 5px; transform: translateX(-50%);"></div>
  </div>
  
  <div class="candle" style="position: absolute; right: 20%; top: -30px; width: 30px; height: 100px;">
    <div class="flame" style="position: absolute; bottom: 50%; left: 50%; width: 15px; height: 35px; background: radial-gradient(ellipse at bottom, #ff6a00, #f7b500 40%, rgba(255,166,0,0.2) 70%); border-radius: 50% 50% 20% 20%; transform: translate(-50%, 0); animation: flicker 4s ease-in-out infinite 1s; box-shadow: 0 0 20px 5px rgba(255,166,0,0.5);"></div>
    <div class="wax" style="position: absolute; bottom: 0; left: 50%; width: 15px; height: 50px; background: linear-gradient(to bottom, #fff1e0, #d0d0d0); border-radius: 3px 3px 5px 5px; transform: translateX(-50%);"></div>
  </div>
  
  <p>"The past is never dead. It's not even past." — William Faulkner</p>
  <p style="margin-top: 15px; font-size: 0.8em; color: #4a3a3a;">© 2025 • A Game of Shadows and Regrets</p>
</div>

<style>
@keyframes flicker {
  0% { height: 35px; opacity: 0.9; }
  5% { height: 30px; opacity: 0.8; }
  10% { height: 35px; opacity: 0.9; }
  15% { height: 25px; opacity: 0.7; }
  20% { height: 35px; opacity: 0.9; }
  25% { height: 30px; opacity: 0.8; }
  30% { height: 40px; opacity: 0.9; }
  35% { height: 30px; opacity: 0.8; }
  40% { height: 25px; opacity: 0.7; }
  45% { height: 35px; opacity: 0.9; }
  50% { height: 30px; opacity: 0.8; }
  55% { height: 35px; opacity: 0.9; }
  60% { height: 40px; opacity: 1.0; }
  65% { height: 35px; opacity: 0.9; }
  70% { height: 30px; opacity: 0.8; }
  75% { height: 35px; opacity: 0.9; }
  80% { height: 25px; opacity: 0.7; }
  85% { height: 30px; opacity: 0.8; }
  90% { height: 35px; opacity: 0.9; }
  95% { height: 25px; opacity: 0.7; }
  100% { height: 35px; opacity: 0.9; }
}

/* Vignette effect for the entire page */
body:before {
  content: "" !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  box-shadow: inset 0 0 150px 30px rgba(0, 0, 0, 0.8) !important;
  pointer-events: none !important;
  z-index: 9 !important;
}

/* Make sure all content sits above the background */
.post-content, article, .post {
  position: relative !important;
  z-index: 1 !important;
}

/* Restore original header styling with horror theme */
header.site-header {
  position: relative !important;
  z-index: 10 !important;
  background-color: rgba(15, 0, 0, 0.7) !important;
  border-bottom: 1px solid rgba(70, 0, 0, 0.3) !important;
  padding: 10px 0 !important;
  height: initial !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8) !important;
}

.site-nav {
  float: right !important;
  line-height: initial !important;
  position: relative !important;
  font-size: initial !important;
  padding: initial !important;
}

/* Make sure content doesn't overflow horizontally */
.post-content {
  overflow-x: hidden !important;
  word-wrap: break-word !important;
  width: 100% !important;
  max-width: 100% !important;
}

/* Make sure images don't overflow */
img {
  max-width: 100% !important;
  height: auto !important;
}
</style>

<!-- Script to ensure background is properly sized on load and resize -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Force full height and width
  document.documentElement.style.minHeight = '100vh';
  document.body.style.minHeight = '100vh';
  
  // Fix any layout issues
  var content = document.querySelector('.post-content');
  if(content) {
    content.style.width = 'auto';
    content.style.maxWidth = '100%';
    content.style.overflowX = 'hidden';
  }
  
  // Apply background to all containers
  var containers = document.querySelectorAll('.container, .container-lg, .page-content, main, .wrapper');
  containers.forEach(function(container) {
    if(container) {
      container.style.backgroundColor = 'transparent';
    }
  });
  
  // Restore header styling
  var header = document.querySelector('header.site-header');
  if(header) {
    header.style.position = 'relative';
    header.style.zIndex = '10';
    header.style.backgroundColor = 'transparent';
    header.style.width = '';
    header.style.display = '';
    header.style.height = '';
    header.style.lineHeight = '';
  }
  
  var nav = document.querySelector('.site-nav');
  if(nav) {
    nav.style.float = 'right';
    nav.style.fontSize = '';
    nav.style.padding = '';
    nav.style.lineHeight = '';
  }
  
  // Create additional random ghosts that appear and disappear
  function createRandomGhosts() {
    const body = document.querySelector('body');
    const ghostCount = Math.floor(Math.random() * 3) + 1; // Create 1-3 ghosts at a time
    
    for (let i = 0; i < ghostCount; i++) {
      setTimeout(() => {
        const ghost = document.createElement('div');
        ghost.className = 'ghost';
        ghost.style.left = Math.random() * 100 + '%';
        ghost.style.top = Math.random() * 100 + '%';
        ghost.style.opacity = '0';
        ghost.style.transform = 'scale(0)';
        ghost.style.transition = 'all 2s ease-in-out';
        body.appendChild(ghost);
        
        // Make the ghost appear
        setTimeout(() => {
          ghost.style.opacity = '0.15';
          ghost.style.transform = 'scale(1)';
        }, 100);
        
        // Make the ghost disappear after some time
        setTimeout(() => {
          ghost.style.opacity = '0';
          ghost.style.transform = 'scale(0)';
          setTimeout(() => {
            body.removeChild(ghost);
          }, 2000);
        }, 15000 + Math.random() * 10000);
      }, i * 2000);
    }
    
    // Schedule next batch of ghosts
    setTimeout(createRandomGhosts, 10000 + Math.random() * 15000);
  }
  
  // Start creating random ghosts after the page loads
  setTimeout(createRandomGhosts, 5000);
  
  // Create cursor smoke effect
  function createSmokeEffect() {
    let lastX = 0;
    let lastY = 0;
    let throttle = false;
    
    document.addEventListener('mousemove', function(e) {
      if (throttle) return;
      throttle = true;
      
      // Throttle the smoke creation for performance
      setTimeout(() => {
        throttle = false;
      }, 20);
      
      // Only create smoke if cursor moved enough distance
      const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
      if (distance < 5) return;
      
      lastX = e.clientX;
      lastY = e.clientY;
      
      // Create 1-3 smoke particles at slightly different positions
      const particleCount = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < particleCount; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke-particle';
        
        // Random offset from cursor
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        
        // Position and style
        smoke.style.left = (e.clientX + offsetX) + 'px';
        smoke.style.top = (e.clientY + offsetY) + 'px';
        
        // Random subtle color variations
        const hue = Math.random() > 0.5 ? 0 : 20;  // Either grayscale or slight sepia
        const brightness = Math.floor(Math.random() * 15) + 40;  // 40-55% brightness
        smoke.style.backgroundColor = `hsla(${hue}, 10%, ${brightness}%, ${Math.random() * 0.2 + 0.3})`;
        
        // Random size
        const size = Math.random() * 7 + 3;
        smoke.style.width = size + 'px';
        smoke.style.height = size + 'px';
        
        // Add to body
        document.body.appendChild(smoke);
        
        // Remove after animation completes
        setTimeout(() => {
          document.body.removeChild(smoke);
        }, 2000);
      }
    });
  }
  
  // Initialize smoke effect
  createSmokeEffect();
});
</script>