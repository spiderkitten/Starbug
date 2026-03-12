---
title: Favourite TV
layout: layout/base.njk
cssFile: media.css
script: filter.js
eleventyExcludeFromCollections: true
---
<!-- Filter Script Tutorial: 
https://www.w3schools.com/howto/howto_js_filter_elements.asp   
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
--> 

## Favourite TV Shows

<div class="textbox">

Just some TV Shows I love and recommend. 

**Note: This is a work in progress**

<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('favourite')">All Time Favs</button>
  <button class="btn" onclick="filterSelection('Childhood Favourite')">Childhood Favourite</button>
  <button class="btn" onclick="filterSelection('Murder Mystery')">Murder Mystery</button>
  <button class="btn" onclick="filterSelection('Scifi')">Sci-Fi</button>
  <button class="btn" onclick="filterSelection('Japanese')">Japanese</button>
  <button class="btn" onclick="filterSelection('Animated')">Animated</button>
  <button class="btn" onclick="filterSelection('British')">British</button> 
  <button class="btn" onclick="filterSelection('Cop Show')">Cop Show</button>
  <button class="btn" onclick="filterSelection('Found Family')">Found Family</button>
  <button class="btn" onclick="filterSelection('Comedy')">Comedy</button>
  <button class="btn" onclick="filterSelection('Dark Comedy')">Dark Comedy</button>
  <button class="btn" onclick="filterSelection('Horror')">Horror</button>
</div>

</div>

<div class="textbox">
<div class="gallery">
{%- for favtvshows in favtvshows %}


<div class="filterDiv {{ favtvshows.category4 }} {{ favtvshows.category1}} {{ favtvshows.category2}} {{ favtvshows.category3}} {{ favtvshows.favourite }}"> 

<div class="item">
    <img src="/images/tvshows/{{- favtvshows.poster }}" alt="{{ favtvshows.title }} poster">
    <div class="itemtxt">
        <div class="title">{{- favtvshows.title }}</div>
        <div class="year">{{- favtvshows.yearstart }}-{{ favtvshows.yearend}}</div>
        <div class="year"> {{- favtvshows.seasons }} Seasons</div>
        <div class="year">{{ favtvshows.complete }}</div>
    <div>
        {%- if favtvshows.imdb != "" %} 
        <a href="{{ favtvshows.imdb }}" target="_blank"><img src="/images/siteimgs/IMDb.png" class="icons" title="View on IMDB"></a> 
        {%- endif %} 
        {%- if favtvshows.trailer != "" %} 
        <a href="{{ favtvshows.trailer }}" target="_blank">
        <img src="/images/siteimgs/youtube.png" class="icons" title="View trailer on Youtube"></a>
        {%- endif%} 
    </div> 
        </div><!--txt-->
    </div><!--show-->
    </div><!-- filterdiv --> 


{%- endfor %}
</div>


<noscript>This page requires Javascript, sorry. </noscript> 
</div> <!-- textbox -->

</div>