---
title: Space Cadet
tagline: Just a girl floating through space...
layout: layout/base.njk

---

<!-- 
<h3>News</h3>
<ul>
{% for post in collections.news %}
<li><a href="{{post.url}}">{{ post.data.posttitle }}</a></li>
{% endfor %}
</ul>
-->

<h3>All Posts</h3>
<ul>
{% for post in collections.posts %}
<li><a href="{{post.url}}"> {{ post.data.posttitle}}</a></li>
{% endfor %}
</ul>
