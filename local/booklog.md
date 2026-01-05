---
title: Book Log
layout: layout/base.njk
cssFile: "books.css"
eleventyExcludeFromCollections: true
---

<div class="textbox">

## Reading Log

A log of things I have read. I almost didn't add ratings, because I find them so subjective, and to be honest, I do actually use a browser addon to block ratings on goodreads, because I don't want to be influenced by ratings - I want to read a book and make my own decision about it. But the stars do look pretty lol and some people like ratings so here we are. Note that there are a lot of three star rated books. I suggest just checking the other ratings. 

<strong>Note:</strong> I am aware the book covers are quite large on larger screens. I'll fix it eventually, sorry lol 

<div id="filterContainer">
  <button class="navbutton active" onclick="filterSelection('all')"> Show all</button>
  <button class="navbutton" onclick="filterSelection('favourite')">Favs</button>
  <button class="navbutton" onclick="filterSelection('2025')">2025</button>
  <button class="navbutton" onclick="filterSelection('2024')">2024</button>
  <button class="navbutton" onclick="filterSelection('2023')">2023</button>
  <button class="navbutton" onclick="filterSelection('2022')">2022</button>
  <button class="navbutton" onclick="filterSelection('2021')">2021</button>
  <button class="navbutton" onclick="filterSelection('2020')">2020</button>
  <button class="navbutton" onclick="filterSelection('2019')">2019</button>
  <button class="navbutton" onclick="filterSelection('2018')">2018</button>
  <button class="navbutton" onclick="filterSelection('2017')">2017</button>
  <button class="navbutton" onclick="filterSelection('2016')">2016</button>
  <button class="navbutton" onclick="filterSelection('pre2009')">Pre 2009</button>

 <button class="navbutton" onclick="filterSelection('five')"><img src="/images/books/ratings/fivestar.gif"></button> <button class="navbutton" onclick="filterSelection('four')"><img src="/images/books/ratings/fourstar.gif"></button> <button class="navbutton" onclick="filterSelection('three')"><img src="/images/books/ratings/threestar.gif"></button> <button class="navbutton" onclick="filterSelection('two')"><img src="/images/books/ratings/twostar.gif"></button> <button class="navbutton" onclick="filterSelection('one')"><img src="/images/books/ratings/onestar.gif"></button>

<details> 
<summary>Click for Genres and Tags</summary>
  <button class="navbutton" onclick="filterSelection('horror')">Horror</button>
  <button class="navbutton" onclick="filterSelection('scifi')">Sci-Fi</button>
  <button class="navbutton" onclick="filterSelection('mystery')">Mystery</button>
  <button class="navbutton" onclick="filterSelection('fantasy')">Fantasy</button>
  <button class="navbutton" onclick="filterSelection('classic')">Classic</button>
  <button class="navbutton" onclick="filterSelection('humour')">Humour</button>
  <button class="navbutton" onclick="filterSelection('LGBTQ')">LGBTQ</button>
  <button class="navbutton" onclick="filterSelection('novella')">Novella</button>
  <button class="navbutton" onclick="filterSelection('short stories')">Short Stories</button>
  <button class="navbutton" onclick="filterSelection('comic')">Comic</button>
  <button class="navbutton" onclick="filterSelection('adventure')">Adventure</button>
  <button class="navbutton" onclick="filterSelection('historical')">Historical</button>
  <button class="navbutton" onclick="filterSelection('thriller')">Thriller</button>
  <button class="navbutton" onclick="filterSelection('cozy')">Cozy</button>
  <button class="navbutton" onclick="filterSelection('slasher')">Slasher</button>
  <button class="navbutton" onclick="filterSelection('found family')">Found Family</button>
  <button class="navbutton" onclick="filterSelection('theme park')">Theme Parks</button>
  <button class="navbutton" onclick="filterSelection('space')">Space</button>
  <button class="navbutton" onclick="filterSelection('oldies')">Oldies</button>
  <button class="navbutton" onclick="filterSelection('books about books')">Books about Books</button>
  <button class="navbutton" onclick="filterSelection('summer camp')">Summer Camp</button>
  <button class="navbutton" onclick="filterSelection('underwater')">Underwater</button>
  <button class="navbutton" onclick="filterSelection('robots')">Robots</button>
  <button class="navbutton" onclick="filterSelection('heist')">Heist</button>



</details>

<!-- 
ai, ,  dinosaurs, non-fiction, medical, graphic novel, japanese, hopepunk,  military, mythology, dragons,  boarding school, tea and coffee, baking, survival, indigenous, cult, dystopian, animals, witches, fairies, magic,  alternative history, western,  sea, epistolary, time travel, steampunk, superheroes,  

magical realism, urban fantasy,

  <button class="navbutton" onclick="filterSelection('tor')">TOR (publisher)</button>
  <button class="navbutton" onclick="filterSelection('')"></button>
  <button class="navbutton" onclick="filterSelection('')"></button>
  <button class="navbutton" onclick="filterSelection('')"></button>
  <button class="navbutton" onclick="filterSelection('')"></button>



  <button class="navbutton" onclick="filterSelection('apocalypse')">Apocalypse</button>
  <button class="navbutton" onclick="filterSelection('solarpunk')">Solarpunk</button>

  <button class="navbutton" onclick="filterSelection('vampires')">Vampires</button>
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
<noscript>This page requires Javascript, sorry.</noscript> 
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