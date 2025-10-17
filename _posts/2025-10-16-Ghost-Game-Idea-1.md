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
  body {
    background-color: #0a0000 !important;
    background-image: url('https://www.transparenttextures.com/patterns/black-felt.png') !important;
    color: #b5a396 !important;
    font-family: 'Crimson Text', serif !important;
    line-height: 1.7 !important;
    text-shadow: 0 0 1px rgba(255,255,255,0.1) !important;
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
    opacity: 0.03;
    pointer-events: none;
    z-index: -1;
    animation: fog-move 120s infinite alternate linear;
  }
  
  @keyframes fog-move {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }
</style>

<!-- Fog overlay for the entire page -->
<div class="fog-overlay"></div>

<!-- Random blood drips -->
<div class="blood-drip" style="left: 20%; animation-delay: 3s;"></div>
<div class="blood-drip" style="left: 45%; animation-delay: 7s;"></div>
<div class="blood-drip" style="left: 75%; animation-delay: 5s;"></div>
<div class="blood-drip" style="left: 90%; animation-delay: 9s;"></div>

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
  </script>
</div>

<div style="position: relative; margin-bottom: 40px;">
  <h2 style="font-size: 2em; border-bottom: 1px solid #4e0000; padding-bottom: 10px;">🏚️ Game Concept & Narrative</h2>
  <div style="position: absolute; right: 20px; top: -10px; opacity: 0.3;">
    <img src="https://www.citypng.com/public/uploads/preview/halloween-flying-ghost-silhouette-black-icon-png-701751694532168uawrn4mgfq.png" width="80" alt="ghost silhouette" style="filter: invert(1);">
  </div>
</div>

Step into a gothic mansion shrouded in fog, regret, and supernatural mystery. In this psychological horror adventure, you play as **Earnest**—a man tormented by guilt, returning to the ruins of his past love. The game unfolds in three acts, blending puzzle-solving, exploration, and emotional storytelling.

<div class="spooky-divider">⚱️ ⚰️ ⚱️</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">🌙 Backstory</h3>
  <div style="background-color: rgba(25, 0, 0, 0.4); padding: 15px; border-left: 3px solid #700000;"></div>
</div>

In a crumbling gothic mansion shrouded by fog and regret, a man flees in the dead of night for reasons even he can't fully explain. He leaves behind his greatest love — a woman whose heart once mirrored his own. Years later, guilt drags him back to the decaying halls of the estate… only to discover the horrifying truth: she's dead.

<div class="spooky-divider">💀 ⚡ 💀</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">👻 Act 1: The Whispering Ghost</h3>
  <div style="background-color: rgba(25, 0, 0, 0.4); padding: 15px; border-left: 3px solid #700000;"></div>
</div>

One stormy night, her ghost appears before him — sorrowful yet strangely calm. She tells him that her spirit is trapped, unable to rest. If he can locate her scattered bones hidden across the mansion's cursed grounds, he can perform a ritual to bring her back to life. Desperate and haunted, he agrees.

<div class="spooky-divider">🦴 🕯️ 🦴</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">🔍 Act 2: The Search for the Bones</h3>
  <div style="background-color: rgba(25, 0, 0, 0.4); padding: 15px; border-left: 3px solid #700000;"></div>
</div>

The mansion becomes his maze of memories. As he hunts for the bones, he uncovers letters, bloodstains, and eerie remnants of their past. Each discovery drags him deeper into obsession and madness. Reality begins to blur — is he seeing ghosts, or just his own guilt? The line between love and lunacy fades fast.

<div class="spooky-divider">⚡ 💀 ⚡</div>

<div class="section-header" style="position: relative; margin-top: 35px;">
  <h3 style="font-size: 1.6em; border-bottom: 1px solid #4e0000; padding-bottom: 8px; display: inline-block;">😱 Act 3: The Terrifying Truth</h3>
  <div style="background-color: rgba(25, 0, 0, 0.4); padding: 15px; border-left: 3px solid #700000;"></div>
</div>

In the final act, the puzzle pieces come together — he was the one who killed her.
His mind had shattered from jealousy and rage, forcing him to flee and forget. The ghost was never real… just the echo of his guilt. As the truth consumes him, he performs the ritual anyway — but instead of resurrecting her, he becomes trapped in his own nightmare, drowning in grief and eternal sorrow.

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
</style>