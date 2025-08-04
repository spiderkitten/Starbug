---
title: Posts
layout: layout/base.njk
---

<h2>Post Archive</h2>
<div class="textbox">
<h3>All Posts </h3>

<ul>
{% for post in collections.posts reversed %}
<li><a href="{{post.url}}"> {{ post.data.title}}</a></li>
{% endfor %}
</ul>
</div>

 