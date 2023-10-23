

// first reference required modules
const fs = require('fs');
const path = require('path');
const express = require('express');

// for now, we will get our data by reading the provided json file
const jsonPath = path.join(__dirname, '', 
                           'paintings.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');
// convert string data into JSON object
const paintings = JSON.parse(jsonData);

// create an express app
const app = express();

// tell node to use json and HTTP header features in body-parser
app.use(express.json());

// handle requests for static resources

app.use(express.static(__dirname+'/public'));

app.get('/listener.css', function(req, res) {
  res.sendFile(__dirname + "/" + "listener.css");
});






app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/listener_main.html'));
});

//profile tab
app.get('/listener_profile.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/listener_profile.html'));
});

//music tab
app.get('/listener_music.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/listener_music.html'));
});

//podcast tab
app.get('/listener_podcast.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/listener_podcast.html'));
});

//news tab
app.get('/listener_news.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/listener_news.html'));
});







 
// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});
