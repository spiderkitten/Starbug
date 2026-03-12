---
layout: layout/base.njk
title: Stutter (microblog)
description: 
eleventyExcludeFromCollections: true
---
<div class="textbox">

## Stutter (microblog) 

Stutter is my personal version of twitter I guess, stands for "STUpid twiTTER" heh. Just my place for very short, mostly stupid thoughts. Not tagged or sorted by anything than date. 

Comment box at the bottom of the page! :)

  <div class="stutter">
    {%- for stutter in stutter reversed %}
<div><h4>{{stutter.date}}</h4></div>
<div>{{stutter.content}}</div>
    {%- endfor %}
  </div>
</div>

<div class="textbox">
<h3>Comments</h3>
	{%- include "partials/commentbox.njk" %}
</div>