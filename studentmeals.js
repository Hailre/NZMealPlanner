function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, resultFound;
  input = document.getElementById('searchbox');
  filter = input.value.toUpperCase();
  ul = document.getElementById("studentrecipes");
  li = ul.getElementsByTagName('li');

      // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            resultFound = true;
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    if(resultFound) {
        document.getElementById("search-results").style.display = "";
    } else {
        document.getElementById("search-results").style.display = "block";
    }
  }

