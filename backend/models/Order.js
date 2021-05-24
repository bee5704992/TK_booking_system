module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Order',{
        isRecieved: {
            type: DataTypes.BOOLEAN
        },
        date: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    });

    model.associate = models => {
        model.hasMany(models.OrderItem, {foreignKey: 'order_id'});
        model.belongsTo(models.User, {foreignKey: 'user_id'});
    }

    return model;
}