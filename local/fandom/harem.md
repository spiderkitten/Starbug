---
title: Favourite Characters
layout: layout/base.njk
cssFile: harem.css
---

<h2>Favourite Characters</h2>


<div class="textbox">
<div class="fcgallery">

{%- for harem in harem %}
<div class="character">
    <img src="/images/harem/{{- harem.image }}">
        <div class="charactertxt"><strong>{{- harem.character }}</strong><br>{{- harem.franchise }}</div>

</div>
{%- endfor %}

</div>
 

