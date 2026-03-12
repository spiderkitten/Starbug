---
layout: layout/base.njk
title: Blog
description: 
eleventyExcludeFromCollections: true
---
<div class="textbox">

<!-- 
## Tag Cloud
--> 
<!-- all the tags ordered by frequency
<p style="text-align:center;">
</p>
</div>-->


<div class="bullets">


## Blog Posts

<!-- all posts tagged "posts" in reverse chronological order-->
<div class="postarchive">
<ul >
{% assign top_posts = collections.posts | reverse %}
{%- for post in top_posts -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
</div><!--postarchive-->



</div><!--bullets-->