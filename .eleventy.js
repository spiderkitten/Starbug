
const { DateTime } = require('luxon'); // luxon plugin
const embeds = require("eleventy-plugin-embed-everything");

// markdown-it plugin
const markdownIt = require("markdown-it");
const md = new markdownIt({
    html: true, // Enables HTML tags (the default in 11ty but not markdown-it)
    typographer: false, // Automatically converts "" and '' into curly quotations and apostrophes
});

const markdownItFootnote = require("markdown-it-footnote");
const emoji = require("markdown-it-emoji").full;

// Module.Exports starts here

module.exports = function (eleventyConfig) {

  // This makes the eleventy command quieter (with less detail)
  eleventyConfig.setQuietMode(true);

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // passthrough
      eleventyConfig.addPassthroughCopy("local/css"); 
      eleventyConfig.addPassthroughCopy("local/images");
      eleventyConfig.addPassthroughCopy("local/js");
      eleventyConfig.addPassthroughCopy("local/fonts");
      eleventyConfig.addPassthroughCopy("local/ai.txt"); 
      eleventyConfig.addPassthroughCopy("local/robots.txt");
      eleventyConfig.addPassthroughCopy("local/TTRPGs/Koriko/*.png");


// FILTERS 

    // allow the use of limit to limit items displayed 
    eleventyConfig.addFilter("limit", function (arr, limit) {  return arr.slice(0, limit);});

  // Luxon dates
    eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "DDD");
	});
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('dd-LLL-yyyy');
	});



    // Next & Previous links on bottom of posts
    eleventyConfig.addCollection("posts", function(collection) {
      const coll = collection.getFilteredByTag("posts");
  
      for(let i = 0; i < coll.length ; i++) {
          const prevPost = coll[i-1];
          const nextPost = coll[i + 1];
  
          coll[i].data["prevPost"] = prevPost;
          coll[i].data["nextPost"] = nextPost;
      }
  
      return coll;
  });


// PLUGIN STUFF

//markdown-it plugins
eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    linkify: true,
    typographer: false,
  })

);

  eleventyConfig.amendLibrary('md', (mdLib) =>
    mdLib
      .use(markdownItFootnote)
      .use(emoji)
  );


    // embed everything https://gfscott.com/embed-everything/
    eleventyConfig.addPlugin(embeds);




//  DIRECTORIES

  return {
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "local",
      output: "Public",
      includes: "_includes"
    },
  };


  };