---
title: Book Log
layout: layout/base.njk
cssFile: "books.css"
---



<div class="textbox">

### Reading Log

A log of things I have read. So far going back to 2021, but I have records going back to 2010, so will be adding those over time. 

The keyword filters are a work in progress and subject to change. 

<div id="filterContainer">
  <button class="navbutton active" onclick="filterSelection('all')"> Show all</button>
  <button class="navbutton" onclick="filterSelection('2025')">2025</button>
  <button class="navbutton" onclick="filterSelection('2024')">2024</button>
  <button class="navbutton" onclick="filterSelection('2023')">2023</button>
  <button class="navbutton" onclick="filterSelection('2022')">2022</button>
  <button class="navbutton" onclick="filterSelection('2021')">2021</button>

  <button class="navbutton" onclick="filterSelection('five')"><img src="/images/books/ratings/fivestar.gif"></button>
  <button class="navbutton" onclick="filterSelection('four')"><img src="/images/books/ratings/fourstar.gif"></button>
  <button class="navbutton" onclick="filterSelection('three')"><img src="/images/books/ratings/threestar.gif"></button>
  <button class="navbutton" onclick="filterSelection('two')"><img src="/images/books/ratings/twostar.gif"></button>
  <button class="navbutton" onclick="filterSelection('one')"><img src="/images/books/ratings/onestar.gif"></button>

  <button class="navbutton" onclick="filterSelection('horror')">Horror</button>
  <button class="navbutton" onclick="filterSelection('scifi')">Sci-Fi</button>
  <button class="navbutton" onclick="filterSelection('mystery')">Mystery</button>
  <button class="navbutton" onclick="filterSelection('fantasy')">Fantasy</button>
  <button class="navbutton" onclick="filterSelection('humour')">Humour</button>
  <button class="navbutton" onclick="filterSelection('LGBTQ')">LGBTQ</button>
  <button class="navbutton" onclick="filterSelection('novella')">Novella</button>
  <button class="navbutton" onclick="filterSelection('cozy')">Cozy</button>
  <button class="navbutton" onclick="filterSelection('comic')">Comic</button>
  <button class="navbutton" onclick="filterSelection('slasher')">Slasher</button>
  <button class="navbutton" onclick="filterSelection('found family')">Found Family</button>
  <button class="navbutton" onclick="filterSelection('theme park')">Theme Parks</button>
  <button class="navbutton" onclick="filterSelection('adventure')">Adventure</button>
  <button class="navbutton" onclick="filterSelection('historical')">Historical</button>
 <button class="navbutton" onclick="filterSelection('thriller')">Thriller</button>
  <button class="navbutton" onclick="filterSelection('space')">Space</button>
  <button class="navbutton" onclick="filterSelection('oldies')">Oldies</button>
  <button class="navbutton" onclick="filterSelection('books about books')">Books about Books</button>
  <button class="navbutton" onclick="filterSelection('summer camp')">Summer Camp</button>
  <button class="navbutton" onclick="filterSelection('underwater')">Underwater</button>

<!-- ai, heist,  dinosaurs, non-fiction, medical, graphic novel, japanese, hopepunk,  military, mythology, dragons, graphic novel, magical realism, urban fantasy, boarding school, tea and coffee, baking, survival, short stories, indigenous, cult, dystopian, animals, urban fantasy, witches,   

  <button class="navbutton" onclick="filterSelection('classic')">Classic</button>
  <button class="navbutton" onclick="filterSelection('solarpunk')">Solarpunk</button>
  <button class="navbutton" onclick="filterSelection('apocalypse')">Apocalypse</button>
  <button class="navbutton" onclick="filterSelection('vampires')">Vampires</button>
  <button class="navbutton" onclick="filterSelection('robots')">Robots</button>
  <button class="navbutton" onclick="filterSelection('ikea')">Ikea</button>
  <button class="navbutton" onclick="filterSelection('clowns')">Clowns</button>
  <button class="navbutton" onclick="filterSelection('female detective')">Female Detective</button>
  <button class="navbutton" onclick="filterSelection('spooky')">Spooky</button>
-->

</div>
</div>
<div class="textbox">

<div class="bookgallery">
    {%- for books in books -%}
        {%- include "partials/books.njk" -%}
    {%- endfor -%}
</div>
</div>
<noscript>This page requires Javascript, sorry. Don't have JS? check the static version of this page starting here:  
[https://starbug.neocities.org/books/2025reads.html](https://starbug.neocities.org/books/2025reads.html)
</noscript> 
</div><!-- textbox -->

<!-- Filter Script 
Tutorial for filter: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
-->
<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDivBooks");
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