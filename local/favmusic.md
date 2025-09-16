---
title: Favourite Music
layout: layout/base.njk
cssFile: favmusic.css
---

## Favourite Music

Some of my favourite music. Its mostly old stuff, sorry. I grew up in the 1970s/1980s so the songs of those eras are probably my main influence taste wise, but I generally like all kinds of music. 

I've seperated it into Albums and Songs - Albums (at the bottom) are where I like the majority of the songs in the album, otherwise I've tried to sort some of the songs into eras/genres so its easier to look through. There should be clickable links to Youtube and Spotify so you can listen there should you choose to. 

**Note: This is a work in progress**

<div class="textbox">

### All Time Favourite Songs 

<div class="albumgallery">
{%- for favmusic in favmusic %}
{%- if favmusic.category == "All Time Favs" %} 
  {%- include "partials/favmusic.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>


<div class="textbox">

### Pre WWII Songs 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "Pre WWII" %} 
  {% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>

<div class="textbox">

### 1960s and 1970s Music 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "60s" or favmusic.category == "70s" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>

<div class="textbox">

### 1980s Music 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "80s" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>
  
    
<div class="textbox">

### 1990s Music 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "90s" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>
    
<div class="textbox">

### 2000s Onwards Music 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "2000s"  or favmusic.category == "2010s"  or favmusic.category == "2020s" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>    
    
<div class="textbox">

### Musicals / Soundtracks / Caberet 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "musicals" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>    

<div class="textbox">

### Classical 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "classical" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>  

<div class="textbox">

### Albums 
<div class="albumgallery">
{% for favmusic in favmusic %}
{% if favmusic.category == "albums" %} 
{% include "partials/favmusic.njk" %}
 {% endif %}
{% endfor %}
</div>
</div>  