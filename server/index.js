//require packages
const express = require('express');
require("dotenv").config();
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const strategy = require(`${__dirname}/strategy.js`)

//db modules
const partsController = require('./controllers/parts_controller');
const usersController = require('./controllers/user_controller');

//destructering from process.env
const { PORT, CONNECTION_STRING, DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

//setup express server
//configure app to use sessions and passport
const app = express();
app.use(bodyParser.json());
app.use( session({
    secret: 'secretone',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
//these methods to pick what properties we want to store on session.
passport.serializeUser(function(user, done) {
    done(null, {id: user.id, display: user.displayName})
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

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
//user updates a part and returns the refreshed array *not working, not setup*
app.post(`/api/parts/:id`, partsController.update);
//user can login *wrong setup*NeedS session*
app.post(`api/login`, usersController.login);
//uder can register
app.post(`/api/register`, usersController.register);
//updates username
app.post(`/api/register`, usersController.register);
//login endpoint, calls authenticate on passport. 
app.get('/login', passport.authenticate('localStrategy', {successRedirect: '/me', failureRedirect: '/login', failureFlash: true}))
//check to see if user exists
app.get('/me', (req, res, next) =>{
    if (!req.user) {
        res.redirect('/login');
    } else {res.status(200).send(JSON.stringify(req.user, null, 10))}
});


//listening on assigned port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));