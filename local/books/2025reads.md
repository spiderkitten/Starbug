---
title: 2025 Reads
layout: layout/base.njk
cssFile: "books.css"
---

## Reading Log

{% include "partials/readingyears.njk" %}

<div class="textbox">
<h3>2025 Reads</h3>
<p>Reading slump this year... started a bunch of books but haven't really finished any of them. </p> 

  <div class="bookgallery">
    {%- for books in books -%}
      {%- if books.readdate == "2025" -%} 
        {%- include "partials/books.njk" -%}
      {%- endif -%}
    {%- endfor -%}
   </div>
</div>

 


