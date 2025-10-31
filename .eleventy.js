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
      eleventyConfig.addPassthroughCopy("local/beehappy/style.css");
    eleventyConfig.addPassthroughCopy("local/posts/tags/");

// allow the use of limit to limit items displayed 
eleventyConfig.addFilter("limit", function (arr, limit) {  return arr.slice(0, limit);});


    // Return the length of a collection for tag clouds (thank you Claus!!)
    eleventyConfig.addFilter('length', (collection) => {
        return collection[1].length;
    });

      // blogDate pairs with function below
      eleventyConfig.addFilter('blogDate', blogDate) 
      
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

  return {
    passthroughFileCopy: true,
    dir: {
      input: "local",
      output: "Public",
      includes: "_includes"
    },
  };
  
  // function to set date to format: January 1st, 2024
  // pairs with above code: eleventyConfig.addFilter('blogDate', blogDate)
  function blogDate(input) {
    return `${new Date(input).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  }






};