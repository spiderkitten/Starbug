---
layout: layout/base.njk
title: Youtube Recs
description: 
eleventyExcludeFromCollections: true
---
<div class="textbox">

## Youtube Recs

Some channel recs and also an ongoing list of youtube videos I have watched and liked and think people may be interested in  


### Video Recs
{%- for videos in youtuberecs.videos reversed %}
<div class="youtubevidgrid">
<div><strong>{{videos.date}}</strong></div> <div><a href="{{videos.url}}">{{videos.title}}</a></div>
</div>
{%- endfor %}


### Channel Recs
{%- for channels in youtuberecs.channels reversed %}
<div class="youtubechannelgrid">
<div><strong><a href="{{ channels.url }}">{{ channels.name }}</a></strong></div> 
<div>{{ channels.description}}</div>

</div> 
{%- endfor %}


</div><!--textbox-->
 

<div class="textbox">

### Got a youtube rec?  

If you have a video you think I might like please leave a comment below!  
<div id="c_widget"></div>
<script src="js/comment-widget.js"></script>
</div>
