const express = require('express');
require("dotenv").config();
const massive = require('massive');
const bodyParser = require('body-parser');

const partsController = require('./controllers/parts_controller');

const { PORT, CONNECTION_STRING } = process.env;
//setup express server
const app = express();
app.use(bodyParser.json());

//setup massive database
massive(CONNECTION_STRING, {scripts: __dirname + '/db'}).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

//setup endpoints
app.get('/api/parts', partsController.getAll);
app.delete(`/api/part/:id`, partsController.delete);

//TODO !!!!
// app.post('/api/' , partsController.create);

//listening on assigned port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));