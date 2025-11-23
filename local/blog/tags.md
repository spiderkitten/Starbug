---
layout: layout/base.njk
pagination: 
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - blog
    - posts
    - JournalRPG
    - SoloRPG
    - JournalRPG_WIP
    - recipe
  addAllPagesToCollections: true
permalink: /blog/tags/{{ tag | slugify }}.html
eleventyExcludeFromCollections: true
eleventyComputed: 
  title: Posts Tagged With (( tag ))
---

<div class="textbox"> 

### Posts Tagged With {{ tag }}

<ul>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> <em>{{ post.date | htmlDateString }}</em> » {{ post.data.description }}</li>
{% endfor %}
</ul>

<a href="/blog/index.html"><strong><< Back to All Posts</strong></a>

</div>