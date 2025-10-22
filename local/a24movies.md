---
title: A24 Movie Challenge
layout: layout/base.njk
cssFile: movies.css
---


<div class="textbox">
<h3>A24 Movies</h3>
<div style="float: left; width: 200px; margin: 5px; margin-right:15px;"><img src="/images/movies/a24.png" style="width: 200px; ">
<figcaption>A24 Logo</figcaption></div>

 <p>When most people think of A24 they think of their horror lineup. Midsommar, Hereditary, etc. They may even think of some of their bigger films like Everything Everywhere All At Once, Moonlight, and the upcoming (at time of writing) Civil War (2024). But A24 actually have so many more movies under their belt. Some are self produced, others they just distribute. But they all have a unique quality about them that makes them stand out compared to others.</p>

<p>What I love about A24 is that unique quality of movies. Its rare to find one that is terrible. Even within the group of smaller lesser known films. I've watched a lot of them (see below) and while I didn't particularly enjoy some of them, the movies were still really high quality.</p>
</div>

<div class="textbox">
<h3>My A24 Challenge</h3>
<div style="float: right; width: 180px; margin: 5px; margin-right:15px;"><img src="/images/movies/watchingmovies.png" style="width: 180px; "></div>
 
In 2023 I challenged myself to watch every A24 movie. I'd already watched a fair few, but I pushed myself to watch any that I could legally access. Even movies I might not have chosen to watch normally. And I had a great time, watched a lot of really good movies (and a handful of ones I didn't like.)   

2023 has been and gone now but I'm still trying to watch every single A24 movie. Every time one becomes available to watch somehow, I watch it. Below is a list of all A24 movies and which ones I have seen and haven't seen.
 
</div>


<div class="textbox">
<h3>List of A24 Movies</h3>
             <p>Movies are divided into years but are otherwise <i>mostly</i> in release order (reverse). This list does not include documentaries unless I really wanted to see them. The list also does not include any movie post 2025 for now. </p>

<div style="display: table; margin:auto;">
           
            <li><strong>&#10003;</strong> Movies I have seen</li>
            <li><strong>&#9733;</strong> Movies I really liked</li>
            <li><strong>✗</strong> Movies I disliked</li>
            
</div>

<p><strong>5 Most recently seen:</strong> Aftersun, A Different Man, The Exception, Eddington, Obvious Child</p>

<div class="A24progress">
<div>Total Seen:</div>
<div><progress value="104"  max="182"></progress></div>
<div>104/182</div>
</div><!--progress-->

</div>

<div class="textbox">

### 2025 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2025" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>


<div class="textbox">

### 2024 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2024" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2023 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2023" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2022 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2022" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>


<div class="textbox">

### 2021 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2021" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2020 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2020" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2019 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2019" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2018 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2018" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2017 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2017" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2016 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2016" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2015 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2015" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>

<div class="textbox">

### 2014 

  <div class="A24">
    {%- for A24movies in A24movies %}
      {%- if A24movies.year == "2014" %} 
        {%- include "partials/A24movies.njk" %}
      {%- endif %}
    {%- endfor %}
  </div>

</div>



<div class="textbox">

### 2013 

  <div class="A24">
    {%- for A24movies in A24movies -%}
      {%- if A24movies.year == "2013" -%} 
        {%- include "partials/A24movies.njk" -%}
      {%- endif -%}
    {%- endfor -%}
  </div>

</div>



