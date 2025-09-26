---
title: Cozy Fantasy
layout: layout/base.njk
cssFile: "books.css"
---

  <h2>Cozy Fantasy & Sci-fi</h2>
<div class="textbox">
  <h3>What is cozy fantasy & sci-fi?</h3>
  <p>In my opinion, a lot of the time defining something as Cozy is based more on the intent of the novel, or the feeling a story gives you more than any defined elements of genre. So a definition may vary from person to person.</p>

  <p>For me, cozy Fantasy/Sci-fi novels focus on found family, friendships, quiet life, the small moments in relationships. They are generally hopeful.</p>

<p>But that said, there are some books with STAKES that I find cozy for different reasons. So I recommend looking at GoodReads or Storygraph before reading any of these recs just to make sure they seem like <i>your</i> kind of cozy.</p>
</div>

<div class="textbox">
<h3>Cozy Fantasy Reads</h3>
  <p>Below are some Cozy Fantasy and Sci-Fi novels I have read that I would recommend:</p>

  <div class="bookgallery">
    {%- for books in books -%}
      {%- if books.cozy == "yes" -%} 
        {%- include "partials/books.njk" -%}
      {%- endif -%}
    {%- endfor -%}
   </div>
</div>


</div>