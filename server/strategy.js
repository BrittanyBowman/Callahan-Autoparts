const localStrategy = require('passport-local');
const { PORT, CONNECTION_STRING, DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

module.exports = new localStrategy({
    domain: DOMAIN,
    ClientID: CLIENT_ID,
    ClientSecret: CLIENT_SECRET,
    callbackURL: '/login',
    scope: 'openid email profile'
},
function(profile, done) {
    return done(null, profile);
});