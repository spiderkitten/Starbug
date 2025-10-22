---
title: Commonplace Book
layout: layout/base.njk
cssFile: commonplace.css
---

<div class="textbox">

### Commonplace Book

<noscript>This page requires Javascript, sorry.</noscript> 

<div class="container">

<div class="item">
<h3>Intro</h3>

This is my Commonplace Book, just a place for me to dump tiny snippets of knowledge, things I want to remember, or just random things I come across that I enjoy. KInda like my own personal pinterest page. Not much here right now! WIP.

<div id="filterContainer">
  <button class="navbutton active" onclick="filterSelection('all')"> Show all</button>
  <button class="navbutton" onclick="filterSelection('youtube')">Youtube</button>
  <button class="navbutton" onclick="filterSelection('list')">Lists</button>
  <button class="navbutton" onclick="filterSelection('image')">Images</button>
</div> 

<noscript>This page requires Javascript, sorry. 
</noscript> 
</div>

<!-- ================= -->

{%- for commonplace in commonplace -%}
 <div class="filterDivCommonplace {{ commonplace.category }}"> 
    <div class="item">
        {%- if commonplace.youtube != "" %}
        {{ commonplace.youtube }}
        <quote>{{ commonplace.caption}}</quote>
        {%- endif %}
        {%- if commonplace.list != "" -%}
        <h3>{{ commonplace.title }}</h3>
        {{- commonplace.list -}}
        {%- endif -%} 
        {%- if commonplace.image != "" %} 
        <img class="modal_image" src="images/commplace/{{ commonplace.image }}" id="myImg"> 
        <quote>{{ commonplace.caption }}</quote>
        {%- endif %} 

        {%- if commonplace.quote != "" %} 
        <quote>{{ commonplace.quote }}</quote>
        {%- endif %} 
    </div> <!-- item -->
     </div><!-- filterdiv -->
{%- endfor -%}
</div><!-- container -->


<!-- The Modal 
code from: https://stackoverflow.com/a/40701429
-->
<div id="myModal" class="modal">
  <span class="close">×</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>





<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a cap
var img = document.getElementsByClassName('modal_image');
for(var i=0; i<img.length; i++){
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img[i].addEventListener('click',function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

</script>


<!-- Filter Script 
Tutorial for filter: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
-->
<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDivCommonplace");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("navbutton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>
