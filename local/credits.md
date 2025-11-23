---
title: Credits
layout: layout/base.njk
eleventyExcludeFromCollections: true
---


## Site Credits

Everything this site is made with.

<div class="textbox">


### Coding Stuff

- <a href="https://vscodium.com/">VSCodium</a> code editor - open source binary of VSCode without Microsofts tracking. 
- <a href="https://www.11ty.dev/">11ty Static Site Generator</a> to make static pages from pieces of my code 
- <a href="https://neocities.org/">Neocities</a> hosting
- <a href="https://petrapixel.neocities.org/blog/neocities-automatic-deployment">Petrapixel's deploying to Neocities guide</a>  

#### VSCodium Extensions

- <a href="https://open-vsx.org/extension/oderwat/indent-rainbow">Indent Rainbow</a> - clearly see the indent level
- <a href="https://open-vsx.org/extension/formulahendry/auto-close-tag">Auto Close Tag</a>
- <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server">Live Preview</a> Live preview lets you see your page within VSCode(ium)
- <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a> Live Server serves the page in your browser 
- <a href="https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks">Better Nunjucks</a>
- <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions">Github Actions</a> and <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github">Github Pull Requests</a> for deploying site  
- <a href="https://github.com">Github</a> site gets pushed to github before it goes to neocities 

#### 11ty Plugins
- <a href="https://github.com/markdown-it/markdown-it">Markdown-it</a> - adds some markdown features
- <a href="https://github.com/markdown-it/markdown-it-footnote">Markdown-it-footnote</a> - easy footnotes
- <a href="https://github.com/markdown-it/markdown-it-emoji">markdown-it-emoji</a> - emojis! :rainbow: :cat: :fire:
- <a href="https://github.com/moment/luxon/">luxon</a> - for date stuff 
- <a href="https://gfscott.com/embed-everything/">Embed Everything 11ty Plugin</a> - easily embed things (youtube etc)

### Code Snippets and Scripts 

#### Site Wide
- <a href="https://codepen.io/heydon/pen/pgBBdR">CSS only, automated, and accessible external link icon</a>code by Heydon
- <a href="https://www.w3schools.com/howto/howto_js_filter_elements.asp">W3's Element filtering tutorial</a> - used on the books, music, movie pages
- <a href="https://www.30secondsofcode.org/css/s/zebra-striped-list-or-table/">Striped List tutorial</a> 


#### Index Page 
- <a href="https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript">Random Quote tutorial</a> 
- <a href="https://github.com/lars-rooij/webmeji/tree/main">Webmeji on front page</a> by lars-rooj (<a href="https://kilkakon.com/shimeji/">original shimeji</a>)  

#### 100x100 page 
- <a href="https://blog.markdowntools.com/posts/add-table-of-contents-to-markdown-using-javascript">Automatic Table of Contents Snippet</a>  

#### Commonplace Book 

- <a href="https://stackoverflow.com/a/40701429">Code for image popups</a>

#### Guestbook / Comments 
- <a href="https://virtualobserver.moe/ayano/comment-widget">ayano's neocities comment widget</a>  

#### Credits Page
- <a href="https://daniele63.com/coding_tricks#visitorCounterDiv">Counter on Credits page tutorial</a>  by Daniele 


</div>

<div class="textbox">

### Fonts and Text 

 Some fonts may be theme specific, or from previous layouts 
 
<ul>
<li>Font: <span style="font-family: cherryswash;">CherrySwash</span> by <a href="https://www.fontsquirrel.com/">FontSquirrel</a></li>   
<li>Font: <span style="font-family: lato;">Lato</span> from <a href="https://www.fontsquirrel.com/">FontSquirrel</a> </li>
</ul> 
</div>

<div class="textbox">

### Images 
<ul>
 <li>Mushroom favicon, cursor and bullets by <a href="http://whimsical.heartette.net">whimsical</a></li>  
 <li>Cherry divider by <a href="http://whimsical.heartette.net">whimsical</a></li>

<li>UFO on 404 page by <a href="https://www.flaticon.com/free-sticker/ufo_7690954">Flaticon</a></li>
<li>Star ratings from <a href="https://blanketfort.neocities.org/web-material">Blanket Fort</a></li>
<li>Cat sticker on recipe placeholder image from <a href="https://www.flaticon.com/free-sticker/cooking_4743087">flatiron</a></li>
<li>recipe placeholder image made by ME</li> 
<!--<li>Les Vampires image on Vampire Resource Management page - ????</li>-->
<li>Nick Cave's book of words photo - unknown</li>
<li>Book covers sourced from Goodreads and Amazon</li>
<li>A24 Logo on A24 page is unsurprisingly owned by A24</li>
<li>Goodreads, Storygraph, IMDB, Spotify, and Youtube icons from their respective sites</li>



</ul>
</div>

 <p style="text-align: center;">And a huge thankyou to the  <span id="visitorCounter"></span> people who <rainbow-text>volunteered</rainbow-text> to be ritually sacrificed so that this site could be created. I <span style="color:red;">&#9829;</span> you.</p>

<!--
counter tutorial
https://daniele63.com/coding_tricks#visitorCounterDiv
-->
<script>
  const VISITOR_COUNTER = document.getElementById("visitorCounter");

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Get the data
      let site_data = JSON.parse(this.responseText);
      // Add commas
      let num_arr = site_data.info.views.toString().split("");
      let num_str = "";
      for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ((num_arr.length - 1 - i) % 3 == 0 && num_arr.length - 1 - i != 0) {
          num_str += ",";
        }
      }
      // Add result to html
      VISITOR_COUNTER.innerHTML = num_str;
    }
  };
  xhttp.open(
    "GET",
    "https://weirdscifi.ratiosemper.com/neocities.php?sitename=starbug",
    true
  );
  xhttp.send();
</script>