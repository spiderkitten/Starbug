---
title: Links Neocities
layout: layout/base.njk
eleventyExcludeFromCollections: true
---
  <div class="freeze"> <!-- gifs start paused -->

## Exit Portals

<div class="textbox">
Sites that are hosted on Neocities, Nekoweb, or that just fit the aesthetic of the Small/Indie Web. 

  <!-- play/pause buttons (needs the freeze div above) -->
  <div style="text-align: center; margin-top: 10px;">
    <button onclick="resumegifs()">play gifs</button> 
    <button onclick="freezegifs()">pause gifs</button>
    <div class="clear"></div>
    <small>(requires javacript)</small>
  </div>

</div>

<!-- template 
<div><a href=" "><img src=""></a></div>
-->

<div class="textbox">

<h3><span class="upsidedown">Down Under</span></h3>

Sites run by other Aussies! 

<div><a href="https://readingproject.neocities.org/"><img src="images/neosites/ReadingProjectButton2.gif" alt="project reading link button" title="Project Reading"></a> <a href="https://debtdeath.neocities.org/"><img src="images/neosites/debtdeath-2-button.gif" alt="dbt death link button" title="DBT DEATH"></a> <a href="https://caffeineandlasers.com"><img src="images/neosites/CaffeineAndLasersButton.gif" alt="Caffiene and Lasers link button" title="Caffeine and Lasers"></a> <a href="https://uuupah.neocities.org/"><img src="images/neosites/uuupah.gif" alt="Uuupah link button" title="Uuupah" class="tooltip"></a> <a href="https://skelizard.neocities.org"><img src="images/neosites/skelizard.gif"></a>

<a href="https://fcota.neocities.org/">Flower Children of the Apocalypse</a> (band)

</div> 


### Over 40s Club  

Fellow oldies! Neocities sites run by people aged 40+ 
 
<a href="https://aywren.com/"><img src="images/neosites/aywrenbutton.gif" alt="Aywren link button" title="Aywren"></a>

### Game Dev Sites   
 People who make games! check their games out! 

<div><a href="https://dinosire.com"><img src="images/neosites/dinosirebutton.gif"></a></div> <div><a href=""> </a></div>

 
<h3>Button Wall</h3>

 <div style="display: inline-block;">
<div><a href="https://petrapixel.neocities.org/"><img src="images/neosites/petrapixel.gif" alt="petrapixel link button" title="Petrapixel"></a> <a href="https://scumsuck.com/"><img src="images/neosites/scumsuck88x31.gif" alt="scumsuck link button" title="Scumsuck"></a>  <a href="https://notprincehamlet.neocities.org/"><img src="images/neosites/nph.gif" alt="Not Prince Hmlet link button" title="Not Prince Hamlet"></a> <a href="https://myrrh.neocities.org/"> <img src="images/neosites/myrrhbutton2.gif" alt="Myrrh site button" title="Myrrh"></a> <a href="https://nerdymug.com/"><img src="images/neosites/nerdymugbutton.gif" alt="Nerdy Mug Link Button" title="Nerdy Mug"></a> <a href="https://leyworthy.neocities.org/"><img src="images/neosites/juki.gif" alt="Leyworthy site button" title="Leyworthy"></a> <a href="https://its-priestess.neocities.org/"><img src="images/neosites/convent_button.gif" alt="The Convent site button" title="The Convent"></a> <a href="https://steponleaf.neocities.org/"><img src="images/neosites/steponleaf.gif" alt="step on leaf site button" title="Steponleaf"></a> <a href="https://thegardenofmadeline.neocities.org/"><img src="images/neosites/gardenofmadeline_sitebutton.gif" alt="garden of madeline site button" title="Garden of Madeline"></a> <a href="https://gusbus.space/smallweb-subway/"><img src="images/neosites/smallway.gif" alt="Small web subway link button" title="Small web sunday"></a> <a href="https://caehdus.neocities.org/"><img src="images/neosites/caehdus.gif" alt="caehdus site button" title="caehdus"></a> <a href="https://blamensir.neocities.org/"><img src="images/neosites/blamensir.gif" alt="blamensire site button" title="Blamensir"></a> <a href="https://bearlythere.neocities.org/"><img src="images/neosites/bearlythere.gif" alt="bearly there site button" title="Bearly There"></a> <a href="https://mioasis.neocities.org/"><img src="images/neosites/miosis.gif" alt="mioasis site button" title="Mioasis"></a> <a href="https://ughbees.neocities.org/"><img src="images/neosites/ughbeesbutton.gif" alt="ughbees link button" title="UghBees"></a> <a href="https://dailypokemoncrochet.neocities.org/"><img src="images/neosites/dailypkm.gif" title="Daily Pokemon Crochet" alt="Daily Pokemon Crochet site button"></a> <a href="https://espy.world"><img src="images/neosites/espybutton.gif"></a>

</div>


### Buttonless but still cool 

<div class="bullets">
<ul>
<li><a href="https://dreambubble.neocities.org/garden">Learn to Garden</a></li>
<li><a href="https://anemptyblissbeyondthisworld.neocities.org/music/disco">Beginners Guide to Disco</a></li>
<li><a href="https://onnade.neocities.org/">In Women's Hands: Transmitting the Literature of Heian Japan</a></li>
<li><a href="https://bugstamp.net/">Daniel's Bug Stamp Collection</a></li>

</ul>
</div>

<div style="text-align: right;"><a href="#top">top <i class="arrow up"></i></a></div>
</div>


</div><!-- end freeze-->

<script>
  function freezegifs() {
    var x = document.querySelectorAll('.freeze img, img.freeze');
    for(var i=0; i<x.length; i++) {
      x[i].src = x[i].src.slice(0, -3) + 'png' ;}}

  function resumegifs() {
    var x = document.querySelectorAll('.freeze img, img.freeze');
    for(var i=0; i<x.length; i++) {
      x[i].src = x[i].src.slice(0, -3) + 'gif' ;}}

</script>