const express = require('express');
const mongoose = require('mongoose');
const devKeys = require('./config/dev');

// bring in user model
require('./models/User');

// run passport config
require('./services/passport');

//connect to mongodb
mongoose.connect(devKeys.mongoURI);

const app = express(); // create express instance

// get authRoutes function and immediately call with app
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
