// DOM elements
const button = document.getElementById('button');
const render = document.getElementById('data');
const errorMsg = document.querySelector('.error');

// call ajax
button.addEventListener('click', () => {
  fetch('http://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      data.map((get) => {
        // data render
        render.innerHTML += `
            <tr>
              <td>${get.id}</td>
              <td>${get.username}</td>
              <td>${get.email}</td>
              <td>${get.website}</td>
            </tr>
            `;
        return render;
      });
    })
    .catch((err) => {
      errorMsg.innerHTML = err;
      return errorMsg;
    });
});
