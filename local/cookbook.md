---
title: CookBook
layout: layout/base.njk
---


<h2>Recipe Index</h2>
<p>I am a supremely lazy cook and hate spending time in the kitchen, so if a recipe has a ton of ingredients or a lot of steps I won't cook it. So these recipes are pretty simple/basic and mostly involve using a microwave or slow cooker. Toaster Oven occasionally.</p>

<p>Also this is not a professional recipe site, just my personal webspace, so there are no fancy features or plain text printable versions of these recipes. But on a positive note, there are no long winded stories, no sponsored content and nothing else to scroll past. Just the recipes.</p>

<hr class="dashed">
<p>Note: Work in Progress</p>
<hr class="dashed">

<!-- 
<div class="textbox"> 
<h3>Breakfast</h3>
<ul>
{% for post in collections.breakfast %}
<li><a href="{{post.url}}">{{ post.data.recipetitle }}</a></li>
{% endfor %}
</ul>
</div>

<div class="textbox"> 
<h3>Lunch</h3>
<ul>
{% for post in collections.lunch %}
<li><a href="{{post.url}}">{{ post.data.recipetitle }}</a></li>
{% endfor %}
</ul>
</div>

<div class="textbox"> 
<h3>Snacks</h3>
<ul>
{% for post in collections.snack %}
<li><a href="{{post.url}}">{{ post.data.recipetitle }}</a></li>
{% endfor %}
</ul>
</div>

<div class="textbox"> 
<h3>Dessert</h3>
<ul>
{% for post in collections.dessert %}
<li><a href="{{post.url}}">{{ post.data.recipetitle }}</a></li>
{% endfor %}
</ul>
</div>

<div class="textbox"> 
<h3>Meals</h3>
<ul>
{% for post in collections.meal %}
<li><a href="{{post.url}}">{{ post.data.recipetitle }}</a></li>
{% endfor %}
</ul>
</div>
-->

<div class="textbox"> 
<h3>All Recipes</h3>
<ul>
{% for post in collections.recipe %}
<li><a href="{{post.url}}"> {{ post.data.recipetitle}}</a></li>
{% endfor %}
</ul></div>