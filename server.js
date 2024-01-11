//Code copied from https://codeforgeek.com/express-nodejs-tutorial/ 

//To run, type "node server.js" into the terminal
//Then navigate your browser to http://localhost:3000/

const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Jacob Brown");
});

const port = 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});