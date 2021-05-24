const express = require('express');
const router = express.Router();
const ItemControllers = require('../controllers/Item');
const soldItemControllers = require('../controllers/SoldItem');
const orderControllers = require('../controllers/Order');
const adminControllers = require('../controllers/Admin');

const passport = require('passport');

const authenticationAdmin = passport.authenticate('jwtAdmin', { session: false });

//admin
router.post('/createAdmin/', adminControllers.createAdmin);
router.post('/loginAdmin', adminControllers.loginAdmin);

// item
router.get('/items/', authenticationAdmin, ItemControllers.getAllItems);
router.get('/item/:id', authenticationAdmin, ItemControllers.getItemById);
router.put('/items/plus/:id', authenticationAdmin, ItemControllers.plusTotalCountById);

//soldItem
router.get('/soldItem/', authenticationAdmin, soldItemControllers.getAllSoldItems);
router.get('/soldItem/:id', authenticationAdmin, soldItemControllers.getSoldItemById);
router.post('/soldItem/', authenticationAdmin, soldItemControllers.createSoldItem);
router.delete('/delSold/:id', authenticationAdmin, soldItemControllers.adminDelSold);

//order
router.get('/order/', authenticationAdmin, orderControllers.getAllOrders);
router.get('/order/:id', authenticationAdmin, orderControllers.getOrderById);
router.put('/putOrder/:id', authenticationAdmin, orderControllers.updateOrder);
router.delete('/delOrder/:id', authenticationAdmin, orderControllers.adminDelOrder);

//remain = total - order - sold
router.get('/remain/:id', authenticationAdmin, ItemControllers.getRemain); 

module.exports = router;