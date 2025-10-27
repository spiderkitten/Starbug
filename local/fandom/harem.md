---
title: Favourite Characters
layout: layout/base.njk
cssFile: harem.css
---

<div class="textbox">

<h3>Favourite Characters</h3>

Characters I love! Character name / Actor Name / and where they are from. 

 
<div class="fcgallery">

{%- for harem in harem %}
<div class="character">
    <img src="/images/harem/{{- harem.image }}" alt="image of {{ harem.character}}">
<div class="charactertxt">
    <div><strong>{{- harem.character }}</strong></div>
    <div> {{- harem.actor }} </div>
    <div>{{- harem.franchise }}</div>
</div>
</div>
{%- endfor %}

</div>
 
</div>
