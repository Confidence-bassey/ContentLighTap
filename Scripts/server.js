var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();
var cors = require('cors');
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up your database connection details
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3308',
  user: 'root',
  password: 'root',
  database: 'ContentLighTap'
});

// Connect to the database
connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');
});

// Endpoint to handle form submissions
app.post('/submit-form', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  // Log the received data to the console
  console.log('Received data:', { name: name, email: email, message: message });

  // Insert data into the database
//   var sql = 'INSERT INTO contact_forms (name, email, message) VALUES (?, ?, ?)';
//   connection.query(sql, [name, email, message], function (err, result) {
//     if (err) {
//       console.error('Error inserting data into the database', err);
//       res.status(500).send({ message: 'Error inserting data into the database' });
//     } else {
//       console.log('Contact form data inserted');
//       res.send({ message: 'Data received' });
//     }
//   });
// });

var sql = 'INSERT INTO contact_forms (name, email, message) VALUES (?, ?, ?)';
  connection.query(sql, [name, email, message], function (err, result) {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data into the database');
    } else {
      console.log('Contact form data inserted:', result);
      res.status(200).send('Data inserted successfully');
    }
  });
});

// Start the server
var port = 3000;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
