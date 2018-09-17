const express = require('express');

// passport and spotify strategy
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./config/dev');

const app = express(); // create express instance

//create new instance of spotify strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: '/auth/spotify/callback/'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
  })
);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
