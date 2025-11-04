
// Tells Eleventy to look for the Luxon plugin
const { DateTime } = require('luxon');





// Module Exports starts here

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
      eleventyConfig.addPassthroughCopy("local/posts/tags/");
      eleventyConfig.addPassthroughCopy("local/TTRPGs/Koriko/*.png");


// FILTERS 

    // allow the use of limit to limit items displayed 
    eleventyConfig.addFilter("limit", function (arr, limit) {  return arr.slice(0, limit);});



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