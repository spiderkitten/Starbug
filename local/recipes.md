---
title: Space Cadet
tagline: Just a girl floating through space...
layout: layout/base.njk
---

<h2>Recipes</h2>

<p>test</p>
<ul>
{% for post in collections.recipe reversed %}
<li><a href="{{post.url}}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
