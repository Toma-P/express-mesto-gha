const router = require('express').Router();
const cardsRouter = require('./cards');
const usersRouter = require('./users');
const { NOT_FOUND } = require('../utils/errors');

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);
router.use('*', (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Страница не найдена' });
});

module.exports = router;
