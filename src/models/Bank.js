module.exports = (sequelize, DataTypes) => {
        const Bank = sequelize.define('Bank', {

            bank_name: DataTypes.STRING,
            banknumber: DataTypes.INTEGER,

        })
        Bank.associate = function(models) {
            Bank.belongsTo(models.User)

        }

        return Bank
    }
    //dont touch