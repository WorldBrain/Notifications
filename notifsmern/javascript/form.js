var notifForm = document.getElementById('notif-form');

notifForm.addEventListener('submit', function(event) {

  var headers = new Headers(); //tell headers we expect JSON back
  headers.set('Accept', 'application/json');

  var notifForm = new NotifForm();//format subimitted fields
  for (var i = 0; i < notifForm.length; ++i) {
    notifForm.append(notifForm[i].name, notifForm[i].value);
  }

  var url = 'http://localhost:4001/api/notifications';
  var fetchOptions = {
    method: 'POST',
    headers,
    body: formData
  };

  var responsePromise = fetch(url, fetchOptions);

  responsePromise
  .then(function(response){
    return response.json();
  })
  .then(function(jsonData){
    console.log(jsonData);
    document.getElementById('results').innerText =
    JSON.stringify(jsonData);
  });

  event.preventDefault();
});

// notifForm.onsubmit = function (e) {
//   event.preventDefault();
//
//   var request = new XMLHttpRequest();
//   request.open('POST', 'http://localhost:4001/api/notifications', /* async = */ false);
//
//   var formData = new FormData(document.getElementById('notif-form'));
//   request.send(formData);
//   console.log(request.response);
// }
