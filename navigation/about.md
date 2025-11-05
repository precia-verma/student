---
layout: post
title: Blog/Retrospective
permalink: /about/
comments: true
---

<style>
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 60px 20px;
    border-radius: 15px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.hero-section h1 {
    color: white;
    font-size: 3em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-section p {
    color: #f0f0f0;
    font-size: 1.4em;
    font-style: italic;
}

.growth-table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 40px 0;
}

.growth-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.growth-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.growth-card.beginning {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.growth-card.now {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.growth-card h3,
.growth-card li,
.growth-card p {
    color: #000000;
}

.sprint-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    margin: 30px 0;
    border-left: 5px solid #667eea;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.sprint-section:nth-child(even) {
    border-left-color: #f093fb;
}

.sprint-section h3 {
    color: #000000 !important;
    font-size: 1.8em;
    margin-bottom: 15px;
}

.sprint-section p,
.sprint-section li,
.sprint-section blockquote,
.sprint-section strong {
    color: #000000;
}

.key-takeaway {
    background: #fff4e6;
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid #ffa726;
    margin: 20px 0;
    font-weight: 500;
    color: #000000;
}

.natm-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 15px;
    margin: 40px 0;
}

.natm-section h3 {
    color: white;
}

.highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.highlight-item {
    background: rgba(255,255,255,0.2);
    padding: 15px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

.stats-table {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    margin: 20px 0;
}

.stats-table table {
    width: 100%;
}

.stats-table tr:nth-child(even) {
    background: #f8f9fa;
}

.stats-table td {
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    color: #ffffff !important;
}

.stats-table th {
    color: #ffffff !important;
}

.stats-table h3 {
    color: #000000 !important;
}

.stats-table table {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
}

.stats-table tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
}

.stats-table tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.05);
}

.future-plans {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    padding: 30px;
    border-radius: 15px;
    margin: 30px 0;
}

