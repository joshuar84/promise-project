const fetch = require('node-fetch');
const dash = require('dashdash');

const url = 'https://artii.herokuapp.com/make?text=curl++this';
const invalidUrl = "https://artii.herokuapp.com/makexxxx?text=curl++this";

// fetch(url)
//     .then(res => res.text())
//     .then(txtRes => console.log(txtRes));
    // .then((res) => res.json())
    // .then((result1) => {
    //     console.log(result1);

fetch(url)
  .then((res) => res.text())
  .then((txtRes) => console.log(txtRes))
//   .catch((err) => console.log(err))
  .catch(err => {
    if (err.errno === 'ENOTFOUND') {
      let host = new URL(invalidUrl).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    } else {
        console.log(err);
    }
  })

  const options = {
    allowUnknown: true,
    options: [{
        names: ['output', 'o'],
        type: 'string',
        help: 'file in which to store the fetched content'
      }],
  };
  const parser = dash.createParser(options);

  const opts = parser.parse(options);
  console.log('Options are:', opts);
