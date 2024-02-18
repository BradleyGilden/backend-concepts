# OAuth2

* an authorization prcoess that abstracts login details by creating a token to verify with an external service/application that a user has already logged into.
* with this access, the application will able to access data relating to the external service they logged in with
* a users credetials are never exposed to the application using OAuth, only the data related to the external application in the sign up process
* The access token can set to expire at any time or be revoked at any time
* OAuth2 can also generate referesh tokens when the old one expires without the developers intervention


## Code breakdown

```javascript
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
```

1. `passport.use(...)`: This sets up the Google OAuth 2.0 authentication strategy with Passport.js. It takes an options object as the first argument, where you specify the client ID, client secret, callback URL, and any other necessary options. In this case, it's configured to use environment variables for the client ID and client secret, and the callback URL is set to `http://localhost:3000/auth/google/callback`. The `passReqToCallback` option is set to `true`, which means that the request object will be passed to the verify callback function.

2. `function(request, accessToken, refreshToken, profile, done) { ... }`: This is the verify callback function. It is called when a user successfully authenticates with Google and returns their profile information. The function signature is `(request, accessToken, refreshToken, profile, done)`. It receives the request object, the access token provided by Google, a refresh token (if applicable), the user's profile information, and a callback function `done`. In this example, it simply calls `done(null, profile)` to indicate successful authentication and passes the user's profile to the `done` function.

```javascript
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
```

3. `passport.serializeUser((user, done) => { ... })`: This method defines how Passport.js serializes users to store them in the session. It is called after a user is authenticated and sets up a unique identifier for the user in the session. In this case, it simply calls `done(null, user)` to indicate that the entire user object should be serialized.

4. `passport.deserializeUser((user, done) => { ... })`: This method defines how Passport.js deserializes users from the session. It is called every time a user makes a request, allowing Passport.js to retrieve the user's information from the session and attach it to the `req.user` property. In this case, it simply calls `done(null, user)` to indicate that the user object should be deserialized as is.

These serialize and deserialize functions are necessary for managing user sessions in Express.js with Passport.js. They ensure that user information is stored and retrieved from the session properly, allowing for persistent authentication across multiple requests.
