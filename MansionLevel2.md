---
layout: opencs
title: Mansion Level 2
permalink: /gamify/mansion2
---

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
    <canvas id='gameCanvas'></canvas>
</div>

<script type="module">
    import Game from "{{site.baseurl}}/assets/js/mansionGame/Game.js";
    import MansionLevel2 from "{{site.baseurl}}/assets/js/mansionGame/MansionLevel2.js";
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    const environment = {
        path:"{{site.baseurl}}",
        pythonURI: pythonURI,
        javaURI: javaURI,
        fetchOptions: fetchOptions,
        gameContainer: document.getElementById("gameContainer"),
        gameCanvas: document.getElementById("gameCanvas"),
        gameLevelClasses: [MansionLevel2]
    }
    Game.main(environment);
</script>
