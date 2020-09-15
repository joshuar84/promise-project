const fetch = require('node-fetch');

const url = 'https://artii.herokuapp.com/make?text=curl++this';
const invalidUrl = "https://artii.herokuFLAP.com/make?text=curl++this";

fetch(url)
    .then(res => res.text())
    .then(txtRes => console.log(txtRes));
    // .then((res) => res.json())
    // .then((result1) => {
    //     console.log(result1);

fetch(invalidUrl)
  .then((res) => res.text())
  .then((txtRes) => console.log(txtRes))
  .catch((err) => console.log(err))
