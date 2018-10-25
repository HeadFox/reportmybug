const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs")
app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post('/', (req, res) => {
  console.log(req.body.browser);
  const base64Data = req.body.screenshot.replace(/^data:image\/jpeg;base64,/, "");

  fs.writeFile("screenshot.png", base64Data, 'base64', function(err) {
    console.log(err);
  });
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
