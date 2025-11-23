---
title: Changelog
layout: layout/base.njk
eleventyExcludeFromCollections: true

---

<div class="textbox">

 ### Changelog  

Just a way to look back on all the updates I have made. I'll add every main update. Unless I forget.^[I nearly always forget lol] 

    {%- for changelog in changelog | reverse -%}

<div class="changelog"><p><strong><time>{{ changelog.date }}</time>:</strong> - {{ changelog.update | safe }}</div></p>
    
    {%- endfor -%}

</div>

[^1]: I nearly always forget lol 
 