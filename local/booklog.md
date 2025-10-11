---
title: Book Log
layout: layout/base.njk
cssFile: "books.css"
script: "filter.js"
---


## Reading Log



<div class="textbox">

### Info
<p></p>


<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('2025')">2025</button>
  <button class="btn" onclick="filterSelection('2024')">2024</button>
  <button class="btn" onclick="filterSelection('2023')">2023</button>
  <button class="btn" onclick="filterSelection('2022')">2022</button>
  <button class="btn" onclick="filterSelection('2021')">2021</button>

  <button class="btn" onclick="filterSelection('Horror')">Horror</button>
  <button class="btn" onclick="filterSelection('yes')">Novella</button>
  <button class="btn" onclick="filterSelection('Sci-Fi')">Sci-Fi</button>
  <button class="btn" onclick="filterSelection('LGBTQ')">LGBTQ</button>
  <button class="btn" onclick="filterSelection('Apocalypse')">Apocalypse</button>

</div>


<div class="bookgallery">
    {%- for books in books -%}
        {%- include "partials/books.njk" -%}
    {%- endfor -%}
</div> 
</div><!--books-->

<noscript>This page requires Javascript, sorry. Don't have JS? check the static version of this page starting here:  
https://starbug.neocities.org/books/2025reads
</noscript>
</div><!-- textbox -->

