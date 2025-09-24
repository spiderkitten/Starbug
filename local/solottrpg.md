---
title: Solo TTRPG Game Journal
layout: layout/base.njk

---

<div class="textbox">

### Solo TTRPG Game Journal

#### Notes 

This is an index of any TTRPG game logs I have posted to my site. I'm still trying the whole TTRPG thing out, so there are only a few things so far, but I am hopefull that I will play more!  


### Directory 

<dl >
{%- for post in collections.TTRPG -%}
<dt><a href="{{post.url}}"> {{ post.data.TTRPGtitle}}</a></li>
<dd style="padding-bottom: 20px;">{{ post.data.description}}</li>
{% endfor %}
</dl>




</div>
