---
title: Posts
layout: layout/base.njk
description: archive of all posts

---

<!-- 
<h3>News</h3>
<ul>
{% for post in collections.news %}
<li><a href="{{post.url}}">{{ post.data.posttitle }}</a></li>
{% endfor %}
</ul>
-->

<h2>Post Archive</h2>
<p>A listing of all my posts</p>
<div class="textbox">
<h3>All Posts</h3>

<ul>
{% for post in collections.posts %}
<li><a href="{{post.url}}"> {{ post.data.posttitle}}</a>  </li>
{% endfor %}
</ul>
</div>


