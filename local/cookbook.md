---
title: CookBook
layout: layout/base.njk
---


## Recipe Index

I am a supremely lazy cook and hate spending time in the kitchen, so if a recipe has a ton of fancy ingredients or a lot of complicated steps I won't cook it. So these recipes are pretty simple/basic and mostly involve using a microwave or slow cooker. Toaster Oven occasionally.

Also, most of them are pretty mild and maybe a bit bland. Even the spicy ones. If you like heat, these are not the recipes for you.

<hr class="dashed">

Note: Work in Progress

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

### All Recipes

<ul>
{% for post in collections.recipe %}
<li><a href="{{post.url}}"> {{ post.data.recipetitle}}</a></li>
{% endfor %}
</ul></div>