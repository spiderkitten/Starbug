---
title: Favourite TV Shows
layout: layout/base.njk
cssFile: tvshows.css
---
<div class="textbox">

<h3>TV Shows</h3>
Just some TV Shows I love and recommend. 

**Note: This is a work in progress**

<div id="filterContainer">
  <button class="navbutton active" onclick="filterSelection('all')"> Show all</button>
  <button class="navbutton" onclick="filterSelection('favourite')">All Time Favs</button>
  <button class="navbutton" onclick="filterSelection('Childhood Favourite')">Childhood Favourite</button>
  <button class="navbutton" onclick="filterSelection('Murder Mystery')">Murder Mystery</button>
  <button class="navbutton" onclick="filterSelection('Scifi')">Sci-Fi</button>
  <button class="navbutton" onclick="filterSelection('Japanese')">Japanese</button>
  <button class="navbutton" onclick="filterSelection('Animated')">Animated</button>
  <button class="navbutton" onclick="filterSelection('British')">British</button> 
  <button class="navbutton" onclick="filterSelection('Cop Show')">Cop Show</button>
  <button class="navbutton" onclick="filterSelection('Found Family')">Found Family</button>
  <button class="navbutton" onclick="filterSelection('Comedy')">Comedy</button>
  <button class="navbutton" onclick="filterSelection('Dark Comedy')">Dark Comedy</button>
  <button class="navbutton" onclick="filterSelection('Horror')">Horror</button>
</div>

</div>

<div class="textbox">

<div class="tvshowgallery">
{%- for favtvshows in favtvshows %}
  {%- include "partials/favtvshows.njk" %}
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
  x = document.getElementsByClassName("filterDivTVshows");
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
