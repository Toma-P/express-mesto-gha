const express = require('express');

const app = express();
const mongoose = require('mongoose');
const router = require('./routes/index');

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use((req, res, next) => {
  req.user = {
    _id: '64ad71212f24f4fb1a7c8ae4',
  };

  next();
});
app.use(router);

app.listen(3000);
