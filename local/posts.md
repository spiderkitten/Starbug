---
title: Posts
layout: layout/base.njk
---

<h2>Post Archive</h2>
<div class="textbox">



<!--### Site Wide Tag Cloud


<p class="center">{% for tag in collections -%}{% if tag[0] != "all" and tag[0] != "posts" %}<a href="../posts/tags/{{ tag[0] | slugify }}.html">{{ tag[0] }}</a> ({{ tag | length }}) {% endif %}{%- endfor %}</p>-->





### All Posts

<ul class="none">
{%- for post in collections.posts reversed -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>



</div>

 