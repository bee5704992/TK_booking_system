require('dotenv').config();
const db = require('./models/index');
const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/User');
const orderRoutes = require('./routes/Order');

const itemRoutes = require('./routes/Item');

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes, orderRoutes);


app.use('/controllItems', itemRoutes);

db.sequelize.sync({force: false}).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server run port ${process.env.PORT}`)
    }); 
});