
 
  function freezegifs() {
    var x = document.querySelectorAll('.freeze img, img.freeze');
    for(var i=0; i<x.length; i++) {
      x[i].src = x[i].src.slice(0, -3) + 'png' ;}}

  function resumegifs() {
    var x = document.querySelectorAll('.freeze img, img.freeze');
    for(var i=0; i<x.length; i++) {
      x[i].src = x[i].src.slice(0, -3) + 'gif' ;}}
 