


// Embed Everything plugin (see CONST above) 
// https://www.npmjs.com/package/eleventy-plugin-embed-everything  
const embedEverything = require("eleventy-plugin-embed-everything");  

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(embedEverything);
};


// stuff that Eleventy processes when it exports site

module.exports = function (eleventyConfig) {

    // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

    // This makes the eleventy command quieter (with less detail)
    eleventyConfig.setQuietMode(true); 

    // copy to public folder


    eleventyConfig.addPassthroughCopy("./local/css");
    eleventyConfig.addWatchTarget("./local/css");
    eleventyConfig.addPassthroughCopy("./local/images");
    eleventyConfig.addWatchTarget("./local/images");
    eleventyConfig.addPassthroughCopy("./local/js");
    eleventyConfig.addPassthroughCopy("./local/fonts");

    eleventyConfig.addPassthroughCopy("local/robots.txt");
    eleventyConfig.addPassthroughCopy("local/ai.txt");





    // Adds Next & Previous links to the bottom of blog posts
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

    // "local" = local, "public" = upload
        return {
            dir: {
                input: "local",
                output: "public",
            },
        };
    };