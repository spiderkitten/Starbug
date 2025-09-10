---
title: Credits
layout: layout/base.njk
---


## Site Credits

Everything this site is made with.

<div class="textbox">

### Site Stuff

- <a href="https://vscodium.com/">VSCodium</a> is the app I use to write my code. Its an open source binary of VSCode without Microsofts tracking. 
- <a href="https://www.11ty.dev/">11ty Static Site Generator</a> to make static pages from my code 
- <a href="https://neocities.org/">Neocities</a> for site hosting 
- <a href="https://petrapixel.neocities.org/blog/neocities-automatic-deployment">Tutorial</a> by PetraPixel for deploying to Neocities 
- <a href="https://www.goodreads.com/user/edit?tab=widgets">Goodreads Widgets</a> for anywhere you see book covers 
- <a href="https://www.30secondsofcode.org/css/s/zebra-striped-list/">Striped list</a> by 30 seconds of code 
- Freeze Gifs code by ???  
- <a href="https://blog.markdowntools.com/posts/add-table-of-contents-to-markdown-using-javascript">Automatic Table of Contents Snippet</a> generates from headings 
- <a href="https://codepen.io/sadness97/pen/BaQbJQb">Seamless Marquee Codepen</a> by Sadgirl 
- <a href="https://virtualobserver.moe/ayano/comment-widget">ayano's neocities comment widget</a> - Guestbook 
- <a href="https://codepen.io/heydon/pen/pgBBdR">CSS only, automated, and accessible external link icon</a>code by Heydon
- <a href="https://daniele63.com/coding_tricks#visitorCounterDiv">Counter on Credits page</a> added using tutorial by Daniele 
- <a href="https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript">Random Quote tutorial</a> 
- <a href="https://github.com/lars-rooij/webmeji/tree/main">Webmeji on front page</a> by lars-rooj (<a href="https://kilkakon.com/shimeji/">original desktop shimeji</a>)  
 

</div>

<div class="textbox">

### Fonts and Text 

 Some fonts may be theme specific, or from previous layouts 
 
<ul>
<li>Font: <span style="font-family: cherryswash";>CherrySwash</span> by <a href="https://www.fontsquirrel.com/">FontSquirrel</a></li>   
<li>Font: <span style="font-family: lato";>Lato</span> from <a href="https://www.fontsquirrel.com/">FontSquirrel</a> </li>
</ul> 
</div>

<div class="textbox">

### Images 
<ul>
  <li>Pixel gold star gif by <a href="https://eightbriitt.neocities.org/">Eightbritt</a></li>
 <li>Mushroom favicon and bullets by <a href="http://whimsical.heartette.net">whimsical</a></li>  
 <li>Cherry divider by whimsical</li>
 <br>
<li>UFO on 404 page by Flaticon</li>
<li>icons on Fav Movies page by flaticon</li>
<br>
<li>Les Vampires image on Vampire Resource Management page - ????</li>
<li>Nick Cave's book of words  - </li>
<li>A24 Logo on A24 page is unsurprisingly owned by A24</li>
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