

// use express framework
const express = require('express');
const app = express();

// use request module
const reqs = require('request');

// set view engine
app.set('view engine', 'ejs');

// use public assets
app.use(express.static('public'));

// OMDb API key
// http://www.omdbapi.com/?apikey=1a06c5c4&
// usage example:
// https://www.omdbapi.com/?apikey=1a06c5c4&s=alien&plot=full


// set search route
app.get('/results', function(req, res) {
    // get variable from the search form
    const query = req.query.search;
    let url = `https://www.omdbapi.com/?apikey=1a06c5c4&s=${query}&plot=full`

    // &=alien will be turned into a variable to make page interactive
    reqs(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
});

// home route
app.get('/', function(req, res) {
    res.render('search');
});



// start server
const port = 4000;
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));