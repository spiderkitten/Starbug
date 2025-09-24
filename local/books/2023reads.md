---
title: 2023 Reads
layout: layout/base.njk
cssFile: "books.css"
---

{% include "partials/readingyears.njk" %}

<div class="textbox">
<h3>2023 Reads</h3>
  <div class="bookgallery">
    {%- for books in books -%}
      {%- if books.readdate == "2023" -%} 
        {%- include "partials/books.njk" -%}
      {%- endif -%}
    {%- endfor -%}
    </div>
</div>

</div>
</div>