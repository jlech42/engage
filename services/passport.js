const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/dev');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); // pass on the unique mongo id
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user); // pass on the user
  });
});

//create new instance of spotify strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: '/auth/spotify/callback/'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ spotifyId: profile.id }).then(existingUser => {
        if (existingUser) {
          // record already exists``
          done(null, existingUser); // first argument is error, so call with null
        } else {
          // we need to create a new user
          new User({ spotifyId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
