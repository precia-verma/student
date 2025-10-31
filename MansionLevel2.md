---
layout: base
title: Mansion Level 2
permalink: /gamify/mansion2
---

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
    <canvas id='gameCanvas'></canvas>
</div>

<script type="module">
    import MansionLevel2 from "{{site.baseurl}}/assets/js/MansionLevel2.js";
    import Engine from "{{site.baseurl}}/assets/js/GameEngine/Engine.js";

    // Setup canvas and environment
    const gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.width = 1280;
    gameCanvas.height = 720;

    // Create the game environment object
    const environment = {
        path: "{{site.baseurl}}",
        innerWidth: gameCanvas.width,
        innerHeight: gameCanvas.height
    };

    // Initialize MansionLevel2 (which sets up background and player)
    const level = new MansionLevel2(environment);

    // Create the game engine
    const engine = new Engine(gameCanvas);


    // Add all classes from MansionLevel2 to the engine with correct constructor arguments
    level.classes.forEach(obj => {
        if (obj.class.name === 'GameEnvBackground') {
            engine.add(new obj.class(gameCanvas.width, gameCanvas.height, obj.data));
        } else if (obj.class.name === 'Player') {
            engine.add(new obj.class(gameCanvas.getContext('2d'), obj.data));
        } else {
            engine.add(new obj.class(obj.data));
        }
    });

    // Start the engine
    engine.start();
</script>
