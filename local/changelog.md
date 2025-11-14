---
title: Changelog
layout: layout/base.njk
eleventyExcludeFromCollections: true

---

<div class="textbox">

 ### Changelog  

Just a way to look back on all the updates I have made. Should be every major update. Unless I forget^[I always forget]. 

    {%- for changelog in changelog | reverse -%}

    <div class="changelog"><p><strong><time>{{ changelog.date }}</time>:</strong> - {{ changelog.update }}</div></p>
    
    {%- endfor -%}

</div>