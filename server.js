require('dotenv').config();
const keys = require('./config/keys');


/*********************
  EXPRESS REQUIREMENTS
 *********************/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


/*********************
  APPLICATION SERVER
 *********************/
//Heroku will dynamically allocate a PORT
const app = express();
const port = process.env.PORT || process.env.DEV_PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//TEST API Call
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hi There From Express Server.js' });
});

/********************
 * INITIALIZE LOCAL
 ********************/
require('./models/User');
require('./routes/userRoutes')(app);

/********************
 * START SERVER
 ********************/
app.listen(port, (err) => {
  if (err) return console.log(`ERROR port ${port}`);
  console.log(`Listening for requests on port ${port}`);
});

/********************
 * START MONGOOSE
 ********************/
 mongoose.Promise = Promise;
 mongoose.connect(
   keys.mongoURI,
  { useNewUrlParser: true }
);

/*********************
 PRODUCTION ENVIRONMENT
*********************/
if (process.env.NODE_ENV === 'production') {
  //Serve any static files from the React App
  app.use(express.static(path.join(__dirname, 'client/build')));

  //Handle React Routing, return all requests to React App
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

