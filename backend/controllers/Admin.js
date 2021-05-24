const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createAdmin = async (req, res) => {
    const {username, password} = req.body;
    const targetAdmin = await db.Admin.findOne({ where: { username: username }});
    if(targetAdmin){
        res.status(400).send({message: 'username already taken.'});
    }else{
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        await db.Admin.create({
            username: username,
            password: hashedPassword
        });
        res.status(201).send({message: 'admin created.'});
    };
};

const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    const targetAdmin = await db.Admin.findOne({ where: { username: username }});
    if(!targetAdmin){
        res.status(400).send({message: 'username or password is wrong.'});
    }else{
        const isCorrectPassword = bcryptjs.compareSync(password, targetAdmin.password);
        if(isCorrectPassword){
            const payload = {
                username: targetAdmin.username,
                id: targetAdmin.id,                
            };
            const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
            res.status(200).send({
                token: token,
                message: 'login successful.'
            });
        }else{
            res.status(400).send({message: 'username or password is wrong.'});
        };
    };
};



module.exports = {
    createAdmin,
    loginAdmin
};