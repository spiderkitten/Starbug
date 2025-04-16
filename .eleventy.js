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
     

  return {
    passthroughFileCopy: true,
    dir: {
      input: "local",
      output: "Public",
      includes: "_includes"
    },
  };
};