---
title: Favourite Music
layout: layout/base.njk
cssFile: media.css
script: filter.js
eleventyExcludeFromCollections: true
---
<!-- Filter Script Tutorial: 
https://www.w3schools.com/howto/howto_js_filter_elements.asp   
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
-->  

<div class="textbox">

## Favourite Music

Some of my favourite music. Its mostly old stuff, sorry. I grew up in the 1970s/1980s so the songs of those eras are probably my main influence taste wise, but I generally like all kinds of music. 

**Note: This is a work in progress**

<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('favourite')">All Time Favs</button>
  <button class="btn" onclick="filterSelection('classical')">Classical</button>
  <button class="btn" onclick="filterSelection('Pre WWII')">Pre WWII</button>
  <button class="btn" onclick="filterSelection('50s')">50s</button>
  <button class="btn" onclick="filterSelection('60s')">60s</button>
  <button class="btn" onclick="filterSelection('70s')">70s</button>
  <button class="btn" onclick="filterSelection('80s')">80s</button>
  <button class="btn" onclick="filterSelection('90s')">90s</button>
  <button class="btn" onclick="filterSelection('2000s')">2000s</button>
  <button class="btn" onclick="filterSelection('2010s')">2010s</button>
  <button class="btn" onclick="filterSelection('2020s')">2020s</button>
  <button class="btn" onclick="filterSelection('musicals')">Musicals</button>
  <button class="btn" onclick="filterSelection('murder ballads')">Murder Ballads</button>
  <button class="btn" onclick="filterSelection('folk')">Folk</button>
  <button class="btn" onclick="filterSelection('disco')">Disco</button>
  <button class="btn" onclick="filterSelection('glam rock')">Glam Rock</button>
  <button class="btn" onclick="filterSelection('comedy')">Comedy</button>
  <button class="btn" onclick="filterSelection('australia')">Australian</button>
  <button class="btn" onclick="filterSelection('album')">Albums</button>
</div><!--mybtncontainer-->
</div><!--textbox-->


<div class="textbox">
<div class="gallery">

{%- for favmusic in favmusic %}

<div class="filterDiv {{ favmusic.genre1 }} {{ favmusic.genre2 }} {{ favmusic.genre3 }} {{ favmusic.country }} {{ favmusic.favourite }} {{ favmusic.album}}"> 

<div class="item">

{%- if favmusic.album == "album" %} 
<div style="text-align: center;">ALBUM</div> 
{%- endif%} 
<img src="/images/music/{{- favmusic.cover }}" alt="{{ favmusic.title}} Album Art">

<div class="itemtxt">
      <div class="title">{{- favmusic.title }}</div>
      <div class="artist">{{- favmusic.artist }}</div>
      <div class="year">{{- favmusic.year }}</div>

<div> <!-- youtube spotify-->
{%- if favmusic.youtube != "" %} 
        <a href="{{ favmusic.youtube }}" target="_blank">
          <img src="/images/siteimgs/youtube.png" class="icons" title="Listen on Youtube"></a>
          {%- endif%} 
          
          {%- if favmusic.spotify != "" %} 
          <a href="{{ favmusic.spotify }}" target="_blank"><img src="/images/siteimgs/spotify.png" class="icons" title="Listen on Spotify"></a> 
          {%- endif %} 
</div><!-- youtube spotify-->
    </div><!--recordtxt-->
  </div><!--record-->
</div><!--filterdiv-->

{%- endfor %}

</div> <!--recordgallery-->
<noscript>This page requires Javascript, sorry</noscript> 
</div> <!-- textbox -->
