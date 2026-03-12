---
title: Favourite Characters
layout: layout/base.njk
cssFile: media.css
eleventyExcludeFromCollections: true
---

## Favourite Characters

<div class="textbox">


Characters I love! Character name / Actor Name / and where they are from. 

 
<div class="gallery">

{%- for harem in harem %}
<div class="item">
    <img src="/images/harem/{{- harem.image }}" alt="image of {{ harem.character}}">
<div class="itemtxt">
    <div class="title">{{- harem.character }} </div>
    <div class="artist"> {{- harem.actor }} </div>
    <div>{{- harem.franchise }}</div>
</div>
</div>
{%- endfor %}

</div>
 
</div>
