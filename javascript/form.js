// var notifForm = document.getElementById('notif-form');
//
// notifForm.addEventListener('submit', function(event) {
//
//   var headers = new Headers(); //tell headers we expect JSON back
//   headers.set('Accept', 'application/json');
//
//   var notifForm = new NotifForm();//loop through input items and appends values
//   for (var i = 0; i < notifForm.length; ++i) {
//     notifForm.append(notifForm[i].name, notifForm[i].value);
//   }
//
//   //give fetch url and form data options
//   var url = 'http://localhost:4002/api/notifications';
//   var fetchOptions = {
//     method: 'POST',
//     headers
//     body: formData,
//     // mode: 'cors' //not sure if this is needed?
//   };
//
//   var responsePromise = fetch(url, fetchOptions);
//
//   responsePromise //convert response into JSON object
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(jsonData){
//     console.log(jsonData);
//     document.getElementById('results').innerText =
//     JSON.stringify(jsonData);
//   });
//   event.preventDefault();
//
// });

//Access form element
// var form = document.getElementById('notif-form');
//
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   var formData = {
//     title: document.getElementById('title').value
//     body: document.getElementById('body').value
//   }
//
//   function createNotif() {
//     fetch('http://localhost:4002/api/notifications', {
//       method: 'post',
//       body: JSON.stringify(formData),
//       headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(function(response) {
//       return response.json() {
//         console.log('parsed json', json);
//       }
//     }).catch(function(err) {
//       console.log('create json failed', err);
//     });
//   }
// })
//   function submitNotif() {
//     var content = document.querySelector('textarea').value;
//     if (content) {
//       createNotif({
//         description: 'Fetch API POST',
//         public: true,
//       });
//     } else {
//       console.log('please enter message');
//     }
//   }
// })




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
