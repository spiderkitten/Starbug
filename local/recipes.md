---
layout: layout/base.njk
title: Recipes
description: 
eleventyExcludeFromCollections: true
---
<div class="textbox">

<div class="bullets">

## Recipe Index

I am a supremely lazy cook and hate spending time in the kitchen, so if a recipe has a ton of fancy ingredients or a lot of complicated steps I won't cook it. So these recipes are pretty simple/basic and mostly involve using a microwave or slow cooker. Toaster Oven occasionally.

Also, most of them are pretty mild and maybe a bit bland. Even the spicy ones. If you like heat, these are not the recipes for you.

Note: Work in Progress



<!-- all posts tagged "posts" in reverse chronological order-->
<div class="postarchive">
<ul>
{% for post in collections.recipes %}
<li><a href="{{post.url}}"> {{ post.data.title}}</a></li>
{% endfor %}
</ul>
</div><!--postarchive-->

</div><!--textboxx-->
</div><!--bullets -->