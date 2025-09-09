---
title: Favourite Movies
layout: layout/base.njk
cssFile: movies.css
---


<h2 id="imgmovies">Movies</h2>
<p>There are sooooo many movies I love. I tried to make a list just for my own reference really, but also in case anyone wants some movie recs. </p>

**Note: This is a work in progress**

<div class="textbox">

<h3 id="imgmovmovies">General Movies</h3>

<div class="moviegallery">

{%- for favmovies in favmovies %}
{%- if favmovies.category == "General" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovjapan">Japanese Movies</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Japanese" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>


<div class="textbox">
<h3 id="imgmovwar">War Movies</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "War" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovaus">Australian Movies</h3>
<p>This includes Australian Horror</p>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Aussie" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovweird">Weird / Mind Fuck Movies</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Weird" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>


<div class="textbox">
<h3 id="imgmovhorror">Horror</h3>
<p>Australian Horror is in the Australian Movies section</p>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Horror" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovfolk">Folk Horror</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Folk Horror" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovkorean">Korean Horror</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Korean Horror" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovapoca">(Post) Apocalypse Horror</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Apoca" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovscifi">Science Fiction</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Scifi" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovtime">Science Fiction - Time Travel</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "SF Time Travel" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovmusic">Musicals</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Musicals" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovanime">Anime</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Anime" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>

<div class="textbox">
<h3 id="imgmovfamily">Family Movies</h3>
<div class="moviegallery">
{%- for favmovies in favmovies %}
{%- if favmovies.category == "Family" %} 
  {%- include "partials/favmovies.njk" %}
 {%- endif %}
{%- endfor %}
</div>
</div>
