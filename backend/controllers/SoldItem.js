const db = require('../models');

const getAllSoldItems = async(req, res) => {
    const allSoldItems = await db.SoldItem.findAll();
    res.status(200).send(allSoldItems);
};

const getSoldItemById = async (req, res) => {
    const targetId = req.params.id;
    const targetSoldItem = await db.SoldItem.findOne({ where: {id: targetId}});
    res.status(200).send(targetSoldItem);
};

const createSoldItem = async (req, res) => {
    const {sold_count, item_id} = req.body;
    const newSoldItem = await db.SoldItem.create({
        sold_count: sold_count,
        item_id: item_id
    });
    res.status(201).send(newSoldItem);
};

const adminDelSold = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetSold = await db.SoldItem.findOne({ where: {id: targetId}});

    if(targetSold){
        await targetSold.destroy();
        res.status(204).send();
    }else{
        res.status(404).send({message: 'soldItem not found'});
    }
};

module.exports = {
    getAllSoldItems,
    getSoldItemById,
    createSoldItem,
    adminDelSold
};