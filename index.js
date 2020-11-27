require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const error = require('./middleware/error');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const { logger } = require('./logger');
const { transports } = require('winston');
const app = express();

// process.on('uncaughtException', (ex)=> {
//   logger.error('Error', ex);
//   // process.exit(1);
// });

logger.exceptions.handle(
  new transports.File({ filename: 'exceptions.log' })
);

process.on('unhandledRejection', (ex)=> {
  // logger.error('Error', ex);
  // process.exit(1);
  throw ex
});


logger.add(new winston.transports.Console({
  format: winston.format.simple()
}));
// winston.add(new winston.transports.File({ 
//   filename: 'logfile.log',
//   handleExceptions: true
// }));

const p = Promise.reject(new Error('Something failed miserably!'));
p.then(()=> console.log('Done'));

throw new Error('Something got failed');

if(!config.get('jwtPrivateKey')){
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

mongoose.connect('mongodb://localhost/vidly-test')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));