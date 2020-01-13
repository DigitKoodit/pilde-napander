var apiUrl = 'https://ay6i44yayb.execute-api.eu-north-1.amazonaws.com/production/';

var formEl = document.getElementById('joke-form');

if (formEl) {
  formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    var body = [
      formEl[0].value,
      formEl[1].value,
      formEl[2].value
    ];

    fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((res, err) => {
        if (err) console.log(err);
        return res.json();
      })
      .then(data => {
        if (data.statusCode === 200) alert('Ebin! Vitsi lähetetty');
      });
  });
}