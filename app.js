

// use express framework
const express = require('express');
const app = express();

// use request module
const reqs = require('request');

// set view engine
app.set('view engine', 'ejs');

// OMDb API key
// http://www.omdbapi.com/?apikey=1a06c5c4&
// usage example:
// https://www.omdbapi.com/?apikey=1a06c5c4&s=2001&plot=full


// set search route
app.get('/results', function(req, res) {
    // https://www.omdbapi.com/?apikey=1a06c5c4&s=2001&plot=full
    reqs('https://www.omdbapi.com/?apikey=1a06c5c4&s=2001&plot=full', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
    // res.render('search');
    res.send('HOME PAGE API');
});

// search results route
app.get('/search', function(req, res) {
    // res.render(results));
});



// start server
const port = 4000;
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));