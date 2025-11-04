---
title: Favourite Music
layout: layout/base.njk
cssFile: favmusic.css
eleventyExcludeFromCollections: true
---

<div class="textbox">

### Favourite Music

Some of my favourite music. Its mostly old stuff, sorry. I grew up in the 1970s/1980s so the songs of those eras are probably my main influence taste wise, but I generally like all kinds of music. 

**Note: This is a work in progress**



<div id="filterContainer">
  <button class="navbutton active" onclick="filterSelection('all')"> Show all</button>
  <button class="navbutton" onclick="filterSelection('favourite')">All Time Favs</button>
  <button class="navbutton" onclick="filterSelection('classical')">Classical</button>
  <button class="navbutton" onclick="filterSelection('Pre WWII')">Pre WWII</button>
  <button class="navbutton" onclick="filterSelection('50s')">50s</button>
  <button class="navbutton" onclick="filterSelection('60s')">60s</button>
  <button class="navbutton" onclick="filterSelection('70s')">70s</button>
  <button class="navbutton" onclick="filterSelection('80s')">80s</button>
  <button class="navbutton" onclick="filterSelection('90s')">90s</button>
  <button class="navbutton" onclick="filterSelection('2000s')">2000s</button>
  <button class="navbutton" onclick="filterSelection('2010s')">2010s</button>
  <button class="navbutton" onclick="filterSelection('2020s')">2020s</button>
  <button class="navbutton" onclick="filterSelection('musicals')">Musicals</button>
  <button class="navbutton" onclick="filterSelection('murder ballads')">Murder Ballads</button>
  <button class="navbutton" onclick="filterSelection('folk')">Folk</button>
  <button class="navbutton" onclick="filterSelection('disco')">Disco</button>
  <button class="navbutton" onclick="filterSelection('glam rock')">Glam Rock</button>
  <button class="navbutton" onclick="filterSelection('comedy')">Comedy</button>
  <button class="navbutton" onclick="filterSelection('australia')">Australian</button>
  <button class="navbutton" onclick="filterSelection('album')">Albums</button>



</div>

</div>

<div class="textbox">
<div class="recordgallery">
{%- for favmusic in favmusic %}
  {%- include "partials/favmusic.njk" %}
{%- endfor %}
</div>

 
<noscript>This page requires Javascript, sorry</noscript> 
</div> <!-- textbox -->

<!-- Filter Script 
Tutorial for filter: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
-->
<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDivMusic");
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