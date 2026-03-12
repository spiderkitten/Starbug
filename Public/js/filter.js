/* Filter Script 
Tutorial for filter: 
https://www.w3schools.com/howto/howto_js_filter_elements.asp   
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
*/ 

window.onload = () => {
  filterSelection('all')
};

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
/*
var btnContainer = document.getElementById("myBtnContainer");

var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/

/* the above code from w3 didn't work, this code seems to - the reply by KooiInc:  
https://stackoverflow.com/a/65614267   
*/ 

document.addEventListener("click", handleBttns);

function handleBttns(evt) {
  const origin = evt.target;

  if (origin.className.startsWith("btn")) {
    origin.closest("div").querySelectorAll("button.active")
      .forEach(btn => btn.classList.remove("active"));
    return origin.classList.add("active");
  }

  // reset all
  if (origin.id === "reset") {
    document.querySelectorAll("button.active")
      .forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll("div > button:first-child")
      .forEach(btn => btn.classList.add("active"));
  }
}