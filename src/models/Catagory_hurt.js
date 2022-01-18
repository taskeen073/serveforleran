module.exports = (sequelize, DataTypes) => {
        const Catagory_hurt = sequelize.define('Catagory_hurt', {

            Catagory_hurt_price: DataTypes.INTEGER
        })

        Catagory_hurt.associate = function(models) {
            Catagory_hurt.belongsTo(models.Hurt),
                Catagory_hurt.belongsTo(models.User)

        }
        return Catagory_hurt
    }
    //dont touch