.timeline-item {
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin: 15px 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.timeline-item h4,
.timeline-item li,
.timeline-item p {
    color: #000000;
}

.community-section {
    background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
    color: white;
    padding: 40px;
    border-radius: 15px;
    margin: 40px 0;
    text-align: center;
}

.community-section blockquote {
    border-left: 4px solid white;
    padding-left: 20px;
    font-size: 1.2em;
    margin: 20px 0;
}

.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.image-gallery img {
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}

.image-gallery img:hover {
    transform: scale(1.05);
}

/* Global text color override */
body p,
body li,
body span,
body div,
body blockquote,
.content p,
.content li,
.content span,
.content div {
    color: #000000 !important;
}

/* Allow links to be clickable and styled */
a {
    pointer-events: auto !important;
    cursor: pointer !important;
}

/* Specific section overrides */
.future-plans h2,
.future-plans h3,
.future-plans h4,
.future-plans p,
.future-plans li {
    color: #000000 !important;
}

.stats-table p,
.stats-table span {
    color: #000000 !important;
}

/* Preserve white text in colored backgrounds */
.hero-section,
.hero-section *,
.natm-section,
.natm-section *,
.community-section,
.community-section * {
    color: white !important;
}

.highlight-item {
    color: white !important;
}

.closing-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px;
    border-radius: 15px;
    margin: 40px 0;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.closing-section h3,
.closing-section p {
    color: white !important;
}

/* GitHub links section */
.github-links {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    margin: 30px 0;
}

.github-links h3 {
    color: #667eea !important;
    margin-bottom: 20px;
}

.github-links li {
    color: #000000 !important;
    margin: 10px 0;
    font-size: 1.1em;
}

.github-links a {
    color: #667eea !important;
    text-decoration: underline;
    font-weight: 600;
    transition: all 0.3s ease;
    pointer-events: auto !important;
    cursor: pointer !important;
    display: inline !important;
}

.github-links a:hover {
    color: #764ba2 !important;
    text-decoration: underline;
}

.github-links a:visited {
    color: #667eea !important;
}

.github-links a:active {
    color: #764ba2 !important;
}

@media (max-width: 768px) {
    .growth-table {
        grid-template-columns: 1fr;
    }
    
    .hero-section h1 {
        font-size: 2em;
    }
}
</style>

<div class="hero-section" align="center" markdown="1">

# 🌟 Blog/Retrospective 🌟

<p><em>My Computer Science Journey This Year</em></p>

</div>

## 📊 Then vs. Now: My Growth Journey

<div class="growth-table">
<div class="growth-card beginning" markdown="1">

### 🌱 Beginning of the Year
- 📚 Basic understanding of coding (I only knew what block coding was)
- 🤔 Limited knowledge
- ❓ Unfamiliar with VSCode
- 🚫 No experience with GitHub
- 🐛 Struggled with debugging
- 👤 Worked mostly independently

</div>

<div class="growth-card now" markdown="1">

### 🚀 Now
- 🎨 Good web development skills
- 💻 Proficient in JavaScript
- ✅ Confident using Git/GitHub workflows
- 🤖 Used AI to better help with my coding journey
- 🔧 Developed strong debugging skills
- 👥 Effective team collaborator

</div>
</div>

---

## 🎯 Key Learnings from 3 Sprints

<div class="sprint-section" markdown="1">

### 🛠️ Sprint 1: Tools & Setup
[Theme Changing Blog](https://precia-verma.github.io/student/themechanging)

> **What I Learned:**
> - ⚙️ Setting up development environment with VSCode
> - 💻 Using terminal commands
> - 🔄 How to sync GitHub repositories and VSCode
> - 📁 File navigation
> - 📝 Markdown for documentation

<div class="key-takeaway">
<strong>💡 Key Takeaway:</strong> Having the right tools and knowing how to use them is the base of good development.
</div>

</div>

<div class="sprint-section" markdown="1">

### 💻 Sprint 2: Fundamentals of JavaScript

📚 **Lessons Created:**
- 🔵 [Boolean Lesson](https://pages.opencodingsociety.com/javascript/boolean-blog)
- 📊 [Array Lesson](https://pages.opencodingsociety.com/javascript/array/lesson)

> **What I Learned:**
> - 📝 JavaScript syntax, variables, and data types
> - ⚡ Functions, loops, and conditionals
> - 🎯 DOM manipulation
> - 🗂️ Arrays, objects, and data structures
> - 🐞 Debugging with console.log and browser dev tools

<div class="key-takeaway">
<strong>💡 Key Takeaway:</strong> JavaScript is wonderful for creating websites and understanding its usage opened up endless possibilities.
</div>

**📝 Reflection on Presentations:**  
I believe that we did excellent with our Boolean presentation, but not as great with our Array presentation. Our group faced one of the biggest and most feared challenges right before our presentation, which was that our code wasn't functioning the way we wanted it to. We faced a lot of struggles and obstacles but at the end we were able to present with what we had and accepted our grade, focusing on what to do next and a positive mindset for the future ahead.

</div>

<div class="sprint-section" markdown="1">

### 🎮 Sprint 3: Quest of Spook - Gamify

🕹️ **[Play the Mansion Level 2 Game](https://pages.opencodingsociety.com/gamify/mansion2)**

> **What I Learned:**
> - 🎯 Game logic and state management
> - 👤 User interaction and experience design
> - 🎮 Working with javascript for a game and using markdown along with a javascript file as well
> - 🎨 Creating engaging visual designs
> - 🤝 Team collaboration on a complex project

<div class="key-takeaway">
<strong>💡 Key Takeaway:</strong> Our game made learning fun and applying concepts in a game context helped solidify my understanding of programming concepts.
</div>

</div>

---

<div class="natm-section" markdown="1">

## 🎪 Night at the Museum (N@tM) Experience

### 🌟 How It Went

N@tM was an incredible experience! Presenting our Level 2 Mansion game to visitors, parents, and CSA/CSP people was both nerve-wracking and exciting. Seeing a few people actually play and also enjoy what we created was incredibly rewarding.

<div class="highlights-grid">
<div class="highlight-item">✅ Had over 10+ people try/see our game</div>
<div class="highlight-item">💬 Received positive feedback on the memory game</div>
<div class="highlight-item">👀 Got to see other amazing projects from other classes</div>
<div class="highlight-item">🎤 Learned presentation and communication skills</div>
<div class="highlight-item">🏆 Felt proud of our team's accomplishment</div>
</div>

</div>

### 📸 Comments from Visitors:

<div class="image-gallery">

<img width="397" height="641" alt="Visitor Comment 1" src="https://github.com/user-attachments/assets/9a7f4c56-c235-4e8e-b42f-94c6d5a3e8c0" />

<img width="397" height="641" alt="Visitor Comment 2" src="https://github.com/user-attachments/assets/e6c84edb-5a07-46a3-93af-0f43a15dc9ce" />

<img width="397" height="641" alt="Visitor Comment 3" src="https://github.com/user-attachments/assets/ba2fede3-81f5-45e8-8159-404fee7dbd93" />

</div>

---

<div class="future-plans" markdown="1">

## 🔮 Future Plans & Goals

### 🎯 What I Want to Do Next on the Project (Given Time)

<div class="timeline-item" markdown="1">

#### 📅 Short-term (1-2 weeks)
- 🔊 Add sound effects and background music to enhance the gaming experience
- 💡 Implement a hints system for players who get stuck on puzzles
- 🐛 Fix any remaining bugs and polish up the game

</div>

<div class="timeline-item" markdown="1">

#### 📅 Medium-term (3-4 weeks)
- 🎚️ Create 2-3 additional levels with increasing difficulty
- ⏱️ Add a timer feature and scoring system to make it more competitive
- 🏅 Develop a leaderboard to track top players

</div>

<div class="timeline-item" markdown="1">

#### 📅 Long-term (1-2 months)
- 👥 Implement a multiplayer mode where friends can collaborate on puzzles
- 🛠️ Create a level editor tool that would allow players to build their own custom mansion rooms by choosing puzzle types, setting difficulty, and arranging room layouts - then save and share their creations with other players
- 🎮 Add different difficulty modes (easy, medium, hard)

</div>

</div>

---

### 📚 What I Want to Learn Next in CompSci

<div class="stats-table" markdown="1">

| Topic | Description |
|-------|-------------|
| 🗄️ **Backend Development** | Learning how to build the "behind-the-scenes" parts of websites that store and manage user data (like login systems and databases) |
| 🤖 **Machine Learning/AI Basics** | Understanding how computers can learn patterns and make predictions (like recommendation systems on Netflix or Spotify) |
| 📱 **Mobile App Development** | Creating apps for phones instead of just websites |
| 🔒 **Cybersecurity** | Learning how to protect websites and data from hackers |
| 🧩 **Better Problem-Solving Skills** | Getting faster at figuring out coding challenges and writing cleaner code |
| 🎨 **Own Game/Website** | I want to learn how to make my own website/game without using Mr.Mortensen's repository |

</div>

---

## 📈 Analytics Review

<div class="stats-table" markdown="1">

### 📊 Project Statistics

| Metric | Count |
|--------|-------|
| 📝 Total Commits | 150+ |
| 🗂️ Files Created | 35+ |
| 💻 Lines of Code Written | 119,602+ |
| 🐛 Bugs Fixed | Too many to count! |
| ⏱️ Hours Spent Coding | 200+ |
| 🤝 Team Members Collaborated With | 5 |
| 🎮 Games Developed | 1 |
| 📊 Presentations Given | 3-4 |

</div>

---

<div class="github-links" markdown="1">

### 🔗 GitHub Activity Links

- 📂 [All Workflow runs in my STUDENT repo](https://github.com/precia-verma/student/actions)
- 📂 [All Workflow runs in my GROUP repo](https://github.com/precia-verma/Group-projects/actions)
- 🎯 [Dashboard for Open Coding Society](https://pages.opencodingsociety.com/dashboard)

</div>

---

<div class="community-section" markdown="1">

## ✨ Something Cool I Want to Share ✨

### 🤝 The Coding Community is Really Nice

<blockquote>
I used to think programmers worked alone and never talked to anyone (like in movies). But that's totally wrong! 
</blockquote>

**Everyone helps each other out.** 

- 💬 My classmates text me back late at night when I'm stuck
- 🎓 People from other advanced classes like CSP/CSA help me when I'm stuck at Office Hours, like Vibha or anyone else available
- 🌟 People WANT you to succeed!

It's like having a whole team cheering you on. That's what makes learning Computer Science so much fun - **you're never alone!**

</div>

---

<div class="closing-section">

<h3>✨ Thanks for reading my Computer Science journey! 🚀 ✨</h3>

<p>Keep coding, keep learning, keep growing! 💻✨</p>

</div>

