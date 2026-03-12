---
title: TF2 Freeze Cams
layout: layout/base.njk
cssFile: modal.css
script: modal.js
eleventyExcludeFromCollections: true
---


<h2>TF2 Freezecams</h2>

When you die in TF2 you get a freeze frame of the person who killed you and you can take a screen shot. I thought it might be fun to share some of mine! 
<div class="textbox">
<h3>Spies being Spies!</h3>
<div class="gallery">

  <img src="/images/tf2/freezecams/spy1.png" alt="Spy about to kill a Soldier" class="gallery-item" onclick="openModal('modal1', 'Look out Soldier!')">
  <img src="/images/tf2/freezecams/spy2.png" alt="Spy getting killed by a medic" class="gallery-item" onclick="openModal('modal2', 'Take that Spy!')">
  <img src="/images/tf2/freezecams/spy3.png" alt="Spy about to kill a Soldier" class="gallery-item" onclick="openModal('modal3', 'Behind You Soldier!')">
  <img src="/images/tf2/freezecams/spy4.png" alt="Spy disguised as a soldier about to kill a Heavy" class="gallery-item" onclick="openModal('modal4', 'Good Work Spy!')">
  <img src="/images/tf2/freezecams/spy5.png" alt="Spy about to stab a Sniper" class="gallery-item" onclick="openModal('modal5', 'Doing good work Spy!')">

</div>

<h3>Others</h3>

<div class="gallery">
  <img src="/images/tf2/freezecams/medic1.png" alt="Medic splattered on the ground" class="gallery-item" onclick="openModal('modal6', 'Medic regretting his life choices')">

<img src="/images/tf2/freezecams/scout1.png" alt="Scout looking mean" class="gallery-item" onclick="openModal('modal7', 'Scout is out to get you')">

</div>


<div id="modal1" class="modal">
  <span class="close" onclick="closeModal('modal1')">&times;</span>
  <img src="/images/tf2/freezecams/spy1.png" alt="Spy about to kill a Soldier" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal2" class="modal">
  <span class="close" onclick="closeModal('modal2')">&times;</span>
  <img src="/images/tf2/freezecams/spy2.png" alt="Spy getting killed by a medic" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal3" class="modal">
  <span class="close" onclick="closeModal('modal3')">&times;</span>
  <img src="/images/tf2/freezecams/spy3.png" alt="Spy about to kill a Soldier" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal4" class="modal">
  <span class="close" onclick="closeModal('modal4')">&times;</span>
  <img src="/images/tf2/freezecams/spy4.png" alt="Spy disguised as a soldier about to kill a Heavy" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal5" class="modal">
  <span class="close" onclick="closeModal('modal5')">&times;</span>
  <img src="/images/tf2/freezecams/spy5.png" alt="Spy about to stab a Sniper" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal6" class="modal">
  <span class="close" onclick="closeModal('modal6')">&times;</span>
  <img src="/images/tf2/freezecams/medic1.png" alt="Medic splattered on the ground" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal7" class="modal">
  <span class="close" onclick="closeModal('modal7')">&times;</span>
  <img src="/images/tf2/freezecams/scout1.png" alt="Scout looking mean" class="modal-content">
  <div class="caption"></div>
</div>

</div>


<!-- Gallery template

change url
alt text
modal number
subtitle


<img src="/images/tf2/freezecams/.png" alt="" class="gallery-item" onclick="openModal('modal4', 'SUBTITLE')">
-->

<!-- MODAL TEMPLATE

change modalX x2
imageurl
alt text

<div id="modalX" class="modal">
  <span class="close" onclick="closeModal('modalX')">&times;</span>
  <img src="/images/tf2/freezecams/.png" alt="Spy disguised as a soldier about to kill a Heavy" class="modal-content">
  <div class="caption"></div>
</div>

-->
