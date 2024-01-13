//A router in this context is just the code that points the requests 
//in the right direction—it's showing them where they should go to get
//info they want.
const routes = require('express').Router();
const baseController = require('../controllers');

routes.get('/', baseController.getName);

//Note: this is how you specify what other files are getting when they 
//require this one.
module.exports = routes;