---
title: Changelog
layout: layout/base.njk


---

<div class="textbox">

 ### Changelog  

Just a way to look back on all the updates I have made. Should be every major update. Unless I forget. 

    {%- for changelog in changelog reversed -%}
    <div class="changelog"><p><strong>{{ changelog.date | blogDate }}:</strong> - {{ changelog.update }}</div></p>
    {%- endfor -%}

</div>