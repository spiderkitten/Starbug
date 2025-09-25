---
title: 2021 Reads
layout: layout/base.njk
cssFile: "books.css"
---

{% include "partials/readingyears.njk" %}

<div class="textbox">
<h3>2021 Reads</h3>
<p>Had a bit of a reading slump this year, so only three books.</p>

  <div class="bookgallery">
    {%- for books in books -%}
      {%- if books.readdate == "2021" -%} 
        {%- include "partials/books.njk" -%}
      {%- endif -%}
    {%- endfor -%}
    </div>
  </div>



 