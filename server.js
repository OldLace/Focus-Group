const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors')
const passport = require('passport');

const app = express();
require('dotenv').config();

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req,res) => {
  res.send('Hello Kareem! This Works');
});

const authRoutes = require('./routes/auth-routes');
app.use('/api/auth', authRoutes);

const bizRoutes = require('./routes/biz-routes');
app.use('/api/biz', bizRoutes);

const clientRoutes = require('./routes/client-routes')
app.use('/api/client', clientRoutes)

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not Found!',
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});
