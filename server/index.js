//require packages
const bcrypt = require('bcrypt');
const express = require('express');
require("dotenv").config();
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


//db modules
const partsController = require('./controllers/parts_controller');

//destructering from process.env
const { PORT, CONNECTION_STRING } = process.env;

//setup massive database
massive(CONNECTION_STRING, {scripts: __dirname + '/db'}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
}).catch(err => console.log(err));

//setup express server
//configure app to use sessions and passport
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use( session({
    secret: 'secretone',
    resave: false,
    saveUninitialized: false
}));
//Always used with passport
app.use(passport.initialize());
//always used with session
app.use(passport.session());

//configure passport, take in middleware name and new "Strategy"
passport.use('login', new LocalStrategy({
    usernameField: 'username',
}, (username, password, done) => {
    const db = app.get('db');
    db.users.find({username}).then(userResults => {
        if(userResults.length == 0) {
            return done(JSON.stringify({message: 'username or password is invalid'}))
        };

        //if find user, store user in variable
        const user = userResults[0];

        //store password
        const storedPass = user.password;
        if (!bcrypt.compareSync(password, storedPass)){
            return done(JSON.stringify({message: 'username or password is invalid'}));
        };
        delete user.password;
        done(null, userResults[0]);
    }).catch(err => {
        console.warn(err);
        done(JSON.stringify({message: 'unknown error. try again.'}));
    });
}));

//Register a user
passport.use('register', new LocalStrategy({
    usernameField: 'username',
},
(username, password, done) => {
    const db = app.get('db');
    
    db.users.find({username}).then(userResults => {
        if (userResults.length > 0) {
            return done (JSON.stringify({message: 'username is already in use'}))
        };
        const hashedPassword = bcrypt.hashSync(password, 15);
        return db.users.insert({
            username,
            password: hashedPassword,
        });
    }).then(user => {
        done(null, user);
    }).catch(err => {
        console.warn(err);
        done(JSON.stringify({message: 'unknown error, try again.'}))
    });
}));
//these methods to pick what properties we want to store on session.
passport.serializeUser(function(user, done) {
    done(null, user.id)
});
passport.deserializeUser(function(id, done) {
    done(null, id);
});

//setup endpoints
//returns all the parts that have been added to the api
app.get('/api/parts', partsController.getAll); 
//deletes a part by the id parameter and returns the refreshed array
app.delete(`/api/parts/:id`, partsController.delete);
//user creates a new part and adds it to the parts api, then returns refreshed array
app.post('/api/parts', partsController.create);
//user updates a part and returns the refreshed array *not working, not setup*
app.post(`/api/parts/:id`, partsController.update);

//login endpoint, calls authenticate on passport. 
app.post('/login', passport.authenticate('login'), (req, res) => {
    return res.send({message: 'Authenticated!', user: req.user});
});
//register endpoint, 
app.post('/register', passport.authenticate('register'), (req, res) => {
    return res.send({message: 'Logged In!', user: req.user})
});


//listening on assigned port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));