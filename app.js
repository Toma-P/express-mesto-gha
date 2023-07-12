const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use((req, res, next) => {
  req.user = {
    _id: '64ad71212f24f4fb1a7c8ae4'
  };

  next();
});

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.listen(3000);
