window.onload = () => {


  /* TABLE OF CONTENTS H3 */

      // Get all headings
      var headings = document.querySelectorAll("h3");

      // Create TOC container
      var toc = document.getElementById("toc");

      // Iterate over headings
      for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];

        // Create TOC list item
        var li = document.createElement("li");
        li.innerHTML = heading.textContent;

        // Add hyperlink to TOC list item
        var link = document.createElement("a");
        link.href = "#" + heading.id;
        link.appendChild(li);

        // Add TOC list item to TOC container
        toc.appendChild(link);
      }

      /* TABLE OF CONTENTS H2 */

      // Get all headings
      var headings = document.querySelectorAll("h2");

      // Create TOC container
      var toc = document.getElementById("toc2");

      // Iterate over headings
      for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];

        // Create TOC list item
        var li = document.createElement("li");
        li.innerHTML = heading.textContent;

        // Add hyperlink to TOC list item
        var link = document.createElement("a");
        link.href = "#" + heading.id;
        link.appendChild(li);

        // Add TOC list item to TOC container
        toc.appendChild(link);
      }


}
