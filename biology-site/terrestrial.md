layout: base
title: Terrestrial Ecosystems
permalink: /biology-site/terrestrial/


<style>
.terra-bg {
	background: linear-gradient(135deg, #e8f5e9 0%, #fffde7 100%);
	min-height: 100vh;
	padding-bottom: 40px;
	position: relative;
	overflow-x: hidden;
}
.terra-header {
	text-align: center;
	padding: 48px 20px 32px;
	background: linear-gradient(135deg, #c8e6c9 0%, #fffde7 100%);
	color: #33691e;
	border-radius: 20px;
	margin-bottom: 0;
	box-shadow: 0 8px 28px rgba(51,105,30,0.10);
	position: relative;
	overflow: hidden;
}
.terra-header h1 {
	font-size: 2.7em;
	margin: 0 0 10px 0;
	font-weight: 800;
	letter-spacing: 0.01em;
	color: #388e3c;
	text-shadow: 1px 2px 8px #e8f5e9;
}
.terra-header p {
	font-size: 1.18em;
	margin: 0;
	opacity: 0.93;
	color: #33691e;
}
.terra-header-icon {
	display: block;
	margin: 0 auto 18px auto;
	width: 70px;
	height: 70px;
}
.terra-card {
	background: rgba(255,255,255,0.97);
	border-radius: 18px;
	box-shadow: 0 8px 32px rgba(51,105,30,0.13), 0 0 0 8px rgba(205,220,57,0.04);
	margin: 40px auto;
	max-width: 700px;
	padding: 44px 36px 36px 36px;
	color: #111;
	font-size: 1.13em;
	line-height: 1.7;
	position: relative;
	overflow: visible;
	transition: box-shadow 0.3s, transform 0.3s;
}
.terra-card:hover {
	box-shadow: 0 12px 40px rgba(51,105,30,0.18), 0 0 0 12px rgba(205,220,57,0.07);
	transform: translateY(-4px) scale(1.015);
}
.terra-card-divider {
	width: 60px;
	height: 4px;
	background: linear-gradient(90deg, #388e3c 0%, #fffde7 100%);
	border-radius: 2px;
	margin: 36px auto 0 auto;
	opacity: 0.25;
}
.terra-card-icon {
	position: absolute;
	top: -32px;
	left: 50%;
	transform: translateX(-50%);
	width: 48px;
	height: 48px;
	z-index: 2;
	filter: drop-shadow(0 0 16px #c8e6c9) drop-shadow(0 2px 8px rgba(205,220,57,0.13));
	animation: terra-bounce 3.2s ease-in-out infinite;
}
@keyframes terra-bounce {
	0%, 100% { transform: translateX(-50%) translateY(0); }
	50% { transform: translateX(-50%) translateY(-10px) scale(1.07); }
}
.terra-footer {
	text-align: center;
	margin: 60px auto 0 auto;
	color: #388e3c;
	font-size: 1.08em;
	opacity: 0.85;
	letter-spacing: 0.01em;
}
.terra-header,
.terra-header h1,
.terra-header p,
.terra-card,
.terra-card h2,
.terra-card h3,
.terra-card ul,
.terra-card ol,
.terra-card li,
.terra-card strong,
.terra-card em,
.terra-card a {
	color: #111 !important;
}
.terra-card p {
	color: #111 !important;
}
/* Animated leaves */
.terra-leaf {
	position: absolute;
	opacity: 0.13;
	z-index: 0;
}
.terra-leaf.l1 { left: 8%; top: 10%; width: 60px; transform: rotate(-20deg); }
.terra-leaf.l2 { left: 80%; top: 18%; width: 40px; transform: rotate(30deg); }
.terra-leaf.l3 { left: 20%; top: 70%; width: 50px; transform: rotate(-10deg); }
.terra-leaf.l4 { left: 70%; top: 80%; width: 70px; transform: rotate(15deg); }
</style>

<div class="terra-bg">
	<!-- Animated leaves -->
	<svg class="terra-leaf l1" viewBox="0 0 32 32"><path d="M16 2 Q28 10 16 30 Q4 10 16 2Z" fill="#388e3c"/></svg>
	<svg class="terra-leaf l2" viewBox="0 0 32 32"><path d="M16 2 Q28 10 16 30 Q4 10 16 2Z" fill="#8bc34a"/></svg>
	<svg class="terra-leaf l3" viewBox="0 0 32 32"><path d="M16 2 Q28 10 16 30 Q4 10 16 2Z" fill="#cddc39"/></svg>
	<svg class="terra-leaf l4" viewBox="0 0 32 32"><path d="M16 2 Q28 10 16 30 Q4 10 16 2Z" fill="#ffeb3b"/></svg>
	<div class="terra-header">
		<svg class="terra-header-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Forest icon -->
			<ellipse cx="32" cy="54" rx="24" ry="6" fill="#a1887f"/>
			<ellipse cx="20" cy="36" rx="10" ry="16" fill="#388e3c"/>
			<ellipse cx="44" cy="36" rx="10" ry="16" fill="#8bc34a"/>
			<ellipse cx="32" cy="28" rx="14" ry="20" fill="#cddc39"/>
			<rect x="28" y="44" width="8" height="12" fill="#795548"/>
		</svg>
		<h1>🌲 Terrestrial Ecosystems</h1>
		<p>Land-based communities shaped by climate, soil, and adaptation—explore the diversity of Earth's terrestrial biomes.</p>
	</div>
	<div class="terra-card">
		<svg class="terra-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Mountain/forest icon -->
			<ellipse cx="32" cy="54" rx="24" ry="6" fill="#a1887f"/>
			<ellipse cx="20" cy="36" rx="10" ry="16" fill="#388e3c"/>
			<ellipse cx="44" cy="36" rx="10" ry="16" fill="#8bc34a"/>
			<ellipse cx="32" cy="28" rx="14" ry="20" fill="#cddc39"/>
			<rect x="28" y="44" width="8" height="12" fill="#795548"/>
		</svg>
		<h2>What are Terrestrial Ecosystems?</h2>
		<ul>
			<li><strong>Climate patterns</strong> (temperature and precipitation)</li>
			<li><strong>Soil composition</strong> and depth</li>
			<li><strong>Topography</strong> (mountains, plains, valleys)</li>
			<li><strong>Seasonal changes</strong> in many regions</li>
		</ul>
		<div class="terra-card-divider"></div>
	</div>
	<div class="terra-card">
		<svg class="terra-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Biomes icon: forest, grassland, desert, tundra -->
			<ellipse cx="16" cy="54" rx="12" ry="4" fill="#a1887f"/>
			<ellipse cx="16" cy="36" rx="8" ry="12" fill="#388e3c"/>
			<ellipse cx="32" cy="54" rx="12" ry="4" fill="#ffe082"/>
			<ellipse cx="32" cy="36" rx="8" ry="12" fill="#ffd54f"/>
			<ellipse cx="48" cy="54" rx="12" ry="4" fill="#b0bec5"/>
			<ellipse cx="48" cy="36" rx="8" ry="12" fill="#90a4ae"/>
		</svg>
		<h2>Major Types</h2>
		<h3>Forests</h3>
		<ul>
			<li><strong>Tropical Rainforests</strong>: High biodiversity, warm year-round</li>
			<li><strong>Temperate Deciduous</strong>: Seasonal leaf changes</li>
			<li><strong>Coniferous/Boreal</strong>: Evergreen trees, cold winters</li>
		</ul>
		<h3>Grasslands</h3>
		<ul>
			<li><strong>Prairies</strong>: Temperate grasslands with rich soils</li>
			<li><strong>Savannas</strong>: Tropical grasslands with scattered trees</li>
		</ul>
		<h3>Deserts</h3>
		<ul>
			<li><strong>Hot Deserts</strong>: Extreme heat, minimal rainfall</li>
			<li><strong>Cold Deserts</strong>: Cold winters, low precipitation</li>
		</ul>
		<h3>Tundra</h3>
		<ul>
			<li><strong>Arctic conditions</strong> with permafrost</li>
			<li><strong>Limited growing season</strong></li>
		</ul>
		<div class="terra-card-divider"></div>
	</div>
	<div class="terra-card">
		<svg class="terra-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Adaptation icon: leaf, paw, snowflake -->
			<ellipse cx="32" cy="54" rx="24" ry="6" fill="#a1887f"/>
			<ellipse cx="32" cy="32" rx="10" ry="16" fill="#388e3c"/>
			<ellipse cx="48" cy="24" rx="6" ry="6" fill="#b0bec5"/>
			<ellipse cx="16" cy="24" rx="6" ry="6" fill="#ffd54f"/>
			<ellipse cx="32" cy="16" rx="4" ry="4" fill="#fffde7"/>
		</svg>
		<h2>Adaptations</h2>
		<ul>
			<li><strong>Water conservation</strong> (waxy leaves, efficient kidneys)</li>
			<li><strong>Temperature regulation</strong> (fur, behavioral changes)</li>
			<li><strong>Support structures</strong> (strong stems, skeletons)</li>
			<li><strong>Reproduction</strong> strategies for dry conditions</li>
		</ul>
		<div class="terra-card-divider"></div>
	</div>
	<div class="terra-card">
		<svg class="terra-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Plant icon: root, leaf -->
			<ellipse cx="32" cy="54" rx="24" ry="6" fill="#a1887f"/>
			<rect x="28" y="34" width="8" height="20" fill="#795548"/>
			<ellipse cx="32" cy="28" rx="14" ry="20" fill="#cddc39"/>
			<ellipse cx="32" cy="18" rx="8" ry="6" fill="#388e3c"/>
		</svg>
		<h2>Plant Adaptations</h2>
		<ul>
			<li><strong>Root systems</strong> for water and nutrient uptake</li>
			<li><strong>Leaf modifications</strong> to reduce water loss</li>
			<li><strong>Seasonal timing</strong> for growth and reproduction</li>
		</ul>
		<div class="terra-card-divider"></div>
	</div>
	<div class="terra-card">
		<svg class="terra-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Animal icon: paw, fur, group -->
			<ellipse cx="32" cy="54" rx="24" ry="6" fill="#a1887f"/>
			<ellipse cx="24" cy="36" rx="6" ry="8" fill="#ffd54f"/>
			<ellipse cx="40" cy="36" rx="6" ry="8" fill="#b0bec5"/>
			<ellipse cx="32" cy="28" rx="8" ry="10" fill="#8bc34a"/>
		</svg>
		<h2>Animal Adaptations</h2>
		<ul>
			<li><strong>Migration</strong> patterns following resources</li>
			<li><strong>Hibernation</strong> to survive harsh seasons</li>
			<li><strong>Camouflage</strong> for predator avoidance</li>
			<li><strong>Social behaviors</strong> for protection and resource sharing</li>
		</ul>
	</div>
	<div class="terra-footer">🌲 Thanks for exploring terrestrial ecosystems! 🌳</div>
	<a class="terra-footer" style="display:block;margin-top:12px;" href="/biology-chambers/">← Back to Biology Chambers Overview</a>
</div>
