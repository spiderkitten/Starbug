---
title: Favourite Movies
layout: layout/base.njk
cssFile: movies.css
---
<div class="textbox">

<h3 id="imgmovies">Movies</h2>
There are sooooo many movies I love. I tried to make a list just for my own reference really, but also in case anyone wants some movie recs. 

**Note: This is a work in progress**

<div id="filterContainer">
  <button class="navbutton active" onclick="filterSelection('all')"> Show all</button>
  <!--<button class="navbutton" onclick="filterSelection('Favourite')">All Time Favs</button>
haunting, thriller, Love Story, Road Movie, On the Run, Creature Feature, Comedy, Friendship, psycho killers, -->
  <button class="navbutton" onclick="filterSelection('Thriller')">Thriller</button>
  <button class="navbutton" onclick="filterSelection('Scifi')">Science Fiction</button>
  <button class="navbutton" onclick="filterSelection('SF Time Travel')">Time Travel</button>
  <button class="navbutton" onclick="filterSelection('Horror')">Horror</button>
  <button class="navbutton" onclick="filterSelection('Folk Horror')">Folk Horror</button>
  <button class="navbutton" onclick="filterSelection('Korean Horror')">Korean Horror</button>
  <button class="navbutton" onclick="filterSelection('Aussie Horror')">Australian Horror</button>
  <button class="navbutton" onclick="filterSelection('Aussie')">Australian</button>
  <button class="navbutton" onclick="filterSelection('Japanese')">Japanese</button>
  <button class="navbutton" onclick="filterSelection('Weird')">Mind Fucks</button>
  <button class="navbutton" onclick="filterSelection('War')">War</button>
  <button class="navbutton" onclick="filterSelection('Apoca')">(Post) Apocalypse</button>
  <button class="navbutton" onclick="filterSelection('Musicals')">Musicals</button>
  <button class="navbutton" onclick="filterSelection('Anime')">Anime</button>
  <button class="navbutton" onclick="filterSelection('Family')">Family</button>
</div>

</div>

<div class="textbox">
<div class="moviegallery">
{%- for favmovies in favmovies %}
  {%- include "partials/favmovies.njk" %}
{%- endfor %}
</div>


<noscript>This page requires Javascript, sorry. </noscript> 
</div> <!-- textbox -->

</div>
<!-- Filter Script 
Tutorial for filter: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
-->
<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDivMovies");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("navbutton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>
 