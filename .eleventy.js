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
     
     eleventyConfig.addFilter('blogDate', blogDate) 

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