// Tells Eleventy to look for the Luxon plugin
const { DateTime } = require('luxon');

// Tells Eleventy to look for the RSS plugin
const pluginRss = require("@11ty/eleventy-plugin-rss");


// Embed Everything plugin 
// https://www.npmjs.com/package/eleventy-plugin-embed-everything  
const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(embedEverything);
};



// Reading Time 
// https://www.npmjs.com/package/@myxotod/eleventy-plugin-readingtime
// see above link for options
// USAGE:  
// <div>Reading time: {{ post | readingtime }}</div>

const readingtime = require("@myxotod/eleventy-plugin-readingtime");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(readingtime);
};




// This is all the stuff that Eleventy is going to process when it exports your site

module.exports = function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

    // Edit these to include your images, CSS, and other folders and files that you want to copy over to your public folder. "addPassThroughCopy" means it will copy those files over as-is without processing them, and "addWatchTarget" means it tracks changes and updates live when you use the --serve command
    eleventyConfig.addPassthroughCopy("./local/css");
    eleventyConfig.addWatchTarget("./local/css/");
    eleventyConfig.addPassthroughCopy("./local/images");
    eleventyConfig.addWatchTarget("./local/images/");
    eleventyConfig.addPassthroughCopy("./local/js");
    eleventyConfig.addPassthroughCopy("./local/fonts");
    eleventyConfig.addPassthroughCopy("./local/not_found.html");
    eleventyConfig.addPassthroughCopy("local/robots.txt");
    eleventyConfig.addPassthroughCopy("local/ai.txt");
    // Load the RSS plugin
    eleventyConfig.addPlugin(pluginRss);


    // Adds Next & Previous links to the bottom of our blog posts
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

    // Return the length of a collection for tag clouds 
    eleventyConfig.addFilter('length', (collection) => {
        return collection[1].length;
    });


 






    // Add the filter "readableDate" to simplify the way blog dates are presented. Change the timezone to your own
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
            'yyyy-LLL-dd'
            );
        });

    eleventyConfig.addFilter('dayMonthYear', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
            'DDD'
            );
        });


    // Slices up RSS posts
    eleventyConfig.addFilter("head", function (arr=[], count=1) {
        if (count < 0) {
            return arr.slice(count);
        }
        return arr.slice(0, count);
    });

  // This makes the eleventy command quieter (with less detail)
        eleventyConfig.setQuietMode(true);


    // These are the folders that Eleventy will use. "src" is where you edit files that Eleventy will then take in and export into "public," which you upload.
        return {
            dir: {
                input: "local",
                output: "public",
            },
        };
    };