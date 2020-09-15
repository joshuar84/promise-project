const fetch = require('node-fetch');

const url = 'https://artii.herokuapp.com/make?text=curl++this';
const invalidUrl = "https://artii.herokuFLAP.com/make?text=curl++this";

// fetch(url)
//     .then(res => res.text())
//     .then(txtRes => console.log(txtRes));
    // .then((res) => res.json())
    // .then((result1) => {
    //     console.log(result1);

fetch(invalidUrl)
  .then((res) => res.text())
  .then((txtRes) => console.log(txtRes))
  .catch((err) => console.log(err))
  .catch(err => {
    // if error code is "ENOTFOUND" => host wasnt found
    if (err.errno === 'ENOTFOUND') {
      // creates a url object so we can extract certain data
      // in this case all we want is the host, not the entire url
      let host = new URL(invalidUrl).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    } else {
        console.log(err);
    }
  })
  
