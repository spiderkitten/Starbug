---
layout: layout/base.njk
script: randomquote.js
title: Just a girl floating through space
description: 
eleventyExcludeFromCollections: true
---

<h2>Welcome</h2>
<p>Hi, I'm <rainbow-text>Starbug</rainbow-text>, a Queer Gen X woman who lives near Sydney in <span class="upsidedown">Australia</span>. Welcome to my little space on the internet! Space Cadet is a personal site where I will throw random stuff and just do whatever. </p>
<p>Some of my favourite things are: Reading, postcards, snailmail, movies, dandelions, bats, bees, citizen science, postcrossing, hopepunk, horror, weird things, and more. </p>

<p>I log everything I read and watch on <a href="https://www.goodreads.com/user/show/21899-mysteriouspanda">Goodreads</a> and <a href="https://trakt.tv/users/spiderkitten">Trakt</a></p>

<p>Check out my <a href="https://neocities.org/site/starbug">Neocities Profile</a> if you want to follow me there and don't forget to <a href="guestbook.html">sign my guestbook</a> before you leave!</p>

<!-- grid to align quotes and rings-->

<!-- RECENT Stutter -->
<div id="stutter" class="textbox">

## Latest Stutter
<div class="bullets"> 
<div id="recentPostList">
  <ul>
  {% assign top_stutter = stutter | reverse %}
  {%- for stutter in top_stutter limit:1 -%}
    <li><a href="{{ stutter.date }}"> {{ stutter.content }}</a></li>
  {% endfor %}

</div><!--recentPostList-->
</div><!--bullets-->
</div><!--stutter-->


<!-- Quotes -->
<div id="randomquote" class="textbox">
<h3>Random Quote</h3>
<div  id="quote" class="quotebox">

<span id="quotes1"></span> 
<br>
<span id="quotes2"></span>
<div style="text-align: right;">-- <span id="author"></span> </div>
<button id="generate">refresh</button>
</div><!--quote-->
</div><!--randomquote-->


<!--
## Recent Blog Posts

<div id="recentPostList">
  <ul>
  {% assign top_posts = collections.posts | reverse %}
  {%- for post in top_posts limit:4 -%}
    <li><a href="{{ post.url }}"> {{ post.data.title }}</a></li>
  {% endfor %}

</div>
</div>
--> 

<div id="changelog" class="textbox">

### Most Recent Site Change
 
<div> 
{%- assign changes = changelog | reverse -%}
{%- for changes in changes limit:1  -%}
<p><strong> {{ changes.date }}:</strong> {{ changes.update }}</p>
  {%- endfor -%}

<a href="changelog.html">Full Changelog</a>
</div><!-- -->
</div><!--changelog-->


<!-- WEBRINGS -->
<div id="webrings" class="textbox">
<h3>Rings and Things</h3>
<!-- TF2 Webring -->
<div id='fortring'>
  <script src="https://tfortring.neocities.org/fortring/onionring-variables.js"></script>
  <script src="https://tfortring.neocities.org/fortring/onionring-widget.js"></script>
</div>
<!--No AI Webring-->
<div style="text-align: center;">
<map name="noaimini2">
<area href="https://baccyflap.com/noai" target="_blank" shape="rect" coords="5,3,83,14" alt="no ai webring" title="no ai webring">
<area href="https://baccyflap.com/noai/?prv&s=spc" target="_top" shape="rect" coords="5,16,16,26" alt="previous" title="previous">
<area href="https://baccyflap.com/noai/?rnd" target="_top" shape="rect" coords="38,16,51,27" alt="random" title="random">
<area href="https://baccyflap.com/noai/?nxt&s=spc" target="_top" shape="rect" coords="72,16,83,26" alt="next" title="next">
</map>
<img usemap="#noaimini2" src="https://baccyflap.com/noai/miniwidget2.gif" alt="a white rounded rectangle in red outline, with the words 'no ai webring' ">
</div><!--NO AI webring-->
</div><!--textbox-->

<!-- buttons -->

<div id="frontpagebuttons">
 <a href="https://yesterweb.org/no-to-web3/"> <img src="images/buttons/roly-saynotoweb3.gif" alt="" title="Say No To Web3!"></a> <a href="https://notbyai.fyi"><img src="images/buttons/Produced-By-Human-Not-By-AI-Badge-white.gif" height="31" alt="" title="Powered by a human!"></a>  <img src="images/buttons/macmade-wht.gif" title="Made with a Mac" alt=""> <a href="https://neocities.org/"><img src="images/buttons/neocities_button.gif" title="Hosted by Neocities" alt=""></a>

</div><!--buttons-->

