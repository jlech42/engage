const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// bring in user model
require('./models/User');

// run passport config
require('./services/passport');

//connect to mongodb
mongoose.connect(keys.mongoURI);

const app = express(); // create express instance

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// get authRoutes function and immediately call with app
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express serve up prod assets
  app.use(express.static('client/build'));

  // Express will serve index.html if route not recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
