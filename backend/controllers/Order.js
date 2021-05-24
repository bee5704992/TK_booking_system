const db = require('../models');

const getAllOrders = async (req, res) => {
    const allOrders = await db.Order.findAll({ include: [db.OrderItem, db.User]});
    res.status(200).send(allOrders);
};

const userGetAllOrders = async (req, res) => {
    const allOrders = await db.Order.findAll({ where: { user_id: req.user.id }, include: [db.OrderItem]});
    res.status(200).send(allOrders);
};

const getOrderById = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetOrder = await db.Order.findOne({ where: { id: targetId }, include: [db.OrderItem] });
    res.status(200).send(targetOrder);
};

const createOrderAndOrderItem = async (req, res) => {
    const { date, time, price } = req.body; // order
    const { small_chicken1, big_chicken2, duck3, pork4 } = req.body; // orderItem
    const newOrder = await db.Order.create({
        isRecieved: false,
        date: date,
        time: time,
        price: price,
        user_id: req.user.id
    });

    if (small_chicken1) {
        await db.OrderItem.create({
            order_count: small_chicken1,
            item_id: 1,
            order_id: newOrder.id
        });
    };
    if (big_chicken2) {
        await db.OrderItem.create({
            order_count: big_chicken2,
            item_id: 2,
            order_id: newOrder.id
        });
    };
    if (duck3) {
        await db.OrderItem.create({
            order_count: duck3,
            item_id: 3,
            order_id: newOrder.id
        });
    };
    if (pork4) {
        await db.OrderItem.create({
            order_count: pork4,
            item_id: 4,
            order_id: newOrder.id
        });
    };


    res.status(201).send();
};

const updateOrder = async (req, res) => {
    const targetId = Number(req.params.id);

    const targetOrder = await db.Order.findOne({ where: { id: targetId } });
    if(targetOrder){
        await targetOrder.update({
            isRecieved: true
        });
        res.status(200).send({ message: "updating is success" });
    } else {
        res.status(404).send({message: 'order not found'});
    }
};

const deleteOrder = async (req, res) => {
    const targetId = Number(req.params.id);

    const targetOrder = await db.Order.findOne({ where: { id: targetId, user_id: req.user.id } });
    
    if(targetOrder){
        
        await db.OrderItem.destroy({ where: {order_id: targetId}});
        
        await targetOrder.destroy(); 
        res.status(204).send();
        
    }else{
        res.status(404).send({message: 'order not found'});
    }
};

const adminDelOrder = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetOrder = await db.Order.findOne({ where: { id: targetId } });

    if(targetOrder){
        
        await db.OrderItem.destroy({ where: {order_id: targetId}});
        
        await targetOrder.destroy(); 
        res.status(204).send();
        
    }else{
        res.status(404).send({message: 'order not found'});
    }
};

module.exports = {
    getAllOrders,
    userGetAllOrders,
    getOrderById,
    createOrderAndOrderItem,
    updateOrder,
    deleteOrder,
    adminDelOrder
}