---
title: Book Log
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

## Reading Log

A log of things I have read over the past few years. Actively working to add books to the page (going backwards to 2009), currently up to 2014. 

2015 I read a year of comics, so that year is mostly comics. 

<strong>Note: This page is image heavy and may take a moment to load. </strong>

Feel free to leave a book rec in the comment box below, or just let me know anything bookish! :D 



<!-- almost didn't add ratings, because I find them so subjective, and to be honest, I do actually use a browser addon to block ratings on goodreads, because I don't want to be influenced by ratings - I want to read a book and make my own decision about it. But the stars do look pretty lol and some people like ratings so here we are. Note that there are a lot of three star rated books. I suggest just checking the other ratings.--> 

<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('favourite')">Favs</button>
  <button class="btn" onclick="filterSelection('2026')">2026</button>
  <button class="btn" onclick="filterSelection('2025')">2025</button>
  <button class="btn" onclick="filterSelection('2024')">2024</button>
  <button class="btn" onclick="filterSelection('2023')">2023</button>
  <button class="btn" onclick="filterSelection('2022')">2022</button>
  <button class="btn" onclick="filterSelection('2021')">2021</button>
  <button class="btn" onclick="filterSelection('2020')">2020</button>
  <button class="btn" onclick="filterSelection('2019')">2019</button>
  <button class="btn" onclick="filterSelection('2018')">2018</button>
  <button class="btn" onclick="filterSelection('2017')">2017</button>
  <button class="btn" onclick="filterSelection('2016')">2016</button>
  <button class="btn" onclick="filterSelection('2015')">2015</button>
  <button class="btn" onclick="filterSelection('pre2009')">Pre 2009</button>
  <button class="btn" onclick="filterSelection('comment')">Comment Box</button>




<!-- 
<div id="ratings"> 
 <button class="btn" onclick="filterSelection('five')"><img src="/images/books/ratings/fivestar.gif"></button> <button class="btn" onclick="filterSelection('four')"><img src="/images/books/ratings/fourstar.gif"></button> <button class="btn" onclick="filterSelection('three')"><img src="/images/books/ratings/threestar.gif"></button> <button class="btn" onclick="filterSelection('two')"><img src="/images/books/ratings/twostar.gif"></button> <button class="btn" onclick="filterSelection('one')"><img src="/images/books/ratings/onestar.gif"></button>
</div>



<details> 
<summary>Click for Genres and Tags</summary>
  <button class="btn" onclick="filterSelection('horror')">Horror</button>
  <button class="btn" onclick="filterSelection('scifi')">Sci-Fi</button>
  <button class="btn" onclick="filterSelection('mystery')">Mystery</button>
  <button class="btn" onclick="filterSelection('fantasy')">Fantasy</button>
  <button class="btn" onclick="filterSelection('classic')">Classic</button>
  <button class="btn" onclick="filterSelection('humour')">Humour</button>
  <button class="btn" onclick="filterSelection('LGBTQ')">LGBTQ</button>
  <button class="btn" onclick="filterSelection('novella')">Novella</button>
  <button class="btn" onclick="filterSelection('short stories')">Short Stories</button>
  <button class="btn" onclick="filterSelection('comic')">Comic</button>
  <button class="btn" onclick="filterSelection('adventure')">Adventure</button>
  <button class="btn" onclick="filterSelection('historical')">Historical</button>
  <button class="btn" onclick="filterSelection('thriller')">Thriller</button>
  <button class="btn" onclick="filterSelection('cozy')">Cozy</button>
  <button class="btn" onclick="filterSelection('slasher')">Slasher</button>
  <button class="btn" onclick="filterSelection('found family')">Found Family</button>
  <button class="btn" onclick="filterSelection('theme park')">Theme Parks</button>
  <button class="btn" onclick="filterSelection('space')">Space</button>
  <button class="btn" onclick="filterSelection('oldies')">Oldies</button>
  <button class="btn" onclick="filterSelection('books about books')">Books about Books</button>
  <button class="btn" onclick="filterSelection('summer camp')">Summer Camp</button>
  <button class="btn" onclick="filterSelection('underwater')">Underwater</button>
  <button class="btn" onclick="filterSelection('robots')">Robots</button>
  <button class="btn" onclick="filterSelection('heist')">Heist</button>
</details>
-->
<!-- 
ai, ,  dinosaurs, non-fiction, medical, graphic novel, japanese, hopepunk,  military, mythology, dragons,  boarding school, tea and coffee, baking, survival, indigenous, cult, dystopian, animals, witches, fairies, magic,  alternative history, western,  sea, epistolary, time travel, steampunk, superheroes,  

magical realism, urban fantasy,

  <button class="btn" onclick="filterSelection('tor')">TOR (publisher)</button>
  <button class="btn" onclick="filterSelection('')"></button>
  <button class="btn" onclick="filterSelection('')"></button>
  <button class="btn" onclick="filterSelection('')"></button>
  <button class="btn" onclick="filterSelection('')"></button>



  <button class="btn" onclick="filterSelection('apocalypse')">Apocalypse</button>
  <button class="btn" onclick="filterSelection('solarpunk')">Solarpunk</button>

  <button class="btn" onclick="filterSelection('vampires')">Vampires</button>
  <button class="btn" onclick="filterSelection('ikea')">Ikea</button>
  <button class="btn" onclick="filterSelection('clowns')">Clowns</button>
  <button class="btn" onclick="filterSelection('female detective')">Female Detective</button>
  <button class="btn" onclick="filterSelection('spooky')">Spooky</button> 
-->
</div>
</div>

<div class="textbox">

<div class="gallery">
    {%- for books in books -%}

<div class="filterDiv {{ books.readdate }} {{ books.novella }} {{ books.genre1 }} {{ books.genre2 }} {{ books.genre3 }} {{ books.genre4 }} {{ books.genre5 }} {{ books.genre6 }} {{ books.cozy }} {{ books.rating }} {{ books.shortstories }} {{ books.favourite }}"> 

<div class="item">
        <img src="/images/books/covers/{{- books.cover }}" alt="book cover for {{ books.title }} by {{ books.author }}" title="{{ books.title }} by {{ books.author }}">

<div class="itemtxt"> 


<div>
        <div class="title">{{- books.title }}</div>
        <div class="author"> {{- books.author }}</div>       
        {%- if books.series != "" -%} 
        <div class="series">{{- books.series -}}&nbsp;#{{- books.seriesnumber -}}</div>
        {%- endif -%} 
</div>
<!-- 
 <div>
        {%- if books.rating != "" %} 
        <div class="rating"><img src="/images/books/ratings/{{ books.rating }}star.gif"></div>
        {%- endif %} 
</div> 
-->
<div>
        {%- if books.goodreads != "" %} 
        <a href="{{- books.goodreads }}" target="_blank"><img src="/images/siteimgs/goodreads.png" class="icons" title="View on GoodReads" alt="goodreads logo"></a> 
        {%- endif %} 

        {%- if books.storygraph != "" -%} 
        <a href="{{- books.storygraph }}" target="_blank">
        <img src="/images/siteimgs/storygraph.png" class="icons" title="View on Storygraph" alt="the storygraph logo"></a>
        {%- endif -%} 
</div>

</div><!--booktxt-->
</div><!--book-->
</div> 
    {%- endfor -%}


</div>
<div style="text-align: right;"><a href="#top">top <i class="arrow up"></i></a></div>
<noscript>This page requires Javascript, sorry.</noscript> 
</div><!-- textbox -->
 

<div class="textbox">
<h3>Comments</h3>

<div id="c_widget"></div>
<script src="js/comment-widget.js"></script>

</div>

