---
title: Space Cadet
tagline: Just a girl floating through space...
layout: layout/base.njk
script: js/cassette-yt.js 
cssFile: "favmusic.css"
---

<h1>Intergalactic Disco</h1>

<p>This is just a place for me to share my favourite music. I'm a child of the 70s and 80s so most of the music here is going to be 60s, 70s, 80s and 90s. With maybe a few more recent ones.</p>

<p>bla bla bla   </p>


 <div id="player">
    <div class="player-wrapper">
        <h2 class="playername">General Music </h2>
    <div class="song-name-wrapper">
        <div class="song-name-inner">
             <div class="rotategrad"><div class="song-name" data-yt-role="song-name-display"></div>
            </div>
         </div>
    </div>
        
        <div class="controls-wrapper">
            <div class="buttons-wrapper">
                <button class="prev-button" data-yt-role="prev">
                        &lt;
                </button>
                <button class="playback-button" data-yt-role="playback">
                ▷
                </button>
                <button class="next-button" data-yt-role="next">
                        &gt;
                </button>
            </div>
            
            <div class="seekers-wrapper">
                    <span data-yt-role="song-current-time"></span>
                    <input type="range" data-yt-role="song-seeker">
                    <span data-yt-role="song-length"></span>|
                    <input type="range" min="0" max="100" value="50" class="volume-control" data-yt-role="volume-bar">
            </div>
        </div>
            
            <div class="song-list-wrapper">
                <div class="song-list-inner" data-yt-role="song-list">
                    <div class="song-list-entry" data-yt-role="song-list-entry">
                        <span data-yt-role="song-list-entry-number">1</span>. <span class="song-list-entry-text" data-yt-role="song-list-entry-text"> </span>
                    </div>
                </div>
            </div>
   </div>
</div>
  




<script>
    let songsData = [

	    {id: 'eo8vW_0H_Kg', name: 'testsong - test song artist'},
	    {id: 'W9mhsW5aWJM', name: 'test2'},
	]
	let songs =  Song.initializeFromDataArray(songsData);
	let player =  PlayerManager.getInstance().createPlayer(songs);
</script>