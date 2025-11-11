
const { DateTime } = require('luxon'); // luxon plugin
const markdownIt = require("markdown-it"); // markdown-it plugin
const markdownItFootnote = require("markdown-it-footnote"); // mardown-it-footnotes plugin 

const md = new markdownIt({
    html: true, // Enables HTML tags (the default in 11ty but not markdown-it)
    typographer: true, // Automatically converts "" and '' into curly quotations and apostrophes
});


module.exports.config = {
    markdownTemplateEngine: 'njk',
};


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


// COLLECTIONS 

    module.exports = function (eleventyConfig) {
      eleventyConfig.addCollection("recipes", function (collectionApi) {
        return collectionApi
          .getAllSorted()
          .filter((item) => item.url && item.inputPath.startsWith("./recipes"));
      });
    };

    module.exports = function (eleventyConfig) {
      eleventyConfig.addCollection("TTRPGs", function (collectionApi) {
        return collectionApi
          .getAllSorted()
          .filter((item) => item.url && item.inputPath.startsWith("./TTRPGs"));
      });
    };

 


// OTHER STUFF

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

    // markdown-it options
      let options = {
        html: true,
        typographer: true
      };
      eleventyConfig.setLibrary("md", markdownIt(options));
      eleventyConfig.setLibrary("md", md);

      eleventyConfig.amendLibrary("md", function (md) {
        md.set({ typographer: true });
      });

    // Markdownit footnotes 
    let markdownLib = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItFootnote);
    eleventyConfig.setLibrary("md", markdownLib);


//  DIRECTORIES

  return {
    passthroughFileCopy: true,
    dir: {
      input: "local",
      output: "Public",
      includes: "_includes"
    },
  };


  };