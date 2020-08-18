$('#get-users').click(() => {
  jQuery.getJSON('http://jsonplaceholder.typicode.com/users', (data) => {
    let template;
    $.each(data, (_i, get) => {
      template += `
      <tr>
        <td>${get.id}</td>
        <td>${get.username}</td>
        <td>${get.email}</td>
        <td>${get.website}</td>
      </tr>
      `;
    });
    $('#print-users').html(template);
  })
    .fall((err) => {
      document.querySelector('#error-msg').innerHTML = err;
    });
});
