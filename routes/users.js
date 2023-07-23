const router = require('express').Router();
const {
  getUsers,
  getUser,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/users');
const { updateAvatarValidate, updateUserInfoValidate } = require('../middlewares/validation');

router.get('/', getUsers);

router.get('/me', getUser);
router.get('/:userId', getUser);
router.patch('/me', updateUserInfoValidate, updateUserInfo);
router.patch('/me/avatar', updateAvatarValidate, updateUserAvatar);

module.exports = router;
