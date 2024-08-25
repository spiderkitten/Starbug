window.onload = () => {

/*  fetch('header.html') // grab the page
  .then(data => {
    return data.text()
  })
  .then( data => {
    document.getElementById("header").innerHTML = data; // insert the page
  })

*/

  //

  fetch('nav.html')
  .then(data => {
    return data.text()
  })
  .then( data => {
    document.getElementById("nav").innerHTML = data;
  })

  //

  fetch('footer.html')
  .then(data => {
    return data.text()
  })
  .then( data => {
    document.getElementById("footer").innerHTML = data;
  })

  /*
  fetch('styles.html')
  .then(data => {
    return data.text()
  })
  .then( data => {
    document.getElementById("styles").innerHTML = data;
  })
  */

  //

  /* TABLE OF CONTENTS */

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

}


