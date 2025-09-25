---
title: 2025 Reads
layout: layout/base.njk
cssFile: "books.css"
---

## Reading Log

{% include "partials/readingyears.njk" %}

<div class="textbox">
<h3>2025 Reads</h3>
<p>Reading slump this year... started a bunch of books but haven't really finished any of them. But if you want more recs check the previous years!</p> 

  <div class="bookgallery">
    {%- for books in books -%}
      {%- if books.readdate == "2025" -%} 
        {%- include "partials/books.njk" -%}
      {%- endif -%}
    {%- endfor -%}
    </div>
</div>

</div>
</div>




