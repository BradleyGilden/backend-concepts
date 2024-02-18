const express = require('express');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const session = require('express-session');
require("dotenv").config();

const app = express()
app.use(session({ secret: 'cats' }))
app.use(passport.initialize());
app.use(passport.session());


// defining middleware

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req, res) => {
  res.status(200).send('<a href="/auth/google">Authenticate with google</a>')
})

// The first route redirects the user to the service provider.
// When requesting access using OAuth 2.0, the scope of access is controlled by the scope option.
app.get('/auth/google', 
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

// The second route is the URL to which the user will be redirected after authenticating with the provider
// if auth was granted, user will be redirected to successRedirect route
// else the user will be directed to failureRedirect route
app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send("auth failure");
})

app.get('/protected', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send("Hello!");
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("backend service is listening...")
})
