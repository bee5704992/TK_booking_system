module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('OrderItem',{
        order_count: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps: false
    });

    model.associate = models => {
        model.belongsTo(models.Item, {foreignKey: 'item_id'});
        model.belongsTo(models.Order, {foreignKey: 'order_id'});
    }

    return model;
}