const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/dev');

const User = mongoose.model('users');

//create new instance of spotify strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: '/auth/spotify/callback/'
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ spotifyId: profile.id }).save();
    }
  )
);
