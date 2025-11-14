
const { DateTime } = require('luxon'); // luxon plugin

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




// FANFIC FILTERS

  eleventyConfig.addFilter("toUTC", function (value) {
    return new Date(value).toLocaleDateString("en-CA", {
      timeZone: "UTC",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("formatNum", function (value) {
    return new Intl.NumberFormat("en-CA").format(value);
  });

  eleventyConfig.addCollection("works", function (collection) {
    return collection.getFilteredByTag("works").reverse();
  });

  eleventyConfig.addCollection("postsByTag", function (collection) {
    const tagsSet = new Set();
    collection.getAll().forEach((item) => {
      if ("tags" in item.data) {
        item.data.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  });

  eleventyConfig.addCollection("postsByFandom", function (collection) {
    const tagsSet = new Set();
    collection.getAll().forEach((item) => {
      if ("fandom" in item.data) {
        item.data.fandom.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  });

  eleventyConfig.addFilter("find", function find(collection = [], slug = "") {
    return collection.filter((work) => work.data.title === slug);
  });

  eleventyConfig.addFilter("filterByTag", function (collection = [], tag = " ") {
      return collection.filter((work) => work.data.tags.includes(tag));
    }
  );

  eleventyConfig.addFilter("filterByFandom", function (collection = [], fandom ="") {
    return collection.filter((work) => work.data.fandom.includes(fandom));
  })

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "works", "post", "posts"].indexOf(tag) === -1
    );
  });

  eleventyConfig.addFilter("getAllFandoms", (collection) => {
    let fandomSet = new Set();
    for (let item of collection) {
      (item.data.fandom || []).forEach((fandom) => fandomSet.add(fandom));
    }

    return Array.from(fandomSet);
  });

  eleventyConfig.addFilter("getWorkId", function (url) {
    const workId = url.match(/\/works\/(\d+)/);
    return workId[1];
  });


// END FANFIC FILTERS












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


// PLUGIN OPTIONS 




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