module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User',{
        email: {
            type: DataTypes.STRING(255),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        },
        name: {
            type: DataTypes.STRING(100)
        },
        phone: {
            type: DataTypes.STRING(12)
        }
    });

    model.associate = models => {
        model.hasMany(models.Order, {foreignKey: 'user_id'});
    };

    return model;
}