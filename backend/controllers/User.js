const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
    const allUsers = await db.User.findAll();
    res.status(200).send(allUsers);
};

const getUserById = async (req, res) => {
    const targetId = req.params.id;
    const targetUser = await db.User.findOne({ where: { id: Number(targetId) }});
    res.status(200).send(targetUser);
};

const createUser = async (req, res) => {
    const {email, password, name, phone} = req.body;
    const targetUser = await db.User.findOne({ where: { email: email }});
    if(targetUser){
        res.status(400).send({message: 'email already taken.'});
    }else{
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        await db.User.create({
            email: email,
            password: hashedPassword,
            name: name,
            phone: phone,
        });
        res.status(201).send({message: 'user created.'});
    };
};

const updateUser = async (req, res) => {
    const {email, password, name} = req.body;
    const targetId = req.params.id;
    await db.User.update({
        email: email,
        password: password,
        name: name
    }, {
        where: {id: targetId}
    });
    res.status(200).send(`user id${targetId} updated`);
};

const deleteUser = async (req, res) => {
    const targetId = req.params.id;
    await db.User.destroy({
        where: {id: targetId}
    });
    res.status(204).send();
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const targetUser = await db.User.findOne({ where: { email: email }});
    if(!targetUser){
        res.status(400).send({message: 'email or password is wrong.'});
    }else{
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if(isCorrectPassword){
            const payload = {
                name: targetUser.name,
                id: targetUser.id,                
            };
            const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
            res.status(200).send({
                token: token,
                message: 'login successful.'
            });
        }else{
            res.status(400).send({message: 'email or password is wrong.'});
        };
    };
};

const infoUser = async (req, res) => {
    res.status(200).send(req.user);
};

const registerAndLoginFB = async (req,res) => {
    const {email, name} = req.body;
    const targetUser = await db.User.findOne({ where: { email: email }});
    if(targetUser){
        const payload = {
            name: targetUser.name,
            id: targetUser.id,                
        };
        const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
        res.status(200).send({
            token: token,
            message: 'login successful.'
        });
        
    }else{
        
        const newUser  =    await db.User.create({
                                email: email,
                                name: `FROM FB: ${name}`,            
                            });
        
        const payload = {
            name: newUser.name,
            id: newUser.id,
        };
        const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
        res.status(201).send({
            token: token,
            message: 'login successful.'
        });
    };
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    infoUser,
    registerAndLoginFB,
};