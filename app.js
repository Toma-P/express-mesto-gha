const express = require('express');

const app = express();
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./routes/index');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const { userInfoValidation, authInfoValidation } = require('./middlewares/validation');

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.post('/signup', userInfoValidation, createUser);
app.post('/signin', authInfoValidation, login);

app.use(auth);

app.use(router);

app.use(errors());
app.use(error);
app.listen(3000);
