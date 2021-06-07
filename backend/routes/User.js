const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/User');

const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

//router.get('/', userControllers.getAllUsers);
//router.get('/getById/:id', userControllers.getUserById);

router.post('/register', userControllers.createUser);
router.post('/login', userControllers.loginUser);

router.put('/updateById/:id', userControllers.updateUser);
//router.delete('/deleteById/:id', userControllers.deleteUser);

router.get('/info', authentication, userControllers.infoUser);

router.post('/loginFB', userControllers.registerAndLoginFB);

module.exports = router;