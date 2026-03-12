---
layout: layout/base.njk
title: Archives
description: 
eleventyExcludeFromCollections: true
---
<div class="textbox">



## Tag Cloud
 
<!-- all the tags ordered by frequency-->
<p style="text-align:center;">
{% for tag in collections -%}{% if tag[0] != "all" and tag[0] != "posts" %}<a href="../tags/{{ tag[0] | slugify }}.html">{{ tag[0] }}</a> ({{ tag | length }}) {% endif %}{%- endfor %}
</p>

</div>

<div class="bullets">
<div class="textbox">

## All Posts

<!-- all posts tagged "posts" in reverse chronological order-->
<div class="postarchive">
<ul >
{% assign top_posts = collections.all | reverse %}
{%- for post in top_posts -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
</div><!--postarchive-->


</div><!--textboxx-->
</div><!--bullets-->