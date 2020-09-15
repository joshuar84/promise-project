const fetch = require('node-fetch');

const url = 'https://artii.herokuapp.com/make?text=curl++this';

fetch(url)
    .then((res) => res.json())
    .then((result1) => {
        console.log(result1);
    })
