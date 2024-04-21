// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('contactForm').addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       var name = document.getElementById('name').value;
//       var email = document.getElementById('email').value;
//       var message = document.getElementById('message').value;
  
//       // Create an object with the data
//       var formData = {
//         name: name,
//         email: email,
//         message: message
//       };
  
//       // Send the data to the server using fetch API
//       fetch('/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })
//       .then(response => response.json())
//       .then(data => {
//         // Handle response data
//         console.log(data);
//         alert('Thank you for your message! We will get back to you soon.');
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
  
//       // Clear the form
//       document.getElementById('contactForm').reset();
//     });
//   });
  
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var formData = { name: name, email: email, message: message };
  
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert('Thank you for your message! We will get back to you soon.');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission: ' + error.message);
    });
  });
  