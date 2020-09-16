const fetch = require('node-fetch');
const dash = require('dashdash');

const url = 'https://artii.herokuapp.com/make?text=curl++this';
const invalidUrl = "https://artii.herokuappxxxx.com/make?text=curl++this";

// fetch(url)
//     .then(res => res.text())
//     .then(txtRes => console.log(txtRes));
    // .then((res) => res.json())
    // .then((result1) => {
    //     console.log(result1);



  const options = {
    allowUnknown: true,
    options: [{
        names: ['output', 'o'],
        type: 'string',
        help: 'file in which to store the fetched content'
      },
    {
        names: ['help', 'h'],
        type: 'bool',
        help: 'Print this help and exit.'
    },
    {
        names: ['header', 'H'],
        type: 'arrayOfString',
        help: 'arbitrary header to set on the request, in the form "Header Name: Header Value"'
    },
    {
        names: ['agent', 'A'],
        type: 'string',
        help: 'set the user agent header to specified string'
    },
    {
        names: ['referer', 'e'],
        type: 'string',
        help: 'set the referer header to specified url'
    },
    {
        names: ['dump-header'],
        type: 'string',
        help: 'file where response headers will be dumped'
    },
    {
        names: ['data', 'd'],
        type: 'string',
        help: 'data to send in the body of the request'
    },
    {
        names: ['method', 'X'],
        type: 'string',
        help: 'sets the method of the request'
    }],
  };
  const parser = dash.createParser(options);

  const opts = parser.parse(options);
  

fetch(url)
  .then((res) => res.text())
  .then((txtRes) => console.log(txtRes))
  .catch(err => {
    if (err.errno === 'ENOTFOUND') {
      let host = new URL(invalidUrl).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    } else {
        console.log(err);
    }
  })
