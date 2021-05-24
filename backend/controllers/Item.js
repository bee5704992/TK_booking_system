const db = require('../models');

const getAllItems = async (req, res) => {
    const allItems = await db.Item.findAll();
    res.status(200).send(allItems);
};

const getItemById = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetItems = await db.Item.findOne({ where: { id: targetId }});
    res.status(200).send(targetItems);
};

const plusTotalCountById = async (req, res) => {
    const targetId = Number(req.params.id);
    const plusNumber = Number(req.body.total_count);
    const targetItem = await db.Item.findOne({ where: { id: targetId }});
    if(targetItem){
        await targetItem.update({
            total_count: targetItem.total_count + plusNumber
        });
        res.status(200).send({message: 'update successful'});
    }else{
        res.status(404).send({message: 'Item not found'});
    }
};

const getRemain = async (req, res) => {
    const targetId = Number(req.params.id);    
    const targetTotalCount = await db.Item.findOne({ where: { id: targetId }});
    if(targetTotalCount){
        
        let targetOrderCount =  await db.OrderItem.sum('order_count', { where: { item_id: targetId }});
               
        let targetSoldCount =  await db.SoldItem.sum('sold_count', { where: { item_id: targetId }});
           
        res.status(200).send({value_total: targetTotalCount.total_count, value_order: targetOrderCount, value_sold: targetSoldCount});
    }else{
        res.status(404).send({message: 'Item not found'});
    };
};

module.exports = {
    getAllItems,
    getItemById,
    plusTotalCountById,
    getRemain
};