const express = require('express');

const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const rateLimits = require('express-rate-limit');
const router = require('./routes/index');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const { userInfoValidation, authInfoValidation } = require('./middlewares/validation');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

app.use(express.json());
app.use(helmet());
mongoose.connect(DB_URL);

app.use(rateLimits({ windowMS: 60000, max: 100, message: 'Превышен лимит запросов' }));

app.post('/signup', userInfoValidation, createUser);
app.post('/signin', authInfoValidation, login);

app.use(auth);

app.use(router);

app.use(errors());
app.use(error);
app.listen(PORT);
