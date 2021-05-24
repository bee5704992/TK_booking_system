module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('SoldItem',{
        sold_count: {
            type: DataTypes.INTEGER
        }
    });

    model.associate = models => {
        model.belongsTo(models.Item, {foreignKey: 'item_id'});
    }

    return model;
}