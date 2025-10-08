---
layout: base
title: Homework Assignments
permalink: /homework/
---

<div style="text-align:center; padding: 20px 0;">
  <h1 style="color: #4a86e8; font-size: 2.5em;">📚 Homework Assignments</h1>
</div>

<div class="posts" style="max-width: 800px; margin: 0 auto; padding: 20px;">
  {% assign homework_posts = site.categories.Homework | sort: 'date' | reverse %}
  {% for post in homework_posts %}
    <article class="post" style="margin-bottom: 40px; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #f9f9f9;">
      <h2 style="margin-top: 0;"><a href="{{ site.baseurl }}{{ post.url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h2>
      
      {% if post.description %}
      <div class="entry" style="margin: 10px 0; color: #666;">
        {{ post.description }}
      </div>
      {% endif %}
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
        <a href="{{ site.baseurl }}{{ post.url }}" class="read-more" style="background-color: #4a86e8; color: white; padding: 8px 15px; border-radius: 4px; text-decoration: none;">Read More</a>
        
        {% if post.author %}
        <span style="color: #888; font-style: italic; font-size: 0.9em;">By: {{ post.author }}</span>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>