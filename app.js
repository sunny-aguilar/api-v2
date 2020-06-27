

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
// https://www.omdbapi.com/?apikey=1a06c5c4&s=alien&plot=full


// set search route
app.get('/results', function(req, res) {
    // &=alien will be turned into a variable to make page interactive
    reqs('https://www.omdbapi.com/?apikey=1a06c5c4&s=alien&plot=full', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
});

// search results route
app.get('/', function(req, res) {
    // res.render(results));
});



// start server
const port = 4000;
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));