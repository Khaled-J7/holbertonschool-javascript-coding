#!/usr/bin/node

const request = require('request');
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';

// Retrieve movie ID from command line argument
const movieId = process.argv[2];

// Construct the API endpoint URL
const url = `${apiUrl}${movieId}/`;

// Make a GET request to the API
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    // Parse the JSON response
    const film = JSON.parse(body);
    // Output the movie title
    console.log(film.title);
  }
});
