---
title: Favourite Movies
layout: layout/base.njk
cssFile: media.css
script: filter.js
eleventyExcludeFromCollections: true
---
<!-- Filter Script Tutorial: 
https://www.w3schools.com/howto/howto_js_filter_elements.asp   
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
--> 

## Favourite Movies 

<div class="textbox">

There are sooooo many movies I love. I tried to make a list just for my own reference really, but also in case anyone wants some movie recs. 

**Note: This is a work in progress**

<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
<!--  <button class="btn" onclick="filterSelection('Favourite')">All Time Favs</button>
haunting, thriller, Love Story, Road Movie, On the Run, Creature Feature, Comedy, Friendship, psycho killers, -->
  <button class="btn" onclick="filterSelection('Thriller')">Thriller</button>
  <button class="btn" onclick="filterSelection('Scifi')">Science Fiction</button>
  <button class="btn" onclick="filterSelection('SF Time Travel')">Time Travel</button>
  <button class="btn" onclick="filterSelection('Horror')">Horror</button>
  <button class="btn" onclick="filterSelection('Folk Horror')">Folk Horror</button>
  <button class="btn" onclick="filterSelection('Korean Horror')">Korean Horror</button>
  <button class="btn" onclick="filterSelection('Aussie Horror')">Australian Horror</button>
  <button class="btn" onclick="filterSelection('Aussie')">Australian</button>
  <button class="btn" onclick="filterSelection('Japanese')">Japanese</button>
  <button class="btn" onclick="filterSelection('Weird')">Mind Fucks</button>
  <button class="btn" onclick="filterSelection('War')">War</button>
  <button class="btn" onclick="filterSelection('Apoca')">(Post) Apocalypse</button>
  <button class="btn" onclick="filterSelection('Musicals')">Musicals</button>
  <button class="btn" onclick="filterSelection('Anime')">Anime</button>
  <button class="btn" onclick="filterSelection('Family')">Family</button>
</div>

</div>

<div class="textbox">
<div class="gallery">
{%- for favmovies in favmovies %}

<div class="filterDiv {{ favmovies.category4 }} {{ favmovies.category1}} {{ favmovies.category2}} {{ favmovies.category3}} {{ favmovies.favourite }}"> 

<div class="item">
    <img src="/images/movies/posters/{{- favmovies.poster }}" alt="{{ favmovies.title }} movie poster">
    <div class="itemtxt">
        <div class="title">{{- favmovies.title }}</div>
        <div class="year">{{- favmovies.year }}</div>
    <div>
        {%- if favmovies.imdb != "" %} 
        <a href="{{ favmovies.imdb }}" target="_blank"><img src="/images/siteimgs/IMDb.png" class="icons" title="View on IMDB"></a> 
        {%- endif %} 
        {%- if favmovies.trailer != "" %} 
        <a href="{{ favmovies.trailer }}" target="_blank">
        <img src="/images/siteimgs/youtube.png" class="icons" title="View trailer on Youtube"></a>
        {%- endif%} 
    </div> 
        </div><!--albumtxt-->
    </div><!--album-->
    </div><!-- filterdiv -->

{%- endfor %}
</div>


<noscript>This page requires Javascript, sorry. </noscript> 
</div> <!-- textbox -->


 