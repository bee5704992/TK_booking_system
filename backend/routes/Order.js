const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/Order');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

router.get('/order/', authentication, orderControllers.userGetAllOrders);
//router.get('/orderById/:id', authentication, orderControllers.getOrderById);
router.post('/order/', authentication, orderControllers.createOrderAndOrderItem);

router.delete('/order/:id', authentication, orderControllers.deleteOrder);

module.exports = router;