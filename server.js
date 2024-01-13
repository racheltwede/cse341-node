//Code copied from https://codeforgeek.com/express-nodejs-tutorial/ 

//To run, type "node server.js" into the terminal
//Then navigate your browser to http://localhost:3000/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});