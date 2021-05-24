module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Item',{
        type: {
            type: DataTypes.STRING(255),
            unique: true
        },
        price: {
            type: DataTypes.INTEGER
        },
        total_count: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps: false
    });

    model.associate = models => {
        model.hasMany(models.OrderItem, {foreignKey: 'item_id'});
        model.hasMany(models.SoldItem, {foreignKey: 'item_id'});
    }

    return model;
}