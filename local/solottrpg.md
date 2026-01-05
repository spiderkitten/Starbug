---
title: Solo TTRPG Game Journal
layout: layout/base.njk
eleventyExcludeFromCollections: true
---
## Solo TTRPG Game Journal

<div class="textbox">

#### Notes 

This is an index of any Solo TTRPG game journals I have posted to my site. I'm still trying the whole RPG thing out, so there are only a few things so far, but I am hopefull that I will play more! I'm going write a bit about each RPG and also include any stories I wrote, and/or game experiences I had playing them. 


### Solo Journalling RPGs

Journalling RPGs lean heavily into being more like creative writing prompts within a universe, rather then an adventure game.

#### Complete Solo Journal RPGs

<dl>
{%- for post in collections.JournalRPG -%}
<dt><a href="{{post.url}}"> {{ post.data.JournalRPGtitle}}</a> 
<dd style="padding-bottom: 20px;">{{ post.data.description}}
{% endfor %}
</dl>

#### In Progress

<dl>
 {%- for post in collections.JournalRPG_WIP -%}
<dt><a href="{{post.url}}"> {{ post.data.JournalRPGtitle}}</a> 
<dd style="padding-bottom: 20px;">{{ post.data.description}} 
 {% endfor %}
</dl>



### Solo RPGs

#### Complete Solo RPGs

<dl>
{%- for post in collections.SoloRPG -%}
<dt><a href="{{post.url}}"> {{ post.data.JournalRPGtitle}}</a> 
<dd style="padding-bottom: 20px;">{{ post.data.description}} 
{% endfor %}
</dl>


</div>