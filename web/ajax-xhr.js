// DOM elements
var button = document.getElementById("button");
var render = document.getElementById("data")
var errorMsg = document.querySelector(".error")

// call ajax
button.addEventListener("click", function () {
  // create an XHR object
  var xhr = new XMLHttpRequest();

  // listen for `onload` event
  xhr.onload = function () {
    // process response
    if (xhr.status === 200) {
      // parse JSON data
      var data = JSON.parse(xhr.response);
      data.map(function (get) {
        // data render
        render.innerHTML += "\n            <tr>\n              <td>" +
        get.id +
        "</td>\n              <td>" +
        get.username +
        "</td>\n              <td>" +
        get.email +
        "</td>\n              <td>" +
        get.website +
        "</td>\n            </tr>\n            ";
      });
    } else {
      errorMsg.innerHTML = 'Error! not call or timeout expired AJAX';
    }
  } // create a `GET` request

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})
