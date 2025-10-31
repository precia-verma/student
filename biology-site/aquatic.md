layout: base
title: Aquatic Ecosystems
permalink: /biology-site/aquatic/


<style>
.aqua-bg {
	background: linear-gradient(135deg, #b3e0f7 0%, #4fc3f7 100%);
	min-height: 100vh;
	padding-bottom: 40px;
	position: relative;
	overflow-x: visible;
	overflow-y: visible;
}
.aqua-header {
	text-align: center;
	padding: 48px 20px 32px;
	background: linear-gradient(135deg, #e0f7fa 0%, #b3e0f7 100%);
	color: #01579b;
	border-radius: 20px;
	margin-bottom: 0;
	box-shadow: 0 8px 28px rgba(1,87,155,0.10);
	position: relative;
	overflow: hidden;
}
.aqua-header h1 {
	font-size: 2.7em;
	margin: 0 0 10px 0;
	font-weight: 800;
	letter-spacing: 0.01em;
	color: #0288d1;
	text-shadow: 1px 2px 8px #e0f7fa;
}
.aqua-header p {
	font-size: 1.18em;
	margin: 0;
	opacity: 0.93;
	color: #01579b;
}
.aqua-header-fish {
	display: block;
	margin: 0 auto 18px auto;
	width: 70px;
	height: 70px;
}
.aqua-card {
	background: rgba(255,255,255,0.97);
	border-radius: 18px;
	box-shadow: 0 8px 32px rgba(1,87,155,0.13), 0 0 0 8px rgba(33,150,243,0.04);
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
.aqua-card:hover {
	box-shadow: 0 12px 40px rgba(1,87,155,0.18), 0 0 0 12px rgba(33,150,243,0.07);
	transform: translateY(-4px) scale(1.015);
}
.aqua-card-divider {
	width: 60px;
	height: 4px;
	background: linear-gradient(90deg, #0288d1 0%, #b3e0f7 100%);
	border-radius: 2px;
	margin: 36px auto 0 auto;
	opacity: 0.25;
}
.aqua-card-fish {
	position: absolute;
	top: -32px;
	left: 50%;
	transform: translateX(-50%);
	width: 48px;
	height: 48px;
	z-index: 2;
	filter: drop-shadow(0 0 16px #b3e0f7) drop-shadow(0 2px 8px rgba(33,150,243,0.13));
	animation: swim-fish 3.2s ease-in-out infinite;
}
@keyframes swim-fish {
	0%, 100% { transform: translateX(-50%) translateY(0); }
	50% { transform: translateX(-50%) translateY(-10px) scale(1.07); }
}
.aqua-footer {
	text-align: center;
	margin: 60px auto 0 auto;
	color: #0288d1;
	font-size: 1.08em;
	opacity: 0.85;
	letter-spacing: 0.01em;
}
.aqua-header,
.aqua-header h1,
.aqua-header p,
.aqua-card,
.aqua-card h2,
.aqua-card h3,
.aqua-card ul,
.aqua-card ol,
.aqua-card li,
.aqua-card strong,
.aqua-card em,
.aqua-card a {
	color: #111 !important;
}
.aqua-card p {
	color: #111 !important;
}
/* Animated bubbles */
.aqua-bubble {
	position: absolute;
	border-radius: 50%;
	opacity: 0.18;
	animation: rise-bubble 8s linear infinite;
	background: #fff;
}
.aqua-bubble.b1 { left: 12%; width: 32px; height: 32px; animation-delay: 0s; }
.aqua-bubble.b2 { left: 28%; width: 18px; height: 18px; animation-delay: 2s; }
.aqua-bubble.b3 { left: 60%; width: 24px; height: 24px; animation-delay: 4s; }
.aqua-bubble.b4 { left: 80%; width: 14px; height: 14px; animation-delay: 1s; }
@keyframes rise-bubble {
	0% { bottom: -40px; transform: scale(1); }
	60% { transform: scale(1.1); }
	100% { bottom: 110vh; transform: scale(1); }
}
/* Parallax waves */
.aqua-bg-svg {
	position: absolute;
	left: 0; top: 0; width: 100%; height: 100%;
	z-index: 0;
	pointer-events: none;
	opacity: 0.13;
}
.aqua-bg:after {
	content: '';
	position: fixed;
	left: 0; top: 0; width: 100vw; height: 100vh;
	pointer-events: none;
	z-index: 1;
	background: radial-gradient(ellipse at center, rgba(33,150,243,0.08) 0%, rgba(0,0,0,0.10) 100%);
}
</style>

<div class="aqua-bg">
	<!-- Animated bubbles -->
	<div class="aqua-bubble b1"></div>
	<div class="aqua-bubble b2"></div>
	<div class="aqua-bubble b3"></div>
	<div class="aqua-bubble b4"></div>
	<!-- Parallax SVG waves -->
	<svg class="aqua-bg-svg" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,700 Q720,600 1440,700 L1440,800 L0,800 Z" fill="#0288d1"/>
		<ellipse cx="720" cy="100" rx="600" ry="60" fill="#b3e0f7"/>
		<ellipse cx="200" cy="400" rx="80" ry="30" fill="#4fc3f7"/>
		<ellipse cx="1240" cy="400" rx="80" ry="30" fill="#4fc3f7"/>
	</svg>
	<div class="aqua-header">
		<svg class="aqua-header-fish" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<!-- Stylized coral icon -->
			<path d="M32 60 Q30 50 34 44 Q38 38 36 32 Q34 26 38 22 Q42 18 40 12" stroke="#ff6f61" stroke-width="4" fill="none"/>
			<path d="M32 60 Q34 54 30 48 Q26 42 28 36 Q30 30 26 26 Q22 22 24 16" stroke="#ffb347" stroke-width="4" fill="none"/>
			<path d="M32 60 Q36 56 40 52 Q44 48 48 44 Q52 40 50 36 Q48 32 52 28 Q56 24 54 20" stroke="#ff6f61" stroke-width="4" fill="none"/>
			<circle cx="32" cy="60" r="4" fill="#ffb347" stroke="#ff6f61" stroke-width="2"/>
		</svg>
		<h1>🌊 Aquatic Ecosystems</h1>
		<p>Water worlds teeming with life, diversity, and adaptation—explore the wonders beneath the surface.</p>
	</div>
	<div class="aqua-card">
		<svg class="aqua-card-fish" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M32 60 Q30 50 34 44 Q38 38 36 32 Q34 26 38 22 Q42 18 40 12" stroke="#ff6f61" stroke-width="4" fill="none"/>
			<path d="M32 60 Q34 54 30 48 Q26 42 28 36 Q30 30 26 26 Q22 22 24 16" stroke="#ffb347" stroke-width="4" fill="none"/>
			<path d="M32 60 Q36 56 40 52 Q44 48 48 44 Q52 40 50 36 Q48 32 52 28 Q56 24 54 20" stroke="#ff6f61" stroke-width="4" fill="none"/>
			<circle cx="32" cy="60" r="4" fill="#ffb347" stroke="#ff6f61" stroke-width="2"/>
		</svg>
		<h2>What are Aquatic Ecosystems?</h2>
		<ul>
			<li><strong>Water as the primary medium</strong> for life</li>
			<li><strong>Unique physical properties</strong> like buoyancy and pressure</li>
			<li><strong>Light penetration</strong> that decreases with depth</li>
			<li><strong>Dissolved oxygen</strong> and nutrient levels</li>
		</ul>
		<div class="aqua-card-divider"></div>
	</div>
	<div class="aqua-card">
		<svg class="aqua-card-fish" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M32 60 Q30 50 34 44 Q38 38 36 32 Q34 26 38 22 Q42 18 40 12" stroke="#ff6f61" stroke-width="4" fill="none"/>
			<path d="M32 60 Q34 54 30 48 Q26 42 28 36 Q30 30 26 26 Q22 22 24 16" stroke="#ffb347" stroke-width="4" fill="none"/>
			<path d="M32 60 Q36 56 40 52 Q44 48 48 44 Q52 40 50 36 Q48 32 52 28 Q56 24 54 20" stroke="#ff6f61" stroke-width="4" fill="none"/>
			<circle cx="32" cy="60" r="4" fill="#ffb347" stroke="#ff6f61" stroke-width="2"/>
		</svg>
		<h2>Types of Aquatic Ecosystems</h2>
		<h3>Marine Ecosystems</h3>
		<ul>
			<li><strong>Oceans</strong>: Open water with high salinity</li>
			<li><strong>Coral Reefs</strong>: Biodiversity hotspots in warm, shallow waters</li>
			<li><strong>Estuaries</strong>: Where rivers meet the sea, creating brackish water</li>
		</ul>
		<h3>Freshwater Ecosystems</h3>
		<ul>
			<li><strong>Rivers and Streams</strong>: Flowing water systems</li>
			<li><strong>Lakes and Ponds</strong>: Standing water bodies</li>
			<li><strong>Wetlands</strong>: Marshy areas that filter water naturally</li>
		</ul>
		<div class="aqua-card-divider"></div>
	</div>
	<div class="aqua-card">
		<svg class="aqua-card-fish" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<ellipse cx="32" cy="32" rx="24" ry="12" fill="#4fc3f7"/>
			<ellipse cx="48" cy="32" rx="8" ry="4" fill="#0288d1"/>
			<ellipse cx="16" cy="32" rx="8" ry="4" fill="#0288d1"/>
			<circle cx="40" cy="30" r="2" fill="#fff"/>
			<circle cx="40" cy="30" r="1" fill="#111"/>
		</svg>
		<h2>Adaptations</h2>
		<ul>
			<li><strong>Gills</strong> for extracting oxygen from water</li>
			<li><strong>Streamlined bodies</strong> for efficient swimming</li>
			<li><strong>Swim bladders</strong> for buoyancy control</li>
			<li><strong>Specialized feeding</strong> structures for filter feeding or predation</li>
		</ul>
		<div class="aqua-card-divider"></div>
	</div>
	<div class="aqua-card">
		<svg class="aqua-card-fish" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<ellipse cx="32" cy="32" rx="24" ry="12" fill="#4fc3f7"/>
			<ellipse cx="48" cy="32" rx="8" ry="4" fill="#0288d1"/>
			<ellipse cx="16" cy="32" rx="8" ry="4" fill="#0288d1"/>
			<circle cx="40" cy="30" r="2" fill="#fff"/>
			<circle cx="40" cy="30" r="1" fill="#111"/>
		</svg>
		<h2>Food Chains</h2>
		<ol>
			<li><strong>Phytoplankton</strong> (primary producers)</li>
			<li><strong>Zooplankton</strong> (primary consumers)</li>
			<li><strong>Small fish</strong> (secondary consumers)</li>
			<li><strong>Large fish/marine mammals</strong> (tertiary consumers)</li>
		</ol>
	</div>
	<div class="aqua-footer">🌊 Thanks for diving into aquatic ecosystems! 🐟</div>
	<a class="aqua-footer" style="display:block;margin-top:12px;" href="/biology-chambers/">← Back to Biology Chambers Overview</a>
</div>
