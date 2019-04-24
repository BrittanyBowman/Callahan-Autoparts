//require packages
const express = require('express');
require("dotenv").config();
const massive = require('massive');
const bodyParser = require('body-parser');

//db modules
const partsController = require('./controllers/parts_controller');

//destructering from process.env
const { PORT, CONNECTION_STRING } = process.env;

//setup express server
const app = express();
app.use(bodyParser.json());

//setup massive database
massive(CONNECTION_STRING, {scripts: __dirname + '/db'}).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

//setup endpoints
//returns all the parts that have been added to the api
app.get('/api/parts', partsController.getAll); 
//deletes a part by the id parameter and returns the refreshed array
app.delete(`/api/parts/:id`, partsController.delete);
//user creates a new part and adds it to the parts api, then returns refreshed array
app.post('/api/parts', partsController.create);
//user updates a part and returns the refreshed array


//listening on assigned port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));