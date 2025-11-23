---
title: Post Index
layout: "layout/base.njk" 
eleventyExcludeFromCollections: true
---

<div class="textbox">

### Posts 

#### All Posts

<ul>
{% for post in collections.blog | reverse %}
<li><strong>{{ post.date | htmlDateString }}</strong> <a href="{{post.url}}">{{post.data.title}}</a></li>
{% endfor %}
</ul>
</div>


 